import { Helmet } from "react-helmet";
import { WaspurProjectDetails } from "./researchProjectDetails";
import PDFLinkComponent from "./PDFLinkComponent";
import YoutubeVideoComponent from "./YoutubeVideoComponent";
import styles from "../../styles/project_pages.module.scss";

const WASPurComponent = () => {
  const { ShortName, FullTitle, PaperLink, DOI } = WaspurProjectDetails;
  return (
    <>
      <Helmet>
        <title>Alan Romano | {ShortName} </title>
      </Helmet>
      <h1 className={"title " + styles.titleFit}>{FullTitle}</h1>

      <div className="readable-content">
        <PDFLinkComponent doi={DOI} link={PaperLink} />

        <p>
          In this paper, we construct WASPur, a tool to automatically identify
          the purposes of WebAssembly functions. To build this tool, we frst
          construct an extensive collection of WebAssembly samples that
          represent the state of WebAssembly. Second, we analyze the dataset and
          identify the diverse use cases of the collected WebAssembly modules.
          We leverage the dataset of WebAssembly modules to construct
          semantics-aware intermediate representations (IR) of the functions in
          the modules. We encode the function IR for use in a machine learning
          classifer, and we fnd that this classifer can predict the similarity
          of a given function against known named functions with an accuracy
          rate of 88.07%.
        </p>
      </div>
    </>
  );
};

export default WASPurComponent;
