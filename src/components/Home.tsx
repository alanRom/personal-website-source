import { Helmet } from "react-helmet";
import NewsComponent from "./Home/NewsComponent";
import Link from "./Utils/LinkPreview";
//@ts-ignore
import me from "../me.webp";
import selfie_avif from "../headshot_edited_squared_small_99.avif";
import selfie_jpg from "../headshot_edited_squared_small.jpg";
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
      <picture className="image">
        <source srcSet={selfie_avif} type="image/avif" />
        <img width="1024px" height="1024px"  
            src={selfie_jpg} alt="Headshot of Alan Romano" />
      </picture>
      <br />
      <div className="readable-content">
        <p>
          Hi! My name is Alan Romano. I am a doctoral graduate at the
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
