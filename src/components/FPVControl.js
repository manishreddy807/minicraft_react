import React, { useEffect, useRef } from "react";
import { PointerLockControls as PointerLockControlsImpl} from "three/examples/jsm/controls/PointerLockControls";
import { useThree, extend } from "@react-three/fiber";

extend({PointerLockControlsImpl});

export const FPVControls = (props) => {
    const controls = useRef();
    const {camera, gl} = useThree();
    useEffect(() => {
        document.addEventListener('click', () => {
            controls.current.lock();
        })
    }, []);

    return(
        <PointerLockControlsImpl 
         ref={controls}
         args={[camera, gl.domElement]}
         {...props}
        />
    )
}