import styles from "./Home.module.css";
import CSSModules from "react-css-modules";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div styleName="home">
      <div styleName="home__container">
        <div styleName="home__text">
          <h1>Hello there!</h1>
          <p styleName="home__description">
            <h2>
              We are dedicated to helping you prepare delicious meals with ease and enjoyment. Our platform provides carefully curated recipes and expert cooking guidance, designed by home cooks for home cooks.
              </h2>
          </p>
        </div>
        <Link to="/recipes">
          <button styleName="home__button" className="btn btn-primary">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CSSModules(Home, styles, {
  allowMultiple: true,
  handleNotFoundStyleName: "log",
});
