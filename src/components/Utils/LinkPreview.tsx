import { ReactNode, useRef} from "react";
import './LinkPreview.scss';
import * as HoverCard from "@radix-ui/react-hover-card";

const LinkPreviewComponent = (props: { href: string; children: ReactNode }) => {
  const { href, children } = props;

  const linkElem = (
    <iframe src={href} title={`Preview of ${href}`} />
    
  );

  

  return <HoverCard.Root openDelay={400}>
  <HoverCard.Trigger asChild>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer dns-prefetch prefetch"
    >
      {children}
    </a>
  </HoverCard.Trigger>
  <HoverCard.Portal>
    <HoverCard.Content className="HoverCardContent" sideOffset={5}>
      {linkElem}
      <HoverCard.Arrow className="HoverCardArrow" />
    </HoverCard.Content>
  </HoverCard.Portal>
</HoverCard.Root>
;
};

export default LinkPreviewComponent;
