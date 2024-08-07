import React, { PreloadableComponent } from "react";



export declare interface ProjectCardDetails {
  projectName: string;
  projectDesc: string;
  projectLink: string;
  imageSrc?: string;
  altText?: string;
  pdfLink?: string;
}

export declare interface SubLinkDetails {
  title: string;
  link: string;
}

export declare interface RouteDetails {
  route: string;
  showOnNav: boolean;
  exact: boolean;
  title: string;
  sublinks: SubLinkDetails[];
  component: React.Component | PreloadableComponent<any>;
}
