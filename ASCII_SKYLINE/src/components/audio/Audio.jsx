import React from "react";
import { Html } from "@react-three/drei";

const Audio = ({ src, onended, ref }) => {
    return (
        <>
            <Html>
                <audio src={src} onEnded={onended} ref={ref} />
            </Html>
        </>
    );
};

export default Audio;
