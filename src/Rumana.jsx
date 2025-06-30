import { useState } from "react";
import { Carousel } from "component-library-react";

import "./Rumana.css";
import "./cover.css";
import "./bio.css";
import "./portfolio.css";

import Address from "./assets/Address.svg?react";
import Email from "./assets/Email.svg?react";
import Phone from "./assets/Phone.svg?react";
import Back from "./assets/Back.svg?react";

const portfolioData = {
  brand: {
    text: "I craft brand identities that tell stories beyond a logo. From typography and icons to color psychology and tone of voice, every element is intentional. I focus on consistency and emotion, ensuring the brand feels cohesive and recognizable across platforms. My color palettes are chosen not just for beauty but for what they communicate – trust, energy, calm, or innovation. Design theory and user perception guide every decision I make.",
    imgset: [
      { src: "./Rumana/brand1.jpg", alt: "" },
      { src: "./Rumana/brand2.jpg", alt: "" },
      { src: "./Rumana/brand3.jpg", alt: "" },
      { src: "./Rumana/brand4.jpg", alt: "" },
      { src: "./Rumana/brand5.jpg", alt: "" },
    ],
  },
  poster: {
    text: "My poster designs are a blend of visual storytelling and intentional typography. I create each piece with a clear message, using contrast, hierarchy, and rhythm to guide the viewer’s eye. Whether minimalist or bold, my goal is to evoke emotion and leave a lasting impact. I often draw from Bauhaus and Swiss design principles, ensuring balance and clarity while experimenting with texture and color. These posters are not just visuals – they are experiences.",
    imgset: [
      { src: "./Rumana/poster1.jpg", alt: "" },
      { src: "./Rumana/poster2.jpg", alt: "" },
      { src: "./Rumana/poster3.jpg", alt: "" },
    ],
  },
  logo: {
    text: "Each logo is built on the core values of the brand it represents. My process begins with deep research and conceptual sketching, followed by digital refinement. I aim for simplicity, memorability, and versatility. Influenced by geometric precision and modern aesthetics, I often use grids and golden ratios to build harmony. A logo should speak without words and my goal is to give brands a timeless visual identity.",
    imgset: [
      { src: "./Rumana/logo1.jpg", alt: "" },
      { src: "./Rumana/logo2.jpg", alt: "" },
    ],
  },
  ebook: {
    text: "My eBook designs aim to enhance readability while maintaining visual elegance. I use a mix of editorial layouts, accessible fonts, and strategic white space to create a seamless flow. Whether fiction or informational, each project is guided by the principle that good design should never distract, only elevate. I balance aesthetics with function, ensuring mobile responsiveness and screen readability. The result is a digital reading experience that's both beautiful and user-friendly.",
    imgset: [
      { src: "./Rumana/ebook1.jpg", alt: "" },
      { src: "./Rumana/ebook2.jpg", alt: "" },
      { src: "./Rumana/ebook3.jpg", alt: "" },
      { src: "./Rumana/ebook4.jpg", alt: "" },
      { src: "./Rumana/ebook5.jpg", alt: "" },
      { src: "./Rumana/ebook6.jpg", alt: "" },
      { src: "./Rumana/ebook7.jpg", alt: "" },
    ],
  },
};

const label = {
  brand: "Brand Identity & Color Palette",
  poster: "Poster",
  logo: "Logo",
  ebook: "Ebook",
};

const portfolioCategories = ["brand", "poster", "logo", "ebook"];

let wheelEventEndTimeout = null;

function handleWheel(func, target) {
  clearTimeout(wheelEventEndTimeout);
  wheelEventEndTimeout = setTimeout(() => {
    func({ section: target, portfolio: "brand" });
  }, 100);
}

const Rumana = function () {
  const home = { section: "cover", portfolio: "brand" };
  const [page, setPage] = useState(home);

  switch (page.section) {
    case "cover": {
      return (
        <div
          id="cover"
          onWheel={() => {
            handleWheel(setPage, "bio");
          }}
        >
          <span id="year">2025</span>
          <div id="intro">
            <div className="translucent">GRAPHIC</div>
            <div id="portfolio">PORTFOLIO</div>
            <div>
              <span className="translucent">DESIGNER</span>
              <span id="name">RUMANA ISMAT FAZIR</span>
            </div>
          </div>
        </div>
      );
    }
    case "bio": {
      function ButtonContent() {
        return <span>Available for work</span>;
      }

      function Thumbnail({ category }) {
        return (
          <div className="thumbnail" id={"thumbnail".concat(category)}>
            <img
              id={"thumbnailImage".concat(category)}
              className="thumbnailImage"
              src={"/Rumana/".concat(category).concat(".jpg")}
              alt={label[category]}
            />
            <p className="label">{label[category]}</p>
          </div>
        );
      }

      return (
        <div
          id="bio"
          onWheel={() => {
            handleWheel(setPage, "cover");
          }}
        >
          <div id="hello">HELLO</div>
          <div id="profileSection">
            <img
              id="profile"
              src="/Rumana/profile.jpg"
              alt="Picture of Rumana Ismat Fazir"
            />
            <div id="profileInfo">
              <div id="iAmRumana">I am Rumana</div>
              <p id="about">
                Skilled in research, communication, visual storytelling and the
                art of blending critical insight with creative expression, I
                thrive at the intersection of creativity and critical discourse,
                shaping narratives that inform, inspire, and challenge.
              </p>
              <a href="mailto:rumana.i.fazir@gmail.com">
                <button
                  id="workButton"
                  onClick={() => {
                    return false;
                  }}
                >
                  <ButtonContent />
                </button>
              </a>
              <div>
                <div>
                  <Address className="icons" />
                  <span>Kolkata, India</span>
                </div>
                <div>
                  <Email className="icons" />
                  <span>rumana.i.fazir@gmail.com</span>
                </div>
                <div>
                  <Phone className="icons" />
                  <span>6289036559</span>
                </div>
              </div>
            </div>
          </div>
          <div id="myWorks">MY WORKS</div>
          <div id="portfolioSet">
            {portfolioCategories.map((category) => {
              const ThumbnailCategory = function () {
                return <Thumbnail category={category} />;
              };
              return (
                <button
                  className="thumbnailButton"
                  id={"thumbnailButton".concat(category)}
                  key={category}
                  onClick={() => {
                    setPage({ section: "portfolio", portfolio: category });
                  }}
                >
                  <ThumbnailCategory />
                </button>
              );
            })}
          </div>
        </div>
      );
    }
    case "portfolio": {
      const data = portfolioData[page.portfolio];

      return (
        <div id="portfolioPage">
          <Carousel imgset={data.imgset} name="portfolioCarousel" />
          <p>{data.text}</p>
          <button
            className="back button"
            id="backButton"
            onClick={() => {
              setPage({ section: "bio", portfolio: "brand" });
            }}
          >
            <Back />
          </button>
        </div>
      );
    }
  }
};

export default Rumana;
