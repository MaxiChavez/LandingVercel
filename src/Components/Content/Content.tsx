import Faq from "../Faq/Faq";
import { Footer } from "../Footer/Footer";
import QueOfrecemos from "../QueOfrecemos/QueOfrecemos";
import { QuienesSomos } from "../QuienesSomos/QuienesSomos";
import FourIcons from "../FourIcons/FourIcons";
import "./Content.css";
import { useEffect, useState, useCallback } from "react";

const Content = () => {
  const [isQueOfrecemosVisible, setIsQueOfrecemosVisible] = useState(false);
  const [isQuienesSomosVisible, setIsQuienesSomosVisible] = useState(false);
  const [isFaqVisible, setIsFaqVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [isFourIcons, setIsFourIcons] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    if (!isQueOfrecemosVisible) {
      const queOfrecemosElement = document.querySelector(
        ".que-ofrecemos"
      ) as HTMLElement | null;
      const queOfrecemosOffset = queOfrecemosElement?.offsetTop;
      if (queOfrecemosOffset !== undefined && queOfrecemosOffset !== null) {
        if (scrollTop > queOfrecemosOffset - windowHeight) {
          setIsQueOfrecemosVisible(true);
        }
      }
    }

    if (!isFourIcons) {
      const fourIconsElement = document.querySelector(
        ".four-icons"
      ) as HTMLElement | null;
      const fourIconsOffset = fourIconsElement?.offsetTop;
      if (fourIconsOffset !== undefined && fourIconsOffset !== null) {
        if (scrollTop > fourIconsOffset - windowHeight) {
          setIsFourIcons(true);
        }
      }
    }

    if (!isQuienesSomosVisible) {
      const quienesSomosElement = document.querySelector(
        ".quienes-somos"
      ) as HTMLElement | null;
      const quienesSomosOffset = quienesSomosElement?.offsetTop;
      if (quienesSomosOffset !== undefined && quienesSomosOffset !== null) {
        if (scrollTop > quienesSomosOffset - windowHeight) {
          setIsQuienesSomosVisible(true);
        }
      }
    }

    if (!isFaqVisible) {
      const faqElement = document.querySelector(".faq") as HTMLElement | null;
      const faqOffset = faqElement?.offsetTop;
      if (faqOffset !== undefined && faqOffset !== null) {
        if (scrollTop > faqOffset - windowHeight) {
          setIsFaqVisible(true);
        }
      }
    }

    if (!isFooterVisible) {
      const footerElement = document.querySelector(
        ".footer"
      ) as HTMLElement | null;
      const footerOffset = footerElement?.offsetTop;
      if (footerOffset !== undefined && footerOffset !== null) {
        if (scrollTop > footerOffset - windowHeight) {
          setIsFooterVisible(true);
        }
      }
    }
  }, [
    isQueOfrecemosVisible,
    isFourIcons,
    isQuienesSomosVisible,
    isFaqVisible,
    isFooterVisible,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <div className="content">
        <div
          className={`fade-in que-ofrecemos ${
            isQueOfrecemosVisible ? "visible" : ""
          }`}
        >
          <QueOfrecemos />
        </div>
        <div className={`fade-in four-icons ${isFourIcons ? "visible" : ""}`}>
          <FourIcons />
        </div>
        <div
          className={`fade-in quienes-somos ${
            isQuienesSomosVisible ? "visible" : ""
          }`}
        >
          <QuienesSomos />
        </div>
        <div className={`fade-in faq ${isFaqVisible ? "visible" : ""}`}>
          <Faq />
        </div>
        <div className={`fade-in footer ${isFooterVisible ? "visible" : ""}`}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Content;
