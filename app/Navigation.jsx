/* eslint-disable jsx-a11y/alt-text */
"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';
import { useProgress } from "@react-three/drei";

export const Navigation = () => {

    // ANIMATIONS

    const navigationBar = useRef()
    const navigationBarCenter = useRef()
    const navigationBarCenterRef1 = useRef()
    const navigationBarCenterRef2 = useRef()
    const navigationBarCenterRef3 = useRef()
    const navigationBarCenterRef4 = useRef()

    const { progress } = useProgress()
    const [playAnimation, setPlayAnimation] = useState(false)

    useLayoutEffect(() => {
        if (progress === 100) {
            setTimeout(() => {
                setPlayAnimation(true)
            }, 150);
        }
    }, [progress])

    useLayoutEffect(() => {
        if (playAnimation) {
            gsap.to(navigationBar.current, { opacity: 1, rotateY: "0deg", scale: "1", rotateX: "0deg", translateY: "0vh", duration: 0.75, ease: 'power1', delay: 0.75 })
            gsap.fromTo(navigationBar.current, { width: "25%" }, { width: "100%", duration: 0.75, ease: "power1", delay: 1.75 })
            gsap.fromTo(navigationBarCenter.current, { display: "none" }, { display: "flex", duration: 0.01, delay: 1.75 })
            gsap.to(navigationBarCenterRef1.current, { opacity: 1, duration: 1, delay: 1.75 })
            gsap.to(navigationBarCenterRef2.current, { opacity: 1, duration: 1, delay: 1.85 })
            gsap.to(navigationBarCenterRef3.current, { opacity: 1, duration: 1, delay: 1.95 })
            gsap.to(navigationBarCenterRef4.current, { opacity: 1, duration: 1, delay: 2.05 })
        }
    }, [playAnimation])

    // NAVIGATION

    const router = useRouter();
    const pathname = usePathname();
    let isAnimating = false;
  
    // const handleNavigate = (path) => {
    //     router.push(path);
    // };

  return (
    <div className="navigation-wrapper">
        <div className="navigation-inside" ref={navigationBar} >
            <div className="navigation-inside-left">
                <Image width={500} height={500} src="/images/dwlogonew2.webp" className="navigation-inside-left-image" alt="" unoptimized />
            </div>
            <div className="navigation-inside-big" ref={navigationBarCenter} >
                <Link href={'/'}>
                    <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef1} >Home</p>
                </Link>
                <Link href={'/about'}>
                    <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef2}  >About</p>
                </Link>
                <Link href={'/works'}>
                    <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef3} >Works</p>
                </Link>
                {/* <p className="small-description white hover-text-white opacity" ref={navigationBarCenterRef4} onClick={() => handleNavigate('/casestudies')} >Case Studies</p> */}
            </div>
            <div className="navigation-inside-right">
                <Link href={'/contact'}>
                    <button className="button button-navigation button-transparent-border" >
                        <div className="button-content">
                            <span className="small-description">Get In Touch</span>
                            <span className="small-description">Get In Touch</span>
                        </div>
                        <div className="button-circle button-circle-white">
                            <ArrowUpRight className="button-icon" />
                        </div>
                    </button>
                </Link>
            </div>
            <div className="navigation-inside-right-mobile">
                <div className="navigation-inside-right-mobile-line" />
                <div className="navigation-inside-right-mobile-line" />
                <div className="navigation-inside-right-mobile-line" />
            </div>
        </div>
    </div>
  );
};