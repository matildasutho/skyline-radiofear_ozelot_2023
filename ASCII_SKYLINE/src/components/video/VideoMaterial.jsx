import * as THREE from "three";
import React, { useEffect } from "react";
import { useVideoTexture } from "@react-three/drei";
import { useVideo } from "../VideoContext"; // Import your video context

// video material paused until user interacts with the window. Hopefully save on bandwidth

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
        texture.image.play();
    };

    useEffect(() => {
        window.addEventListener("click", playVideo);
        return () => {
            window.removeEventListener("click", playVideo);
        };
    }, []);

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
