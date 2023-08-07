import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { useData } from "../DataContext";

export default function Gradient({ sound }) {
    const mesh = useRef();
    const analyser = useRef();
    const { dataAv, data, setData } = useData(); // Get the setData function from the context and import the data value!!
    const [currentDataAv, setCurrentDataAv] = useState(0);

    useEffect(() => {
        if (sound && sound.current) {
            analyser.current = new THREE.AudioAnalyser(sound.current, 32);
        }
    }, [sound]);

    useFrame(({ ready }) => {
        if (analyser.current && ready) {
            const data = analyser.current.getFrequencyData();
            const currentDataAv = analyser.current.getAverageFrequency();
            setData(data, currentDataAv); // Update the data value in the context with the new value
            setCurrentDataAv(currentDataAv);
            console.log(currentDataAv);
        }
    });

    const upper = currentDataAv;

    return (
        <>
            {/* <Html>
                <div
                    style={{
                        width: "500px",
                        height: "500px",
                        backgroundImage:
                            "linear-gradient(rgba(0, 0, 0), rgb(110, 120, " +
                            upper +
                            ")",
                    }}
                ></div>
            </Html> */}
        </>
    );
}
