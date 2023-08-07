import React, { useEffect, useRef, useState } from "react";
import { Environment, useEnvironment } from "@react-three/drei";
import VideoMaterial from "./video/VideoMaterial";
import footage from "/360_posterize.mp4";

export default function Space() {
    const [isPlaying] = useState();

    const [video, setVideo] = useState();

    const { environment } = useEnvironment();

    return (
        <>
            <mesh>
                <sphereGeometry args={[50, 10, 5]} />
                <VideoMaterial
                    src={footage}
                    setVideo={setVideo}
                    isPlaying={isPlaying}
                />
            </mesh>
            {environment && <primitive object={environment.scene} />}
            <mesh>
                <Environment background color={"blue"} />
            </mesh>
        </>
    );
}
