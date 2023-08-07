import * as THREE from "three";
import React, { useState, useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";
import { useVideo } from "../VideoContext"; // Import your video context

const VideoMaterial = ({ src, setVideo }) => {
    const { isPlaying } = useVideo(); // Get the play state from the context

    const texture = useVideoTexture(src);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    texture.offset.x = 1;

    setVideo?.(texture.image);
    texture.image.pause();

    const playVideo = () => {
        texture.image.play(); // Start fading out when the window is clicked
    };

    // const handleTransitionEnd = () => {
    //     if (fadeOut) {
    //         setIsHidden(true);
    //     }
    // };

    useEffect(() => {
        window.addEventListener("click", playVideo);
        return () => {
            window.removeEventListener("click", playVideo);
        };
    }, []);

    // useEffect(() => {
    //     if (isPlaying) {
    //         texture.image.play();
    //     } else {
    //         texture.image.pause();
    //     }

    //     return () => {
    //         texture.image.pause(); // Pause the video when the component unmounts
    //     };
    // }, [isPlaying, texture.image]);

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
