import { useStore } from "../hooks/useStore";
import React from "react";
import { Cube } from "./Cube";
import { useInterval } from "../hooks/useInterval";
export default function Cubes(){
    const [cubes, addCube, removeCube, saveWorld] = useStore((state) => [
        state.cubes,
        state.addCube,
        state.removeCube,
        state.saveWorld,
    ])

    useInterval(
        () => {
            saveWorld(cubes);
        },
        10000,
    )

    return(
       cubes.map((cube) => {
           return(
            <Cube 
            key={cube.key}
             texture={cube.texture}
             position={cube.pos}
             addCube={addCube}
             removeCube={removeCube}
           />
           )
       })
    )
}