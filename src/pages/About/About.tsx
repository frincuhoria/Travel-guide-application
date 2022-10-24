import "./About.css";
import mockValues from "../../MOCK_VALUES.json";
import { Button } from "react-bootstrap";

const scrollRight = () => {};
const scrollLeft = () => {};

export const About = () => {
  return (
    <>
      <div className="container-about">
        <p style={{ fontSize: "65px" }}>About us</p>
        <div style={{ fontSize: "20px", fontWeight: "400" }}>
          You Can Do It When You Travel It.
        </div>
      </div>
      <div className="container-text-about">
        <p className="text-about">
          We believe that travel is for everyone. It helps us learn about
          ourselves and the world around us.
        </p>
        <p className="text-about">
          Our goal is to help more people from more backgrounds experience the
          joy of exploration. Because we believe this builds a kinder, more
          inclusive, more open-minded world.
        </p>
        <p className="text-about">
          Like you, travel is in our DNA. At Travel, we believe travel opens the
          door to the greatest, most unforgettable experiences life can offer.
          And we have learned that the best travel is about putting yourself out
          there, about leaving behind the everyday, about immersing yourself,
          rather than just seeing the sights.
        </p>
        <p className="text-about">
          As travelers, you're on a journey, and at Travel, we're on one, too.
          Over the last two years, travel has transformed. We're thinking deeply
          not just about how we travel but why we travel and how to best serve
          travelers on their journey – and we approach our 50th year with a
          passion and commitment to helping others do it, too.
        </p>
      </div>
      <div className="about-values">
        <div className="about-values-heading">
          <h2 className="about-values-title">At Travel, our core values guide our evolution:</h2>
        </div>
        <div className="about-values-cards">
          {mockValues.map((value) => (
            <article className="about-values-cards-article">
              <div key={value.key} className="about-values-card">
                <div>{`${value.text}`}</div>
              </div>
            </article>
          ))}
        </div>
        <div className="about-values-buttons">
          <Button id="about-values-btn" onClick={scrollLeft}>
            <i className="fa-solid fa-angle-left"></i>
          </Button>
          <Button id="about-values-btn" onClick={scrollRight}>
            <i className="fa-solid fa-angle-right"></i>
          </Button>
        </div>
      </div>
    </>
  );
};
