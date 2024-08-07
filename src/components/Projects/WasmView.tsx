import { Component } from "react";
import { Helmet } from "react-helmet";
import "../../styles/wasmview.scss";
import { WasmViewProjectDetails } from "./researchProjectDetails";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import PDFLinkComponent from "./PDFLinkComponent";
import styles from "../../styles/project_pages.module.scss";

class WasmViewComponent extends Component {
  state = {};

  render() {
    const { PaperLink, GitHubLink, ShortName, FullTitle, YoutubeVideoID, DOI } =
      WasmViewProjectDetails;

    return (
      <div>
        <Helmet>
          <title>Alan Romano | {ShortName}</title>
        </Helmet>
        <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>

        <YoutubeVideoComponent
          videoId={YoutubeVideoID}
          title="wasmview-demo"
          altText="WasmView Demo Video"
        />

        <div className="readable-content">
          <PDFLinkComponent doi={DOI} link={PaperLink} />

          <p>
            WasmView is a tool meant to help WebAssembly developers understand
            the cross-language interaction between a WebAssembly module and the
            JavaScript code supporting it.
          </p>
          <br />
          <p>
            The source code for the tool and instructions for installation are
            available at its &nbsp;
            <a href={GitHubLink}>GitHub repo</a>.
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default WasmViewComponent;
