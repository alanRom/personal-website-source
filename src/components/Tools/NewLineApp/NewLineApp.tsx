// eslint-disable-next-line no-use-before-define
import { Component } from "react";
import { Helmet } from "react-helmet";

declare interface NewLineState {
  textToEscape: string;
  escapedText: string;
}

let __newLineAppState: NewLineState = {
  textToEscape: "",
  escapedText: "",
};

export default class NewLineApp extends Component {
  state: NewLineState;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = __newLineAppState;
    this.onValueChange = this.onValueChange.bind(this);
  }

  componentWillUnmount() {
    __newLineAppState = this.state;
  }

  onValueChange(e: { target: { value: any } }) {
    const { value } = e.target;
    const escapedValue = value
      .replace(/\r\n/g, "\\r\\n")
      .replace(/\r/g, "\\r")
      .replace(/\n/g, "\\n");
    this.setState({ textToEscape: value, escapedText: escapedValue });
  }

  render() {
    const { textToEscape, escapedText } = this.state;
    const lineNumbers = (textToEscape.match(/\n/g) || "").length + 1;
    return (
      <div>
        <Helmet>
          <title>Alan Romano | Newline Escaping App</title>
        </Helmet>
        <h1 className="title">Newline Escaping </h1>
        <br />
        <div className="column">
          <div className="columns">
            <div className="column">
              <textarea
                className="textarea"
                value={textToEscape}
                onChange={this.onValueChange}
                placeholder="Enter text to escape"
              />
              <br />
            </div>
            <div className="column is-1">
              <span>Line Count:</span>
              <br />
              <input
                value={lineNumbers}
                readOnly
                className="input is-small"
                type="text"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <textarea className="textarea" value={escapedText} readOnly />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
