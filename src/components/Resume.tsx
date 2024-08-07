import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogleScholar, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import "../styles/resume.scss";
import {
  FunctionInliningStudyLink,
  MinerRayLink,
  WASimLink,
  WAsmViewLink,
  WASPurLink,
  WebAssemblyCompilerBugLink,
  WobfuscatorLink,
} from "./Projects/researchProjectDetails";
import selfie from "../me.png";

const ResumeComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Alan Romano | Resume</title>
        <meta
          name="Description"
          content="Resume of Alan Romano showcasing professional and academic accomplishments."
        />
      </Helmet>
      <div className="columns">
        <div className="column is-narrow">
          <div className="card">
            <div className="card-image">
              <figure className="image is-rounded">
                <img src={selfie} alt="Picture of Alan Romano" />
              </figure>
            </div>
            <div className="card-content">
              <div className="card-text">
                <p>
                  <a
                    href="https://www.visitbuffaloniagara.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buffalo, NY
                  </a>
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  &nbsp;
                  <span>a</span>
                  <span>j</span>
                  <span>r</span>
                  <span>o</span>
                  <span>m</span>
                  <span>a</span>
                  <span>n</span>
                  <span>o</span>
                  <span>@</span>
                  <span>u</span>
                  <span>s</span>
                  <span>c</span>
                  <span>.</span>
                  <span>e</span>
                  <span>d</span>
                  <span>u</span>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/alan-romano-12395a139/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                  </a>
                  <p>
                    <a
                      href="https://scholar.google.com/citations?user=vQfvfQcAAAAJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGoogleScholar} /> Google Scholar
                    </a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column resume">
          <br />
          <section>
            <h2 className="subtitle">Education</h2>
            <div className="columns is-mobile">
              <div className="column">
                <div>
                  <b>University of Southern California</b>, Los Angeles, CA
                  <ul>
                    <li>PhD, Computer Science</li>
                    <li>Advised by Dr. Weihang Wang</li>
                    <li>Viterbi School of Engineering</li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <b>August 2022 - August 2024</b>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <div>
                  <b>University at Buffalo, SUNY</b>, Buffalo, NY
                  <ul>
                    <li>PhD, Computer Science and Engineering</li>
                    <li>Advised by Dr. Weihang Wang</li>
                    <li>School of Engineering &amp; Applied Sciences</li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <b>August 2018 - August 2022</b>
              </div>
            </div>
            <div className="columns is-mobile">
              <div className="column">
                <div>
                  <b>New Jersey Institute of Technology</b>, Newark, NJ
                  <ul>
                    <li>BS, Computer Science</li>
                    <li>Minor in Applied Mathematics</li>
                    <li>Summa Cum Laude (Cumulative GPA: 3.96)</li>
                    <li>
                      College of Computing Sciences, Albert Dorman Honors
                      College
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <b>September 2014 - May 2018</b>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Honors and Awards</h2>
            <div className="columns is-mobile">
              <div className="column">
                <ul>
                  <li>
                    <span className="text-left">
                      Arthur A. Schomburg Fellowship
                    </span>
                  </li>
                  <li>
                    <span className="text-left">
                      2022 IEEE S&P Travel Grant Award
                    </span>
                  </li>
                  <li>
                    <span className="text-left">
                      UB CSE PhD Best Research Award
                    </span>
                  </li>
                  <li>
                    <span className="text-left">
                      2021 ACM CCS Travel Grant Award
                    </span>
                  </li>
                  <li>NJIT Dean&apos;s List</li>
                  <li>
                    <span>
                      2<sup>nd</sup> Place Presentation in Computing –
                      Philadelphia AMP
                    </span>
                  </li>
                  <li>
                    <span>NJIT Provost Summer Research Fellowship</span>
                  </li>
                  <li>
                    <span>
                      Ronald E. McNair Post-Baccalaureate Achievement Program
                    </span>
                  </li>
                </ul>
              </div>
              <div className="column is-4">
                <b>2018 - 2022</b>
                <br />
                <b>2022</b>
                <br />
                <b>2021</b>
                <br />
                <b>2021</b>
                <br />
                <b>2014 - 2018</b>
                <br />
                <b>2016</b>
                <br />
                <b>2016</b>
                <br />
                <b>2016</b>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Publications</h2>
            <div className="columns is-mobile">
              <div className="column">
                <span>
                  <b>
                    <i>Conference Papers</i>
                  </b>
                </span>
                <ul>
                  <li>
                    <b>A. Romano</b> and W. Wang, “When Function Inlining Meets
                    WebAssembly: Counterintuitive Impacts on Runtime Performance
                    ,” The 31st ACM Joint European Software Engineering
                    Conference and Symposium on the Foundations of Software
                    Engineering (ESEC/FSE), Association for Computing Machinery,
                    New York, NY, USA,
                    <a href="https://doi.org/10.1145/3611643.3616311">
                      doi: 10.1145/3611643.3616311
                    </a>
                    &nbsp;(acceptance: 30%, 142/473)&nbsp;
                    <a href={FunctionInliningStudyLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b> and W. Wang, “Automated WebAssembly
                    Function Purpose Identification With Semantics-Aware
                    Analysis,” The 32nd ACM Web Conference (TheWebConf), 2023,
                    Association for Computing Machinery, New York, NY, USA,
                    2885-2894. &nbsp;
                    <a href="https://doi.org/10.1145/3543507.3583235">
                      doi: 10.1145/3543507.3583235
                    </a>
                    &nbsp;(acceptance: 19.2%, 365/1900)&nbsp;
                    <a href={WASPurLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b>, D. Lehmann, M. Pradel, W. Wang,
                    “Wobfuscator: Obfuscating JavaScript Malware via
                    Opportunistic Translation to WebAssembly,” 43rd IEEE
                    Symposium on Security and Privacy (S&P), 2022, pp.
                    1574-1589.&nbsp;
                    <a href="https://doi.org/10.1109/SP46214.2022.9833626">
                      doi: 10.1109/SP46214.2022.9833626
                    </a>
                    &nbsp;(acceptance: 15.2%, 54/355)&nbsp;
                    <a href={WobfuscatorLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b>, X. Liu, Y. Kwon, W. Wang, “An Empirical
                    Study of Bugs in WebAssembly Compilers,” IEEE/ACM 36th
                    International Conference on Automated Software Engineering
                    (ASE), 2021, pp. 42-54.&nbsp;
                    <a href="https://doi.org/10.1109/ASE51524.2021.9678776">
                      doi: 10.1109/ASE51524.2021.9678776
                    </a>
                    &nbsp;(acceptance: 19.2%, 82/427)&nbsp;
                    <a href={WebAssemblyCompilerBugLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b>, Z. Song, S. Grandhi, W. Yang and W. Wang,
                    “An Empirical Analysis of UI-Based Flaky Tests,”IEEE/ACM
                    43rd International Conference on Software Engineering
                    (ICSE), 2021, pp. 1585-1597.{" "}
                    <a href="https://doi.org/10.1109/ICSE43902.2021.00141">
                      doi: 10.1109/ICSE43902.2021.00141
                    </a>
                    &nbsp; (acceptance: 23%, 138/602) &nbsp;
                    <a href="https://arxiv.org/abs/2103.02669">
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;Paper Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b>, Y. Zheng and W. Wang, “MinerRay:
                    Semantics-Aware Analysis for Ever-Evolving Cryptojacking
                    Detection,” 35th IEEE/ACM International Conference on
                    Automated Software Engineering (ASE), 2020, pp. 1129-1140.{" "}
                    <a href="https://doi.org/10.1145/3324884.3416580">
                      doi: 10.1145/3324884.3416580
                    </a>
                    &nbsp; (acceptance: 22.5%, 93/414)&nbsp;
                    <a href={MinerRayLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b> and W. Wang, “WASim: Understanding
                    WebAssembly Applications through Classification,” 35th
                    IEEE/ACM International Conference on Automated Software
                    Engineering (ASE), 2020, pp. 1321-1325.{" "}
                    <a href="https://doi.org/10.1145/3324884.3415293">
                      doi: 10.1145/3324884.3415293
                    </a>
                    &nbsp; (acceptance: 62.5%, 18/29)&nbsp;
                    <a href={WASimLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                  <li>
                    <b>A. Romano</b> and W. Wang, “WasmView: Visual Testing for
                    WebAssembly Applications,” IEEE/ACM 42nd International
                    Conference on Software Engineering: Companion Proceedings
                    (ICSE-Companion), 2020, pp. 13-16.{" "}
                    <a href="https://doi.org/10.1145/3377812.3382155">
                      doi: 10.1145/3377812.3382155
                    </a>
                    &nbsp; (acceptance: 33%, 25/75)&nbsp;
                    <a href={WAsmViewLink}>
                      <FontAwesomeIcon icon={faFilePdf} />
                      &nbsp;PDF Link
                    </a>
                    <br />
                    <br />
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Research Experience</h2>
            <div className="columns is-mobile">
              <div className="column">
                <div>
                  <b>University at Buffalo, SUNY</b>, Buffalo, NY <br />
                  <b>Research Assistant</b>, Dr. Weihang Wang
                  <ul>
                    <li>
                      Investigated WebAssembly development and debugging methods
                    </li>
                    <li>
                      Designed and implemented WebAssembly development tools
                    </li>
                    <li>
                      Set up and led experiments related to WebAssembly data
                      collection
                    </li>
                  </ul>
                </div>
                <br />
                <div>
                  <b>New Jersey Institute of Technology</b>
                  , Newark, NJ <br />
                  <b>Undergraduate Researcher</b>, Dr. Michael Bieber
                  <ul>
                    <li>
                      Led a team of four programmers to develop Participatory
                      Learning experimental education platform
                    </li>
                    <li>
                      Created necessary webpages using React and Node.js to
                      increase flexibility of possible assignment structure in
                      the system
                    </li>
                    <li>
                      Managed all frontend aspects of system design and
                      implementation
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <b>August 2019 - August 2022</b>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <b>May 2016 - August 2018</b>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Teaching Experience</h2>
            <div className="columns is-mobile">
              <div className="column">
                <div>
                  <b>University at Buffalo, SUNY</b>, Buffalo, NY <br />
                  <b>Teaching Assistant</b>, Dr. Matthew Hertz
                  <ul>
                    <li>
                      Assisted in managing CSE 116 entry-level and CSE 542
                      master’s-level courses
                    </li>
                    <li>
                      Clarified any questions that students would have in-class
                    </li>
                    <li>Led in-person classes during professor absence</li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <b>August 2018 - August 2019</b>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Professional Experience</h2>
            <div className="columns is-mobile">
              <div className="column">
                <div>
                  <b>United Parcel Service</b>, Mahwah, NJ
                  <br />
                  <b>Enterprise Business Intelligence Intern</b>, Meryl
                  Aronowitz
                  <ul>
                    <li>
                      Extended functionality of existing online management
                      system used to maintain the allowed standards for all
                      corporate IT software and hardware procurement and usage
                    </li>
                    <li>
                      Collaborated with team to convert legacy website from
                      ColdFusion to .NET
                    </li>
                    <li>
                      Implemented secure file upload functionality into website
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column is-4">
                <b>June 2017 - August 2018</b>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Presentations</h2>
            <div className="columns is-mobile">
              <div className="column">
                <ul>
                  <li>
                    “Automated WebAssembly Function Purpose Identification With
                    Semantics-Aware Analysis,” The ACM Web Conference
                    (TheWebConf), May 2023.
                  </li>
                  <li>
                    “Wobfuscator: Obfuscating JavaScript Malware via
                    Opportunistic Translation to WebAssembly,” 43rd IEEE
                    Symposium on Security and Privacy (S&P), May 2022.
                  </li>
                  <li>
                    “An Empirical Study of Bugs in WebAssembly Compilers,” 36th
                    IEEE/ACM International Conference on Automated Software
                    Engineering (ASE), November 2021.
                  </li>
                  <li>
                    “An Empirical Analysis of UI-Based Flaky Tests,” 43rd
                    International Conference on Software Engineering (ICSE), May
                    2021.
                  </li>
                  <li>
                    “MinerRay: Semantics-Aware Analysis for Ever-Evolving
                    Cryptojacking Detection,” 35th IEEE/ACM International
                    Conference on Automated Software Engineering (ASE),
                    September 2020.
                  </li>
                  <li>
                    “WASim: Understanding WebAssembly Applications through
                    Classification,” 35th IEEE/ACM International Conference on
                    Automated Software Engineering (ASE), September 2020.
                  </li>
                  <li>
                    “WasmView: Visual Testing for WebAssembly Applications,”
                    42nd Annual International Conference on Software Engineering
                    (ICSE), July 2020.
                  </li>
                  <li>
                    “Probabilistic Testing in the Presence of Flaky Tests,” 3rd
                    annual Facebook Testing and Verification Symposium, November
                    2019.
                  </li>
                  <li>
                    “Building a Flexible and Collaborative Online Learning
                    System,” 5th Annual NJIT Innovation Day, April 2017.
                  </li>
                  <li>
                    “Building a Flexible and Collaborative Online Learning
                    System,” Philadelphia AMP 18th Annual Research Symposium,
                    October 2016.
                  </li>
                  <li>
                    “Building a Flexible and Collaborative Online Learning
                    System,” NJIT Ninth International Summer Research Symposium,
                    July 2016.
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <br />
          <section>
            <h2 className="subtitle">Volunteer Activities</h2>
            <div className="columns is-mobile">
              <div className="column">
                <ul>
                  <li>
                    <span className="text-left">Dinner with an Engineer</span>
                  </li>
                  <li>
                    <span>Coding Camp for Young Women</span>
                  </li>
                  <li>
                    <span>NJIT Against Hunger</span>
                  </li>
                  <li>
                    <span>Habit for Humanity</span>
                  </li>
                </ul>
              </div>
              <div className="column is-4">
                <b>2016</b>
                <br />
                <b>2016</b>
                <br />
                <b>2015</b>
                <br />
                <b>2014</b>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeComponent;
