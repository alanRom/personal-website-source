import { Component } from "react";
import { Helmet } from "react-helmet";
import NewsComponent from "./Home/NewsComponent";
import Link from "./Utils/LinkPreview";
import selfie from "../me.webp";
import "../styles/Home.scss";

const HomeComponent = () => {
  return (
    <div className="home">
      <Helmet>
        <title>Alan Romano&apos;s Personal Website</title>
        <meta
          name="Description"
          content="Homepage of Alan Romano's personal website."
        />
      </Helmet>
      <br />
      <figure className="image is-rounded">
        <img width="512px" height="512px" src={selfie} alt="Alan Romano" />
      </figure>
      <br />
      <div className="readable-content">
        <p>
          Hi! My name is Alan Romano. I&apos;m a doctoral graduate at the
          University of Southern California under the advisement of&nbsp;
          <Link href="https://weihang-wang.github.io/">
            <span>Dr. Weihang Wang</span>
          </Link>
          . My research interests include&nbsp;
          <Link href="https://webassembly.org/">WebAssembly</Link>
          &nbsp;development and debugging as well as flaky test detection.
        </p>
      </div>
      <NewsComponent />
    </div>
  );
};

export default HomeComponent;
