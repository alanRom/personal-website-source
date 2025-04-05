import { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import LinkPreviewComponent from "../Utils/LinkPreview";

declare interface NewsItem {
  date: string;
  message: any;
}

const NewsItemComponent = ({ date, message }: NewsItem) => {
  return (
    <p key={date}>
      <b>{date}:</b>&nbsp;{message}
    </p>
  );
};

NewsItemComponent.propTypes = {
  date: PropTypes.string.isRequired,
  message: PropTypes.element.isRequired,
};

class NewsComponent extends Component {
  state = {};

  render() {
    const newsItems: NewsItem[] = [
      {
        date: "March 31, 2025",
        message: (
          <span>
            I am excited to be joining the AI Platform team at&nbsp;<a href="https://www.accrete.ai/" target="_blank"
      rel="noopener noreferrer dns-prefetch prefetch">Accrete</a>!
          </span>
        ),
      },
      {
        date: "May 28, 2024",
        message: (
          <span>
            I successfully defended my dissertation, &quot;Static Program
            Analyses for WebAssembly&quot;!
          </span>
        ),
      },

      {
        date: "May 4, 2023",
        message: (
          <span>
            <NavLink to="/function-inlining.html">
              &quot;When Function Inlining Meets WebAssembly: Counterintuitive
              Impacts on Runtime Performance
            </NavLink>
            &quot; accepted to&nbsp;
            <a href="https://2023.esec-fse.org/track/fse-2023-research-papers">
              ESEC/FSE 2023
            </a>
            !
          </span>
        ),
      },
      {
        date: "January 25, 2023",
        message: (
          <span>
            <NavLink to="/waspur.html">
              {" "}
              &quot;Automated WebAssembly Function Purpose Identification With
              Semantics-Aware Analysis&quot;
            </NavLink>
            &nbsp;accepted to&nbsp;
            <a href="https://www2023.thewebconf.org/">TheWebConf 2023</a>!
          </span>
        ),
      },
      {
        date: "August 22, 2022",
        message: (
          <span>
            I&apos;m excited to transfer with my advisor to the University of
            Southern California to continue my PhD studies!
          </span>
        ),
      },
      {
        date: "December 10, 2021",
        message: (
          <span>
            I&apos;m honored to receive the{" "}
            <b>UB CSE Best Graduate Research Award</b>!
          </span>
        ),
      },
      {
        date: "December 6, 2021",
        message: (
          <span>
           <NavLink to="/wobfuscator.html">
              &quot;Wobfuscator: Obfuscating JavaScript Malware via
              Opportunistic Translation to WebAssembly&quot;
            </NavLink>
            &nbsp;accepted to&nbsp;
            <a href="https://www.ieee-security.org/TC/SP2022/program-papers.html">
              S&P 2022
            </a>
            !
          </span>
        ),
      },
      {
        date: "July 7, 2021",
        message: (
          <span>
            <NavLink to="/compiler-bugs.html">
              &quot;An Empirical Study of Bugs in WebAssembly Compilers&quot;
            </NavLink>
            &nbsp;accepted to&nbsp;
            <a href="https://conf.researchr.org/track/ase-2021/ase-2021-papers">
              ASE 2021
            </a>
            !
          </span>
        ),
      },
      {
        date: "December 15, 2020",
        message: (
          <span>
            <NavLink to="/flakyui.html">
              &quot;An Empirical Analysis of UI-based Flaky Tests&quot;
            </NavLink>
            &nbsp;accepted to&nbsp;
            <a href="https://conf.researchr.org/track/icse-2021/icse-2021-papers">
              ICSE 2021
            </a>
            !
          </span>
        ),
      },
      {
        date: "July 30, 2020",
        message: (
          <span>
            <NavLink to="/minerray.html">MinerRay</NavLink> paper accepted
            to&nbsp;
            <a href="https://conf.researchr.org/track/ase-2020/ase-2020-papers">
              ASE 2020
            </a>
            !
          </span>
        ),
      },
      {
        date: "July 3, 2020",
        message: (
          <span>
            <NavLink to="/wasim.html">WASim</NavLink>
            &nbsp;paper accepted to&nbsp;
            <a href="https://conf.researchr.org/track/ase-2020/ase-2020-tool-demonstrations">
              ASE Demo 2020
            </a>
            !
          </span>
        ),
      },
      {
        date: "February 20, 2020",
        message: (
          <span>
            <NavLink to="/wasmview.html">WasmView</NavLink> paper accepted
            to&nbsp;
            <a href="https://conf.researchr.org/track/icse-2020/Demonstrations">
              ICSE Demo 2020
            </a>
            !
          </span>
        ),
      },
      // { date: , message: },
    ];

    return (
      <div>
        <br />
        <h3 className="title">News & Updates</h3>
        <div className="readable-content">
          {newsItems.map(NewsItemComponent)}
        </div>
      </div>
    );
  }
}

export default NewsComponent;
