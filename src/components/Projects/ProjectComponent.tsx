import { NavLink } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { ProjectCardDetails } from "../../types";

library.add(faFilePdf);
const ProjectComponent = (projectDetails: ProjectCardDetails) => {
  const { projectName, projectDesc, imageSrc, projectLink, altText, pdfLink } =
    projectDetails;

  const imageComponent =
    imageSrc != undefined ? <img src={imageSrc} alt={altText} /> : <span />;
  const pdfLinkComponent = pdfLink ? (
    <footer className="card-footer">
      <a href={pdfLink} className="card-footer-item">
        <FontAwesomeIcon icon="file-pdf" />
        &nbsp;{pdfLink.includes(".pdf") ? "PDF Link" : "Paper Link"}
      </a>
    </footer>
  ) : (
    <span />
  );

  return (
    <div className="cell" key={`column-for-${projectName}`}>
      <div className="card">
        <NavLink to={projectLink}>
          <div className="card-image">
            <figure className="image ">{imageComponent}</figure>
          </div>
        </NavLink>
        <NavLink to={projectLink}>
          <div className="card-content">
            <p className="title is-4">{projectName}</p>
            <br />
            <div className="content">{projectDesc}</div>
          </div>
        </NavLink>
        {pdfLinkComponent}
      </div>
    </div>
  );
};

export default ProjectComponent;
