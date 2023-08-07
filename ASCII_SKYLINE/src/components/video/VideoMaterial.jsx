import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";

const VideoMaterial = ({ src, setVideo }) => {
    const [videoPaused, setVideoPaused] = useState(true);

    const texture = useVideoTexture(src);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    texture.offset.x = 1;

    setVideo?.(texture.image);

    // useEffect(() => {
    //     if (videoPaused) {
    //         texture.image.pause(); // Pause the video when videoPaused is true
    //     } else {
    //         texture.image.play(); // Play the video when videoPaused is false
    //     }
    // }, [videoPaused, texture.image]);

    // useEffect(() => {
    //     // When the component mounts, set videoPaused to false to play the video
    //     setVideoPaused(false);

    //     // Cleanup function to pause the video when the component unmounts
    //     return () => {
    //         texture.image.pause();
    //     };
    // }, []);

    // texture.image.pause();
    return (
        <meshStandardMaterial
            side={THREE.DoubleSide}
            map={texture}
            toneMapped={false}
            transparent
            opacity={1}
        />
    );
};
export default VideoMaterial;
