import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { useData } from "./DataContext";

export default function Analyser() {
    const sound = useRef();
    const { camera } = useThree();
    const [listener] = useState(() => new THREE.AudioListener());

    useEffect(() => {
        camera.add(listener);
        const dataAv = sound.getAverageFrequency();
        console.log(dataAv);
    });

    return null;
}
