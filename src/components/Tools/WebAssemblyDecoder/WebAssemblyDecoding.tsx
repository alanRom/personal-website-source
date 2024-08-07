import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import base64js from "base64-js";

declare interface WasmDecoderState {
  inputString: string;
  decodingType: string;
  outputText: string;
  isProcessing: boolean;
  hasError: boolean;
  wabtModule: any | null;
}

declare interface DecodingOptionDetails {
  value: string;
  label: string;
  colorClass: string;
}

let __wasmDecoderState: WasmDecoderState = {
  inputString: "",
  outputText: "",
  decodingType: "base64",
  isProcessing: false,
  hasError: false,
  wabtModule: null,
};

export default class WebAssemblyDecoderApp extends Component {
  state: WasmDecoderState;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = __wasmDecoderState;

    this.onDecodingInputChange = this.onDecodingInputChange.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.onStartDecoding = this.onStartDecoding.bind(this);
    this.onErrorClose = this.onErrorClose.bind(this);
  }

  componentDidMount() {
    const { wabtModule } = this.state;
    if (wabtModule === null) {
      // wabt().then((wabtMode) => {
      //   this.setState({ wabtModule: wabtMode });
      // });
    }
  }

  componentWillUnmount() {
    __wasmDecoderState = this.state;
  }

  onDecodingInputChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ inputString: event.target.value.trim() });
  }

  onDecodingTypeChange(decodingType: string) {
    this.setState({ decodingType });
  }

  onStartDecoding() {
    this.setState({ isProcessing: true });
    const { decodingType } = this.state;
    if (decodingType === "base64") {
      this.decodeBase64();
    } else if (decodingType === "ints-array") {
      this.decodeIntsArray();
    }
  }

  onEnterPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.onStartDecoding();
    }
  }

  onErrorClose() {
    this.setState({ hasError: false });
  }

  decodeBase64() {
    const { inputString } = this.state;
    try {
      const decodedBytes = base64js.toByteArray(inputString);
      this.decodeWasmBytes(decodedBytes);
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      this.setState({ hasError: true, isProcessing: false });
    }
  }

  decodeIntsArray() {
    const { inputString } = this.state;
    try {
      const cleanedString = inputString.replace(/^\[/, "").replace(/\]$/, "");
      const decodedBytes = new Uint8Array(
        cleanedString.split(",").map((x) => parseInt(x, 10))
      );
      this.decodeWasmBytes(decodedBytes);
    } catch (err) {
      console.error(err);
      this.setState({ hasError: true, isProcessing: false });
    }
  }

  decodeWasmBytes(decodedBytes: Uint8Array) {
    const { wabtModule } = this.state;
    try {
      const wasmModule = wabtModule;

      if (wasmModule) {
        const decodedModule = wasmModule.readWasm(decodedBytes, {
          readDebugNames: true,
          exceptions: true,
          mutable_globals: true,
          sat_float_to_int: true,
          sign_extension: true,
          simd: true,
          threads: true,
          multi_value: true,
          tail_call: true,
          bulk_memory: true,
          reference_types: true,
          annotations: true,
          gc: true,
        });
        decodedModule.applyNames();
        const wasmText = decodedModule.toText({
          foldExprs: false,
          inlineExport: false,
        });

        this.setState({
          outputText: wasmText,
          isProcessing: false,
          hasError: false,
        });
      } else {
        this.setState({ hasError: true, isProcessing: false });
      }
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      this.setState({ hasError: true, isProcessing: false });
    }
  }

  render() {
    const { inputString, decodingType, outputText, isProcessing, hasError } =
      this.state;
    const decodingOptions: DecodingOptionDetails[] = [
      { value: "base64", label: "Base 64", colorClass: "is-dark" },
      {
        value: "ints-array",
        label: "Array of Integers",
        colorClass: "is-dark",
      },
    ];

    const syntaxArea =
      outputText === "" ? (
        <span>WebAssembly text will be shown here</span>
      ) : (
        <SyntaxHighlighter
          language="wasm"
          style={okaidia}
          showLineNumbers
          customStyle={{ fontSize: "12px" }}
        >
          {outputText}
        </SyntaxHighlighter>
      );
    const errorNotification = hasError ? (
      <div className="notification is-danger">
        <button type="button" className="delete" onClick={this.onErrorClose} />
        Sorry, it looks like that input couldn&apos;t be decoded. Try checking
        it to make sure it&apos;s correct. You can check the console for more
        info.
      </div>
    ) : (
      <span />
    );

    return (
      <div>
        <Helmet>
          <title>Alan Romano | WebAssembly Decoder App</title>
        </Helmet>
        <h1 className="title">WebAssembly Decoder</h1>
        <p>
          This tool can decode WebAssembly modules that have been encoded as
          base64 strings or plain number arrays in JavaScript.
        </p>
        <div className="columns">
          <div className="column">
            <div className="buttons has-addons is-centered">
              {decodingOptions.map((decOpts) => (
                <button
                  type="button"
                  key={`${decOpts.value}-decode-button`}
                  className={`button ${decOpts.colorClass} ${
                    decodingType === decOpts.value ? "is-active" : ""
                  }`}
                  onClick={this.onDecodingTypeChange.bind(this, decOpts.value)}
                >
                  {decOpts.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <textarea
              className="textarea"
              value={inputString}
              placeholder="Enter encoded WebAssembly module here"
              onChange={this.onDecodingInputChange}
              onKeyDown={this.onEnterPress}
            />
          </div>
        </div>

        <div className="columns">
          <div className="column">
            {errorNotification}
            <div className="buttons has-addons is-centered">
              <button
                type="button"
                className={`button is-primary ${
                  isProcessing ? "is-loading" : ""
                }`}
                disabled={inputString === "" || decodingType === ""}
                onClick={this.onStartDecoding}
              >
                Start Decoding
              </button>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">{syntaxArea}</div>
        </div>
      </div>
    );
  }
}
