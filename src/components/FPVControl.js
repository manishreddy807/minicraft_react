import { PointerLockControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";

export const FPVControls = (props) => {
    const controls = useRef();
    const {camera, gl} = useThree();
    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock();
        })
    }, []);

    return(
        <PointerLockControls 
         ref={controls}
         args={[camera, gl.domElement]}
         {...props}
        />
    )
}