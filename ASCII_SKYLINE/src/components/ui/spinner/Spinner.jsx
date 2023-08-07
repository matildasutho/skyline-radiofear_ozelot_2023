import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import "./Spinner.css";

const Spinner = () => {
    const spinner = ["◴", "◷", "◶", "◵"];
    const [currentFrame, setCurrentFrame] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentFrame((prevFrame) => (prevFrame + 1) % spinner.length);
        }, 800);

        return () => clearInterval(interval);
    }, []);

    const handleWindowClick = () => {
        const hideOuter = document.getElementsByClassName("outer")[0];
        hideOuter.style.display = "none";
    };

    useEffect(() => {
        window.addEventListener("click", handleWindowClick);
        return () => {
            window.removeEventListener("click", handleWindowClick);
        };
    }, []);
    return (
        <>
            <Html fullscreen zIndexRange={[0, 1]}>
                <div className="outer">
                    <div className="inner">{spinner[currentFrame]}</div>
                </div>
            </Html>
        </>
    );
};

export default Spinner;
