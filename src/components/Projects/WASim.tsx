import { Component } from "react";
import { Helmet } from "react-helmet";
import "../../styles/wasmview.scss";
import { WASimProjectDetails } from "./researchProjectDetails";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import PDFLinkComponent from "./PDFLinkComponent";
import styles from "../../styles/project_pages.module.scss";

class WASimComponent extends Component {
  state = {};

  render() {
    const { PaperLink, GitHubLink, ShortName, FullTitle, YoutubeVideoID, DOI } =
      WASimProjectDetails;

    return (
      <div>
        <Helmet>
          <title>Alan Romano | {ShortName}</title>
        </Helmet>
        <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>
        <YoutubeVideoComponent
          videoId={YoutubeVideoID}
          title="wasim-demo"
          altText="WASim Demo Video"
        />
        <div className="readable-content">
          <PDFLinkComponent doi={DOI} link={PaperLink} />
          <p>
            WASim is a classification tool that can identify the purpose of a
            WebAssembly module using four different machine-learning-based
            classification models.
          </p>
          <br />
          <p>
            The source code for the tool and instructions for installation are
            available at its
            <a href={GitHubLink}>&nbsp;GitHub repo</a>.
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default WASimComponent;
