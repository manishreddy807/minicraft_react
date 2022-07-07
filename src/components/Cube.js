import React, { useState } from "react";
import * as textures from '../texture';

export const Cube = ({position, texture, addCube, removeCube}) => {
    const [hover, setHover] = useState(null);
    const color = texture === 'glass' ? 'skyblue' : 'white';
    return(
        <mesh>
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