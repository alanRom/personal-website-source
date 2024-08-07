import { Component } from "react";
import { Helmet } from "react-helmet";
import Project from "./Projects/ProjectComponent";
import {
  WAsmViewLink,
  MinerRayLink,
  WASimLink,
  WebAssemblyCompilerBugLink,
  FlakyUITestLink,
  WobfuscatorLink,
  ResearchProjectsOrder,
  ResearchProjectDetails,
  ResearchProjects,
  ProjectDetails,
} from "./Projects/researchProjectDetails";
import wasmViewPreview from "../WasmViewPreview.webp";
import wasimPreview from "../WASimPreview.webp";
import { ProjectCardDetails } from "../types";

class ProjectsComponent extends Component {
  constructor(props: ProjectDetails & Readonly<{}>) {
    super(props);
    this.state = {};
  }

  render() {
    const projects = [...ResearchProjectsOrder]
      .reverse()
      .map((proj) => ResearchProjectDetails[proj]);
    // const projects: ProjectDetails[] = [
    //   {
    //     projectName: "Wobfuscator",
    //     projectDesc:
    //       "We develop an obfsucation tool, Wobfuscator, that partially translates JavaScript malware to WebAssembly.",
    //     projectLink: "/wobfuscator.html",
    //     pdfLink: WobfuscatorLink,
    //   },
    //   {
    //     projectName: "WebAssembly Compiler Bug Study",
    //     projectDesc:
    //       "We perform an empirical study on the bugs arising in WebAssembly compilers.",
    //     projectLink: "/compiler-bugs.html",
    //     pdfLink: WebAssemblyCompilerBugLink,
    //   },
    //   {
    //     projectName: "Flaky UI Tests",
    //     projectDesc:
    //       "We perform an empirical study on flakiness arising in UI tests. We focus on the root cause of the flakiness, the manifestation strategy to reporduce the flakiness, and the fixing strategy.",
    //     projectLink: "/flakyui.html",
    //     pdfLink: FlakyUITestLink,
    //   },
    //   {
    //     projectName: "MinerRay",
    //     projectDesc:
    //       "This tool can detect malicious WebAssembly- and JavaScript-based cryptominers hidden in webpages.",
    //     projectLink: "/minerray.html",
    //     pdfLink: MinerRayLink,
    //   },
    //   {
    //     projectName: "WASim",
    //     projectDesc:
    //       "This is a classifier that can predict the purpose of a given WebAssembly module from a set of 11 purpose labels.",
    //     imageSrc: wasimPreview,
    //     projectLink: "/wasim.html",
    //     altText: "WASim Preview",
    //     pdfLink: WASimLink,
    //   },
    //   {
    //     projectName: "WasmView",
    //     projectDesc:
    //       "This tool allows WebAssembly developers to visualize the interaction between WebAssembly and JavaScript within a given web app.",
    //     imageSrc: wasmViewPreview,
    //     projectLink: "/wasmview.html",
    //     altText: "WasmView Preview",
    //     pdfLink: WAsmViewLink,
    //   },
    // ];

    return (
      <div>
        <Helmet>
          <title>Alan Romano | Projects</title>
          <meta
            name="Description"
            content="A list of research projects accepted for publication."
          />
        </Helmet>
        <h1 className="title">Projects</h1>
        <div className="grid is-col-min-10 ">
          {projects.map((pD: ProjectDetails) => {
            const cardDetails: ProjectCardDetails = {
              projectName: pD.ShortName,
              projectDesc: pD.Description,
              imageSrc: pD.PreviewImageSrc,
              projectLink: pD.SitePath,
              altText: pD.PreviewImageAltText,
              pdfLink: pD.PaperLink,
            };

            return (
              <Project key={`card-for-${pD.ShortName}`} {...cardDetails} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProjectsComponent;
