import lazy, { PreloadableComponent } from "react-lazy-with-preload";
import { RouteDetails } from "../../types";
import {
  ResearchProjectDetails,
  ResearchProjects,
  ResearchProjectsOrder,
} from "../Projects/researchProjectDetails";
// import AboutComponent from './About';

const HomeComponent = lazy(() => import("../Home"));
const ResumeComponent = lazy(() => import("../Resume"));
const ProjectsComponent = lazy(() => import("../Projects"));
const WasmView = lazy(() => import("../Projects/WasmView"));
const WASim = lazy(() => import("../Projects/WASim"));
const FlakyUITestComponent = lazy(() => import("../Projects/FlakyUITests"));
const MinerRay = lazy(() => import("../Projects/MinerRay"));
const WebAssemblyCompilerBugs = lazy(
  () => import("../Projects/WebAssemblyCompilerBugs")
);
const WobfuscatorComponent = lazy(() => import("../Projects/Wobfuscator"));
const WASPurComponent = lazy(() => import("../Projects/WASPurComponent"));
const FunctionInliningComponent = lazy(
  () => import("../Projects/FunctionInliningComponent")
);

const ToolsComponent = lazy(() => import("../Tools"));
const NewLineComponent = lazy(() => import("../Tools/NewLineApp/NewLineApp"));
const SetDiffComponent = lazy(
  () => import("../Tools/SetDifferenceApp/SetDifferenceApp")
);
const WebAssemblyDecoderComponent = lazy(
  () => import("../Tools/WebAssemblyDecoder/WebAssemblyDecoding")
);

const researchProjectComponents: {
  [key in ResearchProjects]: PreloadableComponent<any>;
} = {
  [ResearchProjects.WasmView]: WasmView,
  [ResearchProjects.WASim]: WASim,
  [ResearchProjects.MinerRay]: MinerRay,
  [ResearchProjects.FlakyUITests]: FlakyUITestComponent,
  [ResearchProjects.CompilerBugs]: WebAssemblyCompilerBugs,
  [ResearchProjects.Wobfuscator]: WobfuscatorComponent,
  [ResearchProjects.WASPur]: WASPurComponent,
  [ResearchProjects.FunctionInlining]: FunctionInliningComponent,
};

const researchProjectAppRoutes: RouteDetails[] = ResearchProjectsOrder.map(
  (proj) => {
    const projectDetails = ResearchProjectDetails[proj];
    return {
      route: projectDetails.SitePath,
      showOnNav: false,
      exact: false,
      title: projectDetails.ShortName,
      sublinks: [],
      component: researchProjectComponents[proj],
    };
  }
);

const AppRoutes: RouteDetails[] = [
  {
    route: "/",
    showOnNav: true,
    exact: true,
    title: "Home",
    sublinks: [],
    component: HomeComponent,
  },
  {
    route: "/resume.html",
    showOnNav: true,
    exact: false,
    title: "Resume",
    sublinks: [],
    component: ResumeComponent,
  },
  {
    route: "/projects.html",
    showOnNav: true,
    exact: false,
    title: "Projects",
    sublinks: [...ResearchProjectsOrder].reverse().map((proj) => {
      const projectDetails = ResearchProjectDetails[proj];
      return { title: projectDetails.ShortName, link: projectDetails.SitePath };
    }),
    component: ProjectsComponent,
  },
  {
    route: "/tools.html",
    showOnNav: true,
    exact: false,
    title: "Tools",
    sublinks: [
      // { title: "WebAssembly Decoder", link: "/wasmdecoder.html" },
      { title: "Set Diff", link: "/setdiff.html" },
      { title: "Newline Escaping ", link: "/newline.html" },
    ],
    component: ToolsComponent,
  },
  // {
  //     route: '/about.html',
  //     showOnNav: true,
  //     title:'About',
  //     sublinks: [],
  //     component: AboutComponent
  // },
  {
    route: "/setdiff.html",
    showOnNav: false,
    exact: false,
    title: "Set Difference App",
    sublinks: [],
    component: SetDiffComponent,
  },
  {
    route: "/newline.html",
    showOnNav: false,
    exact: false,
    title: "New Line App",
    sublinks: [],
    component: NewLineComponent,
  },
  // {
  //   route: "/wasmdecoder.html",
  //   showOnNav: false,
  //   exact: false,
  //   title: "WebAssembly Decoder",
  //   sublinks: [],
  //   component: WebAssemblyDecoderComponent,
  // },
  ...researchProjectAppRoutes,
];

HomeComponent.preload()
  .then(() => ResumeComponent.preload())
  .then(() => ProjectsComponent.preload())
  .then(() => WasmView.preload())
  .then(() => WebAssemblyCompilerBugs.preload())
  .then(() => WASim.preload())
  .then(() => MinerRay.preload())
  .then(() => WobfuscatorComponent.preload())
  .then(() => ToolsComponent.preload())
  .then(() => NewLineComponent.preload())
  .then(() => SetDiffComponent.preload())
  .then(() => ProjectsComponent.preload())
  .then(() => WASPurComponent.preload())
  .then(() => FunctionInliningComponent.preload());

export default AppRoutes;
