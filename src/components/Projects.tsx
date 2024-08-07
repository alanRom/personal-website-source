import { Component } from "react";
import { Helmet } from "react-helmet";
import Project from "./Projects/ProjectComponent";
import {

  ResearchProjectsOrder,
  ResearchProjectDetails,
  ProjectDetails,
} from "./Projects/researchProjectDetails";
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
