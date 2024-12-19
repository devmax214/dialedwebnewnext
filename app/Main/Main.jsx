"use client";
import dynamic from 'next/dynamic'
import { ReactLenis, useLenis } from 'lenis/react'
// const SectionHero = dynamic(() => import('./SectionHero').then(mod => mod.SectionHero), { ssr: false })
// const SectionFooter = dynamic(() => import('./SectionFooter').then(mod => mod.SectionFooter), { ssr: false })
// const SectionShowreel = dynamic(() => import('./SectionShowreel').then(mod => mod.SectionShowreel), { ssr: false })
// const SectionTestimonials = dynamic(() => import('./SectionTestimonials').then(mod => mod.SectionTestimonials), { ssr: false })
// const SectionTechstack = dynamic(() => import('./SectionTechstack').then(mod => mod.SectionTechstack), { ssr: false })
// const SectionFlower = dynamic(() => import('./SectionFlower').then(mod => mod.SectionFlower), { ssr: false })
// const SectionServices = dynamic(() => import('./SectionServices').then(mod => mod.SectionServices), { ssr: false })
// const SectionProjects = dynamic(() => import('./SectionProjects').then(mod => mod.SectionProjects), { ssr: false })
// const SectionProjectsMobile = dynamic(() => import('./SectionProjectsMobile').then(mod => mod.SectionProjectsMobile), { ssr: false })
// const SectionKPI = dynamic(() => import('./SectionKPI').then(mod => mod.SectionKPI), { ssr: false })

import { SectionHero } from "./SectionHero";
import { SectionFooter } from "./SectionFooter";
import { SectionShowreel } from "./SectionShowreel";
import { SectionTestimonials } from "./SectionTestimonials";
import { SectionTechstack } from "./SectionTechstack";
import { SectionFlower } from "./SectionFlower";
import { SectionServices } from "./SectionServices";
import { SectionProjects } from "./SectionProjects";
import { SectionProjectsMobile } from "./SectionProjectsMobile";
import { SectionKPI } from "./SectionKPI";
import "./main.css";
import { useEffect, useLayoutEffect, useState } from 'react';
import { useProgress } from "@react-three/drei";

const Main = () => {

  const { progress } = useProgress();
  const [fadeOut, setFadeOut] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true); // Tracks the initial loading phase
  const lenis = useLenis();

  // Handle the initial loading phase
  useEffect(() => {
    if (initialLoad) {
      lenis?.stop(); // Only stop lenis during the initial load
    }
  }, [lenis, initialLoad]);

  useLayoutEffect(() => {
    if (progress === 100) {
      setFadeOut(true);
      lenis?.start();
      setInitialLoad(false)
    }
  }, [progress, lenis, initialLoad]);

  return (
    <ReactLenis root>
      {/* <div className={`initial-loading-screen ${fadeOut ? "fade-out" : ""}`} >
        <div className="loading-image-box" >
          <img src="/images/loading.gif" className="loading-image" alt="Loading Image" />
        </div>
      </div> */}
      <SectionHero />
      <div className="normal-padding" />
      <SectionShowreel />
      <div className="border-padding">
        <div className="section-border"></div>
      </div>
      <SectionServices />
      <div className="normal-padding" />
      <SectionProjects />
      <SectionProjectsMobile />
      <div className="normal-padding" />
      <SectionTechstack />
      <div className="normal-padding" />
      <SectionTestimonials />
      <div className="normal-padding" />
      <SectionKPI />
      <div className="normal-padding" />
      <SectionFlower />
      <div className="normal-padding" />
      <SectionFooter />
    </ReactLenis>
  );
};

export default Main;
