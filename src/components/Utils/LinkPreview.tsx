import { ReactNode} from "react";

const LinkPreviewComponent = (props: { href: string; children: ReactNode }) => {
  const { href, children } = props;
  // const iframeEl = useRef(null);
  const linkElem = (
    <span>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer dns-prefetch prefetch"
      >
        {children}
      </a>
      {/* <span
        className="box"
        onClick={(event) => {
          event.preventDefault();
          window.open(href, "_blank");
        }}
      >
        <iframe ref={iframeEl} title={`Preview of ${href}`} />
      </span> */}
    </span>
  );

  // setTimeout(() => {
  //   const isNotMobile = window.matchMedia(
  //     "only screen and (min-width: 1024px)"
  //   ).matches;
  //   if (iframeEl && iframeEl.current && isNotMobile) {
  //     // @ts-ignore
  //     iframeEl.current.src = href;
  //   }
  // }, 100);

  return linkElem;
};

export default LinkPreviewComponent;
