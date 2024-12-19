import { useTexture } from "@react-three/drei";
import { forwardRef } from "react";
import React from "react";

export const CustomMaterial = forwardRef((props, ref) => {
  // Load the "3.jpeg" texture directly
  const texture = useTexture("/images/1.jpeg");

  return (
    <meshMatcapMaterial
      {...props}
      ref={ref}
      matcap={texture}
    />
  );
});

CustomMaterial.displayName = "CustomMaterial";