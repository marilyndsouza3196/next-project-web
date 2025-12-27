"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Features from "./components/Features";
import {RenderedBox} from "./components/RenderedBox";
import ParallaxExample from "./components/ParallaxExample";
import { useState, useEffect } from "react";
import CreativeCarousel from "./components/CreativeCarousel";
export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section")?.offsetHeight || 0;
      const scrollY = window.scrollY;
      setScrolled(scrollY > heroHeight - 100); // adjust sensitivity
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
    <header className={scrolled ? "scrolled" : ""}>
        <h1>18 Squares</h1>
        <nav>
            <ul>
                {/* <li><a href="#">Home</a></li> */}
                <li><a href="#">Catalog</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  <section className="hero-section">
  <div className="hero-content">
    <h1 className="title">18 Squares</h1>
    <p className="subtitle">Discover, Design & Create</p>
  </div>
</section>
<section>
<CreativeCarousel />
</section>
<section>
    <div className="container-fluid features-section ">
    <div className="row">
    <Features title=" European CV builder" desc="Our solution to an impactful resume, built to create instantly”" button="Show now" href="/cvBuilder"></Features>
    <Features title="Reset and Rise System " desc="When you need to unwind, you go nowhere eles" button="Coming soon " ></Features>
    <Features title="Where next" desc="Our one stop shop to make work better" button="Show now" ></Features>
    </div>
    </div>
    </section>
    <section className="extra">
      
    </section>
    </>
  );
}
