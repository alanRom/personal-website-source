/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable no-unused-vars */
import { ChangeEventHandler, Component, MouseEventHandler } from "react";

declare interface SetComponentProps {
  setIndex: number;
  setSeparator: string;
  setValue: string;
  onSeparatorChange: (
    index: number,
    event: { target: { value: string } }
  ) => void;
  onValueChange: (index: number, event: { target: { value: string } }) => void;
  onSetSeparatorButtonChange: (index: number, separator: string) => void;
}

class SetComponent extends Component<SetComponentProps> {
  onValueChange: ChangeEventHandler<HTMLTextAreaElement>;

  onCommaSeparatorButtonChange: MouseEventHandler<HTMLButtonElement>;

  onDotSeparatorButtonChange: MouseEventHandler<HTMLButtonElement>;

  onColumnSeparatorButtonChange: MouseEventHandler<HTMLButtonElement>;

  onRowSeparatorButtonChange: MouseEventHandler<HTMLButtonElement>;


  constructor(props: SetComponentProps) {
    super(props);
    // this.onSeparatorChange = this.props.onSeparatorChange.bind(this, props.setIndex);
    this.onValueChange = props.onValueChange.bind(this, props.setIndex);

    this.onCommaSeparatorButtonChange = props.onSetSeparatorButtonChange.bind(
      this,
      props.setIndex,
      ","
    );
    this.onDotSeparatorButtonChange = props.onSetSeparatorButtonChange.bind(
      this,
      props.setIndex,
      "."
    );
    this.onColumnSeparatorButtonChange = props.onSetSeparatorButtonChange.bind(
      this,
      props.setIndex,
      "\n"
    );
    this.onRowSeparatorButtonChange = props.onSetSeparatorButtonChange.bind(
      this,
      props.setIndex,
      "\t"
    );
  }

  render() {
    const { setIndex, setSeparator, setValue } = this.props;
    return (
      <div className="column">
        <h3 className="subtitle" style={{ fontWeight: "bolder" }}>
          Set {setIndex + 1}
        </h3>
        <div className="columns">
          <div className="column">
            <div className="buttons has-addons is-right">
              <button
                type="button"
                className={`button is-dark ${
                  setSeparator === "," ? "is-active" : ""
                }`}
                onClick={this.onCommaSeparatorButtonChange}
              >
                ,
              </button>
              <button
                type="button"
                className={`button is-dark ${
                  setSeparator === "." ? "is-active" : ""
                }`}
                onClick={this.onDotSeparatorButtonChange}
              >
                .
              </button>
              <button
                type="button"
                className={`button is-dark ${
                  setSeparator === "\n" ? "is-active" : ""
                }`}
                onClick={this.onColumnSeparatorButtonChange}
              >
                Column
              </button>
              <button
                type="button"
                className={`button is-dark ${
                  setSeparator === "\t" ? "is-active" : ""
                }`}
                onClick={this.onRowSeparatorButtonChange}
              >
                Row
              </button>
            </div>
          </div>
        </div>
        <textarea
          className="textarea"
          value={setValue}
          onChange={this.onValueChange}
        />
      </div>
    );
  }
}

export default SetComponent;
