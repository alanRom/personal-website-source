import { Component } from "react";
import { Helmet } from "react-helmet";
import SetComponent from "./SetComponent";

declare interface SeparatorChoices {
  label: string;
  value: string;
}

declare interface SetsDetails {
  id: number;
  value: string;
  separator: string;
}

declare interface SetDifferenceState {
  separatorChoices: SeparatorChoices[];
  sets: SetsDetails[];
  calculatedOutput: string;
}

let __setDiffState: SetDifferenceState = {
  separatorChoices: [
    { label: ",", value: "," },
    { label: "Column", value: "\n" },
    { label: "Row", value: "\t" },
  ],
  sets: [
    { value: "", separator: ",", id: 0 },
    { value: "", separator: ",", id: 1 },
  ],
  calculatedOutput: "",
};

class SetDifference extends Component {
  state: SetDifferenceState;

  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = __setDiffState;

    this.onSetSeparatorChange = this.onSetSeparatorChange.bind(this);
    this.onSetSeparatorButtonChange =
      this.onSetSeparatorButtonChange.bind(this);
    this.onSetValueChange = this.onSetValueChange.bind(this);
    this.calculateUnion = this.calculateUnion.bind(this);
    this.calculateDifference = this.calculateDifference.bind(this);
    this.swapSets = this.swapSets.bind(this);
  }

  componentWillUnmount() {
    __setDiffState = this.state;
  }

  onSetSeparatorChange(
    index: number,
    event: { target: { value: string } }
  ): void {
    const { sets } = this.state;
    const newSets: SetsDetails[] = [...sets];
    newSets[index].separator = event.target.value;
    this.setState({ sets: newSets });
  }

  onSetSeparatorButtonChange(index: number, separator: string) {
    const { sets } = this.state;
    const newSets: SetsDetails[] = [...sets];
    newSets[index].separator = separator;
    this.setState({ sets: newSets });
  }

  onSetValueChange(index: number, event: { target: { value: string } }) {
    const { sets } = this.state;
    const newSets: SetsDetails[] = [...sets];
    newSets[index].value = event.target.value;
    this.setState({ sets: newSets });
  }

  calculateUnion() {
    const { sets } = this.state;
    const getAllSets = sets
      .map((singleSet) => singleSet.value.split(singleSet.separator))
      .map((singleSet) => {
        return new Set(singleSet);
      });

    const finalSet = new Set();

    getAllSets.forEach((singleSet) => {
      singleSet.forEach((val1) => {
        finalSet.add(val1);
      });
    });

    const output = Array.from(finalSet).join("\n");

    this.setState({ calculatedOutput: output });
  }

  calculateDifference() {
    const { sets } = this.state;
    const getAllSets = sets
      .map((singleSet) =>
        singleSet.value.split(singleSet.separator).map((str) => str.trim())
      )
      .map((singleSet) => {
        return new Set(singleSet);
      });

    const finalSet = getAllSets.shift();

    if (finalSet) {
      getAllSets.forEach((singleSet) => {
        singleSet.forEach((val1) => {
          finalSet.delete(val1);
        });
      });
      const output = Array.from(finalSet).join("\n");
      this.setState({ calculatedOutput: output });
    }
  }

  swapSets() {
    const { sets } = this.state;
    if (sets.length === 2) {
      const newSets = [sets[1], sets[0]];
      this.setState({
        sets: newSets,
      });
    }
  }

  render() {
    const { sets, calculatedOutput } = this.state;

    return (
      <div style={{ height: "90vh" }}>
        <Helmet>
          <title>Alan Romano | Set Difference App</title>
        </Helmet>
        <h1 className="title">Set Difference</h1>
        <br />
        <div className="columns">
          {sets.map((singleSet, index) => (
            <SetComponent
              key={`set-comp-${singleSet.id}`}
              setIndex={index}
              setValue={singleSet.value}
              setSeparator={singleSet.separator}
              onSeparatorChange={this.onSetSeparatorChange}
              onValueChange={this.onSetValueChange}
              onSetSeparatorButtonChange={this.onSetSeparatorButtonChange}
            />
          ))}
        </div>
        <div className="columns">
          <div className="column">
            <div className="buttons is-grouped is-centered">
              <button
                className="button is-primary"
                type="button"
                onClick={this.calculateDifference}
              >
                Difference
              </button>
              &nbsp;
              <button
                type="button"
                className="button is-info"
                onClick={this.calculateUnion}
              >
                Union
              </button>
              &nbsp;
              {sets.length !== 2 ? (
                <span />
              ) : (
                <button
                  type="button"
                  className="button is-danger"
                  onClick={this.swapSets}
                >
                  Swap
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="columns" />
        <div className="column is-three-fifths is-offset-one-fifth">
          <textarea className="textarea" value={calculatedOutput} readOnly />
        </div>
      </div>
    );
  }
}

export default SetDifference;
