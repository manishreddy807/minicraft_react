import { useBox } from "@react-three/cannon";
import React, { useState } from "react";
import * as textures from '../texture';

export const Cube = ({position, texture, addCube, removeCube}) => {
    const [ref] = useBox(() => ({
        type: 'Static',
        position,
    }))

    const [hover, setHover] = useState(null);
    const color = texture === 'glass' ? 'skyblue' : 'white';
    return(
        <mesh
         castShadow
         ref={ref}
         onPointerMove={(e) => {
             e.stopPropagation();
             setHover(Math.floor(e.faceIndex / 2));
         }}
         
         onPointerOut={() => {
             setHover(null);
         }}

         onClick={(e) => {
             e.stopPropagation();
             const clickedFace = Math.floor(e.faceIndex / 2);
             const {x, y, z} = ref.current.position;

             if(clickedFace === 0){
                 e.altKey ? removeCube(x,y,z): addCube(x+1, y,z);
                 return;
             }
             if(clickedFace === 1){
                e.altKey ? removeCube(x,y,z): addCube(x-1, y,z);
                return;
             }
             if(clickedFace === 2){
                e.altKey ? removeCube(x,y,z): addCube(x, y+1,z);
                return;
             }
             if(clickedFace === 3){
                e.altKey ? removeCube(x,y,z): addCube(x, y-1,z);
                return;
             }
             if(clickedFace === 4){
                e.altKey ? removeCube(x,y,z): addCube(x, y,z+1);
                return;
             }
             if(clickedFace === 5){
                e.altKey ? removeCube(x,y,z): addCube(x, y,z-1);
                return;
             }
         }}
        
        >
            <boxBufferGeometry attach='geometry' />
            <meshStandardMaterial 
             attach='material'
             map={textures[texture]}
             color={hover != null ? 'gray': color}
             opacity={texture === 'glass' ? 0.7: 1}
             transparent={true}
            />
        </mesh>
    )
}