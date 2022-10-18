import "./Footer.css";

export const Footer = () => {
  return (
    <div id="footer">
      <div id="container-footer">
        <div id="container-logo">
          <div>
            Travel
            <i className="fa-solid fa-plane" style={{ color: "#71C9CE" }}></i>
          </div>
          <div style={{ color: "#868e96", fontSize: "12px", marginTop: "2px" }}>
            You Can Do It When You Travel It
          </div>
        </div>
        <div id="container-list">
          <ul>
            <ol id="title-list">About</ol>
            <ol>Features</ol>
            <ol>Pricing</ol>
            <ol>Support</ol>
            <ol>Forums</ol>
          </ul>
        </div>
        <div id="container-list">
          <ul>
            <ol id="title-list">Contact Us</ol>
            <ol>Contact</ol>
            <ol>Support</ol>
            <ol>Destinations</ol>
            <ol>Sponsorships</ol>
          </ul>
        </div>
        <div id="container-list">
          <ul>
            <ol id="title-list">Social Media</ol>
            <ol>Instagram</ol>
            <ol>Facebook</ol>
            <ol>Youtube</ol>
            <ol>Twitter</ol>
          </ul>
        </div>
      </div>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <div id="line"></div>
      </div>
      <div id="container-footer-2">
        <div>
          <i className="fa-regular fa-copyright"></i> 2022 dev. All rights
          reserved
        </div>
        <div id="links-social-media">
          <i
            className="fa-brands fa-instagram"
            style={{ color: "black" }}
            onClick={() =>
              window.open("https://www.instagram.com/frincu.horia/", "_blank")
            }
          ></i>
          <i
            className="fa-brands fa-github"
            style={{ color: "black" }}
            onClick={() => window.open("https://github.com/frincuhoria", "_blank")}
          ></i>
          <i
            className="fa-brands fa-linkedin"
            style={{ color: "#0077B5" }}
            onClick={() => window.open("https://www.linkedin.com/in/horia-mihai-frincu-30a896201/", "_blank")}
          ></i>
        </div>
      </div>
    </div>
  );
};
