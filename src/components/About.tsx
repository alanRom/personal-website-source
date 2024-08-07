import { Component } from "react";
import { Helmet } from "react-helmet";

class AboutComponent extends Component {
  state = {};

  render() {
    return (
      <div>
        <Helmet>
          <title>Alan Romano | About</title>
        </Helmet>
        <h1 className="title">About this website</h1>
        <br />
        <div className="readable-content">
          <p>
            This website is my personal website. It&apos;s designed to give some
            relevant information about me.
          </p>
          <p>
            This website is built using React for all the pages and Bulma as the
            design framework. The enitre website is a client-side application,
            so no server communication is required! This makes navigation
            between pages incredibly fast.
          </p>
        </div>
      </div>
    );
  }
}

export default AboutComponent;
