import { Helmet } from "react-helmet";
import { WobfuscatorProjectDetails } from "./researchProjectDetails";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import PDFLinkComponent from "./PDFLinkComponent";
import styles from "../../styles/project_pages.module.scss";

const WobfuscatorComponent = () => {
  const { PaperLink, GitHubLink, ShortName, FullTitle, YoutubeVideoID, DOI } =
    WobfuscatorProjectDetails;
  return (
    <>
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
          Wobfuscator is an obfsucation tool that hides malicious JavaScript
          code in WebAssembly modules. For appropriate code snippets, the
          JavaScript code is opportunistically translated to WebAssembly in a
          way that preserves the original semantic meaning. We show that our
          obfuscation techniques can effectively reduce the ability of four
          state-of-the-art JavaScript malware detectors, &nbsp;
          <a href="https://dl.acm.org/doi/abs/10.1145/1920261.1920267">Cujo</a>,
          &nbsp;
          <a href="https://dl.acm.org/doi/10.5555/2028067.2028070">Zozzle</a>,
          &nbsp;<a href="https://doi.org/10.1007/978-3-319-93411-2_14">JaSt</a>,
          and &nbsp;
          <a href="https://dl.acm.org/doi/10.1145/3359789.3359813">JStap</a>, to
          identify the hidden malware.
        </p>
        <br />
        <p>
          The detection results data and projects used can be found on the
          project's &nbsp;<a href={GitHubLink}>GitHub repo</a>. For
          security-focused resarchers who want access to the Wobfuscator code,
          we ask that you send a request to the first author's email address.
        </p>
        <br />
        <br />
      </div>
    </>
  );
};

export default WobfuscatorComponent;
