import { Helmet } from "react-helmet";
import { FunctionInliningProjectDetails } from "./researchProjectDetails";
import styles from "../../styles/project_pages.module.scss";
import PDFLinkComponent from "./PDFLinkComponent";
import YoutubeVideoComponent from "./YoutubeVideoComponent";

const FunctionInliningComponent = () => {
  const { PaperLink, GitHubLink, ShortName, FullTitle, YoutubeVideoID, DOI } =
    FunctionInliningProjectDetails;
  return (
    <>
      <Helmet>
        <title>Alan Romano | {ShortName}</title>
      </Helmet>
      <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>

      <div className="readable-content">
        <PDFLinkComponent doi={DOI} link={PaperLink} />

        <p>
          In this project, we investigate the effects of function inlining
          optimizations on WebAssembly modules. We find that these optimizations
          can result in in slower WebAssembly module runtime performance when
          applied. We inspect the LLVM and Binaryen inlining optimization passes
          used in the Emscripten C/C++-to-WebAssembly compiler. We inspect 127
          C/C++ samples from the LLVM test suite and find that 66 samples
          exhibit counterintuitive runtime behavior due to function inlining.
          This behavior is seen when inlining hot functions into long-running
          functions. We hope our findings motivate further work on revising
          existing optimizations with the unique characteristics of WebAssembly
          environments in mind.
        </p>
        <br />
        <p>
          The data collected from our study is available as on our project's
          &nbsp;<a href={GitHubLink}>Zenodo page</a>.
        </p>
        <br />
        <br />
      </div>
    </>
  );
};

export default FunctionInliningComponent;
