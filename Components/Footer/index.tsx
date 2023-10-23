import React from "react";
import { useRouter } from "next/router";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { FiArrowUpRight } from "react-icons/fi";
import { BsBehance } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

import CustomLink from "../customLink";

function Footer() {
  const router = useRouter();

  return (
    <footer>
      <section>
        <label>NEURO</label>
        <div className="contact-footer-info">
          <span>Rosario, Argentina</span>
          <span>neurostudiomkt@gmail.com</span>
        </div>
      </section>

      <a
        href="https://www.behance.net/neurostudio"
        target={"_blank"}
        className="ancor-work"
        rel="noreferrer"
      >
        <div className="items">
          Behance
          <div>
            //
            <FiArrowUpRight />
          </div>
        </div>
      </a>

      <CustomLink href="/our-services">
        <div className="items">
          Our Services
          <div>
            //
            <FiArrowUpRight />
          </div>
        </div>
      </CustomLink>

      <CustomLink href="/about-us">
        <div className="items">
          About Us
          <div>
            //
            <FiArrowUpRight />
          </div>
        </div>
      </CustomLink>

      <CustomLink href="/contact-us">
        <div className="items">
          Contact Us
          <div>
            //
            <FiArrowUpRight />
          </div>
        </div>
      </CustomLink>

      <ul id="socialMediaBox">
        <IconContext.Provider value={{ size: ".6em" }}>
          <li>
            <a
              href="https://www.instagram.com/studio.neuro"
              target="_blank"
              rel="noreferrer"
            >
              <SiInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/neuro-studio/"
              target={"_blank"}
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.behance.net/neurostudio"
              target={"_blank"}
              rel="noreferrer"
            >
              <BsBehance />
            </a>
          </li>
        </IconContext.Provider>
      </ul>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Ubuntu+Mono&display=swap");
        footer {
          width: 100vw;
          background-color: ${router.pathname === "/our-services"
            ? "#070707"
            : ""};
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          font-family: "Helvetica", sans-serif;
          font-size: 42px;
          padding: 60px 120px;
          z-index: 1500;
          position: relative;
        }
        section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.5em;
          z-index: 1500;
        }
        section label {
          font-weight: bold;
          font-family: "Monument" !important;
        }
        .contact-footer-info {
          display: flex;
          flex-direction: column;
          align-items: start;
          justify-content: end;
          font-size: 20px;
        }
        .ancor-work {
          width: 100%;
        }
        .items {
          height: 100%;
          width: 100%;
          padding: 0.5em 0.5em;
          background-image: linear-gradient(white, white);
          background-size: 0 100%;
          cursor: pointer;
          z-index: 1500;
          border-bottom: 1px solid grey;
          margin: 10px 0px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: ${router?.asPath};
        }
        .items:hover {
          background-image: linear-gradient(white, white);
          background-size: 100% 100%;
          background-repeat: no-repeat;
          color: black;
          transition: 1s;
        }
        .items div {
          display: flex;
          align-items: center;
          justify-content: center;
          color: grey !important;
        }
        #socialMediaBox {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: end;
          gap: 20px;
          z-index: 1500;
        }
        #socialMediaBox li {
          list-style: none;
        }
        #socialMediaBox a {
          cursor: pointer;
          color: grey;
          transition: color 0.5s;
        }
        #socialMediaBox a:hover {
          color: white;
        }
        @media screen and (max-width: 1100px) {
          footer {
            padding: 60px 70px;
          }
        }
        @media screen and (max-width: 850px) {
          section label {
            font-size: 36px;
          }
          .contact-footer-info {
            font-size: 16px;
          }
          .items {
            font-size: 30px;
          }
        }
        @media screen and (max-width: 730px) {
          footer {
            padding: 60px 40px;
          }
        }
        @media screen and (max-width: 540px) {
          footer {
            padding: 40px 15px;
          }
        }
        @media screen and (max-width: 600px) {
          section {
            display: none;
          }
          .items div {
            display: none;
          }
          ul {
            font-size: 30px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
