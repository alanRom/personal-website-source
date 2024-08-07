import { Helmet } from "react-helmet";
import ProjectComponent from "./Projects/ProjectComponent";
import setDiffPreview from "../SetDiffPreview.webp";
import { ProjectCardDetails } from "../types";
// import newlinePreview from "../NewlinePreview.webp";

const ToolsComponent = () => {
  const projects: ProjectCardDetails[] = [
    // {
    //   projectName: "WebAssembly Decoder",
    //   projectDesc:
    //     "This tool can decode WebAssembly modules encoded as base64 strings or as an array of integers, typical inling behavior for including WebAssembly within JavaScript files.",
    //   projectLink: "/wasmdecoder.html",
    // },
    {
      projectName: "Set Difference App",
      projectDesc:
        "This app takes in two pieces of texts containing multiple items and finds the combination or difference among them.",
      imageSrc: setDiffPreview,
      projectLink: "/setdiff.html",
      altText: "Set Difference App Preview",
    },
    {
      projectName: "Newline Escape App",
      projectDesc:
        "This app takes in piece of text and escapes the newline breaks to return a one-line string.",
      projectLink: "/newline.html",
      // imageSrc: newlinePreview,
      // altText: "Newline Escape Preview",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Alan Romano | Tools</title>
        <meta
          name="Description"
          content="A list of small, simple utilties that are useful to have when performing data collection."
        />
      </Helmet>
      <h1 className="title">Tools</h1>
      <div className="grid">
        {projects.map((projectDetails) => (
          <ProjectComponent
            key={`tool-page-for-${projectDetails.projectName}`}
            {...projectDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ToolsComponent;
