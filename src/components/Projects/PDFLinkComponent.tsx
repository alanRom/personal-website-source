import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PDFLinkComponent = ({ link, doi }: { link: string; doi?: string }) => {
  let doiComponent = <span />;
  if (doi) {
    doiComponent = (
      <a
        href={`https://doi.org/${doi}`}
        className="card-footer-item"
        style={{ wordBreak: "break-word" }}
      >
        <FontAwesomeIcon icon="atlas" />
        &nbsp;DOI: {doi}
      </a>
    );
  }
  return (
    <footer className="card-footer" style={{ borderTop: "none" }}>
      {doiComponent}
      <a href={link} className="card-footer-item">
        <FontAwesomeIcon icon="file-pdf" />
        &nbsp;{link.endsWith(".pdf") ? "PDF" : "Paper"} Link
      </a>
    </footer>
  );
};
PDFLinkComponent.defaultProps = {
  doi: undefined,
};

export default PDFLinkComponent;
