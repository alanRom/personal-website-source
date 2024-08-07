import { Component } from "react";
import { Helmet } from "react-helmet";
import "../../styles/wasmview.scss";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import { FlakyUITestsProjectDetails } from "./researchProjectDetails";
import PDFLinkComponent from "./PDFLinkComponent";
import styles from "../../styles/project_pages.module.scss";

class FlakyUITestComponent extends Component {
  state = {};

  render() {
    const { PaperLink, GitHubLink, ShortName, FullTitle, YoutubeVideoID, DOI } =
      FlakyUITestsProjectDetails;

    return (
      <div>
        <Helmet>
          <title>Alan Romano | {ShortName}</title>
        </Helmet>
        <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>

        <YoutubeVideoComponent
          videoId={YoutubeVideoID}
          title="ui-flaky-test-presentation"
          altText="An Empirical Analysis of UI-Based Flaky Tests Presentation Video"
        />
        <div className="readable-content">
          <PDFLinkComponent doi={DOI} link={PaperLink} />

          <p>
            Flaky tests are tests that produce different results on different
            runs without making any changes to the test or the code under test.
            These tests are unreliable, and they have been found to impact
            test-suites in large industrial projects. As a result, flaky tests
            have become an active area of research. Most of this research
            focuses on traditional unit tests found in non-interactive, non-UI
            projects. For this reason, we perform a study on these UI flaky
            tests to identify their root causes, how they manifest, and how they
            are fixed.
          </p>
          <br />
          <p>
            The data of our study can be found in the
            <a href={GitHubLink}>&nbsp;project website and GitHub repo</a>.
          </p>
          <br />
          <br />
        </div>
      </div>
    );
  }
}

export default FlakyUITestComponent;
