/* eslint-disable react/jsx-key */
import React, { Suspense } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Item3 } from "../HeroModel/Coins";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Animation() {

    return (
        <Canvas
            style={{ pointerEvents: 'auto', width: "100%", height: "100%", position: "absolute", top: 0, left: 0, zIndex: 1 }}
            camera={{ position: [2, 0, 10], fov: 35 }}
            dpr={[1, 2]}
            gl={{ powerPreference: 'high-performance', preserveDrawingBuffer: true }}>
            <Suspense fallback >
                <Float rotationIntensity={0.5} floatIntensity={2} speed={2}>
                    <Item3 />
                </Float>
                {/* <Environment preset="sunset" /> */}
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} enableRotate={true} enablePan={false} />
            </Suspense>
        </Canvas>
    );
};