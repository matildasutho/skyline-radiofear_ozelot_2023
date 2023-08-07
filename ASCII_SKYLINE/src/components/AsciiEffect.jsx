import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useData } from "./DataContext";
import { AsciiRenderer } from "@react-three/drei";

export default function AsciiEffect({ backGround, foreGround, characTers }) {
    return (
        <>
            <AsciiRenderer
                bgColor={backGround} // Use the backGround variable defined in the component's scope
                fgColor={foreGround}
                characters={characTers}
            />
        </>
    );
}

//
