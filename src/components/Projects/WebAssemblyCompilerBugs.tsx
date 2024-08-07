import { Helmet } from "react-helmet";
import "../../styles/wasmview.scss";
import { WebAssemblyCompilerBugsProjectDetails } from "./researchProjectDetails";
import PDFLinkComponent from "./PDFLinkComponent";
import styles from "../../styles/project_pages.module.scss";

const WasmCompilerBugComponent = () => {
  const { PaperLink, GitHubLink, ShortName, FullTitle, DOI } =
    WebAssemblyCompilerBugsProjectDetails;

  return (
    <div>
      <Helmet>
        <title>Alan Romano | {ShortName}</title>
      </Helmet>
      <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>

      <div className="readable-content">
        <PDFLinkComponent doi={DOI} link={PaperLink} />
        <p>
          WebAssembly compilers are used to build WebAssembly modules from
          source code written in traditionally non-web languages. These
          compilers often provide library bindings to support accessing WebAPIs
          in the source language and accessing standard libraries on the web. As
          a result of this additional complexity, WebAssembly compilers face
          different challenges compared with traditional compilers of native
          langauges. These challenges can introduce new bugs into the compilers.
        </p>
        <p>
          In order to understand the characteristics of these bugs, we conduct
          two empirical studies. First, we perform a qualitative study on the
          bugs in the most widely used WebAssembly compiler, Emscripten. We
          investigate 146 bug reports from Emscripten that are related to the
          unique challenges that WebAssembly compilers face. Second, we conduct
          a quantitative study of 1,054 bugs in three open-source WebAssembly
          compilers, AssemblyScript, Emscripten, and Rustc/Wasm-Bindgen. We
          analyze these bugs along three dimensions: lifecycle, impact, and
          sizes of bug-inducing inputs and bug fixes. We believe our analysis
          results will shed light on opportunities to design effective tools for
          testing and debugging WebAssembly compilers.
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
};
export default WasmCompilerBugComponent;
