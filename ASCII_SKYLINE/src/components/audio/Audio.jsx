import React from "react";
import { Html } from "@react-three/drei";

const Audio = ({ src, queNext }) => {
    return (
        <>
            <Html>
                <audio src={src} onEnded={queNext} />
            </Html>
        </>
    );
};

export default Audio;
