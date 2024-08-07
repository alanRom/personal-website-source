import { Helmet } from "react-helmet";
import { MinerRayProjectDetails } from "./researchProjectDetails";
import "../../styles/wasmview.scss";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import PDFLinkComponent from "./PDFLinkComponent";
import styles from "../../styles/project_pages.module.scss";

export default function MinerRay() {
  const { PaperLink, FullTitle, ShortName, GitHubLink, YoutubeVideoID, DOI } =
    MinerRayProjectDetails;
  return (
    <div>
      <Helmet>
        <title>Alan Romano | {ShortName}</title>
      </Helmet>
      <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>
      <YoutubeVideoComponent
        videoId={YoutubeVideoID}
        title="minerray-demo"
        altText="MinerRay Presentation Video"
      />
      <div className="readable-content">
        <PDFLinkComponent doi={DOI} link={PaperLink} />
        <p>
          MinerRay is a tool designed to detect malicious in-browser
          cryptominers hidden in webpages. This tool uses a cross-language
          detection strategy between WebAssembly and JavaScript that allows it
          to detect miners that exclusively use on language or perform their
          operations across the language boundary.
        </p>
        <br />
        <p>
          This tool performs static analysis on WebAssembly and JavaScript by
          creating langauge abstractons in both languages to model cryptographic
          hashing operations. Using these abstractons, a control-flow graph is
          constructed to follow the hashing operations sequentially, and this
          graph is scanned to detect certain patterns unique to proof-of-work
          algorithms used in cryptocurrency mining.
        </p>
        <br />
        <p>
          The source code for MinerRay is available at its &nbsp;
          <a href={GitHubLink}>GitHub repo</a>.
        </p>
      </div>
    </div>
  );
}
