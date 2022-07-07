import React, { useMemo } from "react";
import { usePlane } from "@react-three/cannon";
import { 
    LinearMipmapLinearFilter,
    NearestFilter,
    RepeatWrapping,
    TextureLoader 
} from "three";
import { useStore } from "../hooks/useStore";
import  grass  from "../images/grass.jpg";

export const Ground = props => {
    const [ref] = usePlane(() => ({rotation: [-Math.PI /2,0,0], ...props}));
    const texture = useMemo(() => {
        const t = new TextureLoader().load(grass)
        t.wrapS = RepeatWrapping
        t.wrapT = RepeatWrapping
        t.repeat.set(100,100)
        return t;
    }, [])

    const [addCube, activeTexture] = useStore((state) => [
        state.addCube,
        state.texture,
    ]);
    texture.magFilter = NearestFilter;
    texture.minFilter = LinearMipmapLinearFilter;
    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(100, 100);

    return(
        <mesh
         ref={ref}
         receiveShadow
         onClick={(e) => {
             e.stopPropagation();
             const [x,y,z] = Object.values(e.point).map((coord) =>
              Math.ceil(coord)
             );
             addCube(x, y, z, activeTexture)
         }}
        >
            <planeBufferGeometry attach='geometry' args={[100,100]} />
            <meshStandardMaterial map={texture} attach='material' />
        </mesh>
    )
}