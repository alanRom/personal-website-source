import wasmViewPreview from "../../WasmViewPreview.webp";
import wasimPreview from "../../WASimPreview.webp";

export enum ResearchProjects {
  WasmView = 'WasmView',
  WASim = 'WASim',
  MinerRay = 'MinerRay',
  FlakyUITests = 'Flaky UI Tests',
  CompilerBugs = "WebAssembly Compiler Bugs",
  Wobfuscator = "Wobfuscator",
  WASPur = 'WASPur',
  FunctionInlining = 'WebAssembly Counterintuitive Function Inlining'
}

export declare interface ProjectDetails {
  ShortName: string;
  FullTitle: string;
  PaperLink: string;
  SitePath: string;
  Description: string;
  PreviewImageSrc?: string;
  PreviewImageAltText?: string;
  DOI?: string;
  YoutubeVideoID?: string;
  GitHubLink?: string;
}

export declare interface ProjectDetailsWithVideo extends ProjectDetails {
  YoutubeVideoID: string;
}

export const WAsmViewLink = `${import.meta.env.BASE_URL}/WasmView_Visual_Testing_for_WebAssembly_Applications.pdf`;
export const WASimLink = `${import.meta.env.BASE_URL}/WASim_Understanding_WebAssembly_Applications_through_Classification.pdf`;
export const MinerRayLink = `${import.meta.env.BASE_URL}/MinerRay_Semantics_Aware_Analysis_for_Ever_Evolving_Cryptojacking_Detection.pdf`;
export const WebAssemblyCompilerBugLink = `${import.meta.env.BASE_URL}/An_Empirical_Study_of_Bugs_in_WebAssembly_Compilers.pdf`;
export const WobfuscatorLink = `${import.meta.env.BASE_URL}/Wobfuscator_Obfuscating_JavaScript_Malware_via_Opportunistic_Translation_to_WebAssembly.pdf`;
export const WASPurLink = `${import.meta.env.BASE_URL}/Automated_WebAssembly_Function_Purpose_Identification_With_Semantics-Aware_Analysis.pdf`;
export const FunctionInliningStudyLink = `${import.meta.env.BASE_URL}/When_Function_Inlining_Meets_WebAssembly__Counterintuitive_Impacts_on_Runtime_Performance.pdf`;
export const FlakyUITestLink = `https://arxiv.org/abs/2103.02669`;



export const WasmViewProjectDetails: ProjectDetailsWithVideo = {
  ShortName: "WasmView",
  FullTitle: "WasmView: Visual Testing for WebAssembly Applications",
  PaperLink: WAsmViewLink,
  SitePath: '/wasmview.html',
  Description: "This tool allows WebAssembly developers to visualize the interaction between WebAssembly and JavaScript within a given web app.",
  PreviewImageAltText: "WasmView Preview",
  PreviewImageSrc: wasmViewPreview,
  DOI: "10.1145/3377812.3382155",
  YoutubeVideoID: "kjKxL7L7zxI",
  GitHubLink: "https://github.com/wasmview/wasmview.github.io",
};

export const WASimProjectDetails: ProjectDetailsWithVideo = {
  ShortName: "WASim",
  FullTitle:
    "WASim: Understanding WebAssembly Applications through Classification",
  PaperLink: WASimLink,
  SitePath: '/wasim.html',
  Description: "This is a classifier that can predict the purpose of a given WebAssembly module from a set of 11 purpose labels.",
  PreviewImageSrc: wasimPreview,
  PreviewImageAltText: "WASim Preview",
  DOI: "10.1145/3324884.3415293",
  YoutubeVideoID: "usfYFIeTy0U",
  GitHubLink: "https://github.com/WASimilarity/WASim",
};

export const MinerRayProjectDetails: ProjectDetailsWithVideo = {
  ShortName: "MinerRay",
  FullTitle:
    "MinerRay: Semantics-Aware Analysis for Ever-EvolvingCryptojacking Detection",
  PaperLink: MinerRayLink,
  SitePath: "/minerray.html",
  DOI: "10.1145/3324884.3416580",
  Description: "This tool can detect malicious WebAssembly- and JavaScript-based cryptominers hidden in webpages.",
  YoutubeVideoID: "iZzxrVglik0",
  GitHubLink: "https://github.com/miner-ray/miner-ray.github.io",
};

export const FlakyUITestsProjectDetails: ProjectDetailsWithVideo = {
  ShortName: "Flaky UI Tests",
  FullTitle: "An Empirical Analysis of UI-based Flaky Tests",
  PaperLink: FlakyUITestLink,
  SitePath: "/flakyui.html",
  DOI: "10.1109/ICSE43902.2021.00141",
  Description: "We perform an empirical study on flakiness arising in UI tests. We focus on the root cause of the flakiness, the manifestation strategy to reporduce the flakiness, and the fixing strategy.",
  YoutubeVideoID: "3N49nCGo5u0",
  GitHubLink: "https://ui-flaky-test.github.io",
};

export const WebAssemblyCompilerBugsProjectDetails: ProjectDetails = {
  ShortName: "WebAssembly Compiler Bug Study",
  FullTitle: "An Empirical Study of Bugs in WebAssembly Compilers",
  Description: "We perform an empirical study on the bugs arising in WebAssembly compilers.",
  PaperLink: WebAssemblyCompilerBugLink,
  SitePath: "/compiler-bugs.html",
  GitHubLink: "https://wasm-compiler-bugs.github.io",
};

export const WobfuscatorProjectDetails: ProjectDetailsWithVideo = {
  ShortName: "Wobfuscator",
  FullTitle:
    "Wobfuscator: Obfuscating JavaScript Malware via Opportunistic Translation to WebAssembly",
  PaperLink: WobfuscatorLink,
  SitePath: "/wobfuscator.html",
  Description: "We develop an obfsucation tool, Wobfuscator, that partially translates JavaScript malware to WebAssembly.",
  DOI: "10.1109/SP46214.2022.9833626",
  YoutubeVideoID: 'Y5WfulCMRoo',
  GitHubLink: "https://github.com/js2wasm-obfuscator/translator",
};

export const WaspurProjectDetails: ProjectDetails = {
  ShortName: "WASPur",
  FullTitle:
    "Automated WebAssembly Function Purpose Identification With Semantics-Aware Analysis",
  PaperLink: WASPurLink,
  SitePath: '/waspur.html',
  DOI: '10.1145/3543507.3583235',
  Description: "We collect WebAssembly modules from four real-world sources: Websites, Firefox Add-ons, Chrome Extensions, and GitHub repos. We use these modules to construct a classifier that labels the likely purpose of a WebAssembly function.",
};

export const FunctionInliningProjectDetails: ProjectDetails = {
  ShortName: "WebAssembly Function Inlining",
  FullTitle:
    "When Function Inlining Meets WebAssembly: Counterintuitive Impacts on Runtime Performance",
  PaperLink: FunctionInliningStudyLink,
  SitePath: '/function-inlining.html',
  DOI: '10.1145/3611643.3616311',
  Description: "We investigate the counterinutuitive runtime effects of function inlining optimizations when applied on WebAssembly modules. This optimization can interfere with the browser tiering-up process used in the Chromium and Firefox browsers.",
  GitHubLink: "https://zenodo.org/records/8327204",
};

export const ResearchProjectDetails = {
  [ResearchProjects.WasmView]: WasmViewProjectDetails,
  [ResearchProjects.WASim]:WASimProjectDetails,
  [ResearchProjects.MinerRay]: MinerRayProjectDetails,
  [ResearchProjects.FlakyUITests]: FlakyUITestsProjectDetails,
  [ResearchProjects.CompilerBugs]: WebAssemblyCompilerBugsProjectDetails,
  [ResearchProjects.Wobfuscator]: WobfuscatorProjectDetails,
  [ResearchProjects.WASPur]: WaspurProjectDetails,
  [ResearchProjects.FunctionInlining]: FunctionInliningProjectDetails
}

export const ResearchProjectsOrder = [
  ResearchProjects.WasmView,
  ResearchProjects.WASim,
  ResearchProjects.MinerRay,
  ResearchProjects.FlakyUITests,
  ResearchProjects.CompilerBugs,
  ResearchProjects.Wobfuscator,
  ResearchProjects.WASPur,
  ResearchProjects.FunctionInlining
]