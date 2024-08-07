import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faAtlas } from '@fortawesome/free-solid-svg-icons'

const PDFLinkComponent = ({ link, doi }: { link: string; doi?: string }) => {
  let doiComponent = <span />;
  if (doi) {
    doiComponent = (
      <a
        href={`https://doi.org/${doi}`}
        className="card-footer-item"
        style={{ wordBreak: "break-word" }}
      >
        <FontAwesomeIcon icon={faAtlas} />
        &nbsp;DOI: {doi}
      </a>
    );
  }
  return (
    <footer className="card-footer" style={{ borderTop: "none" }}>
      {doiComponent}
      <a href={link} className="card-footer-item">
        <FontAwesomeIcon icon={faFilePdf} />
        &nbsp;{link.endsWith(".pdf") ? "PDF" : "Paper"} Link
      </a>
    </footer>
  );
};
PDFLinkComponent.defaultProps = {
  doi: undefined,
};

export default PDFLinkComponent;
