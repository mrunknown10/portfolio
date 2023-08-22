import React from "react";
import pm from "../../assets/meet.png";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "./index.scss";

const Footer = ({ theme }) => {
  return (
    <footer
      className="p-3 footer"
      style={{
        backgroundColor: theme === "dark" ? "#1a202c" : "white",
        color: theme === "dark" ? "white" : "#1a202c",
      }}
    >
      <section>
        <p>Made with 🧡 and React</p>
        <p>© {new Date().getFullYear()} Patel Meet</p>
      </section>

      <div>
        <img src={pm} alt="Meet" />
        <h3>Meet Patel</h3>
        <p>Every think can be hack nothing is impossible and never give up
        </p>
      </div>

      <aside>
        <hp>Social Media</hp>
        <article>
          <a href="https://www.instagram.com/patel_meet.0123/" target={"blank"}>
            <AiFillInstagram size={25} color="#E4405F" />
          </a>
          <a href="https://www.linkedin.com/in/patel-meet-00bb22236" target={"blank"}>
            <AiFillLinkedin size={25} color="#0A66C2" />
          </a>
          <a href="https://github.com/mrunknown10" target={"blank"}>
            <AiFillGithub
              size={25}
              color={theme === "dark" ? "white" : "black"}
            />
          </a>
        </article>
      </aside>
    </footer>
  );
};

export default Footer;
