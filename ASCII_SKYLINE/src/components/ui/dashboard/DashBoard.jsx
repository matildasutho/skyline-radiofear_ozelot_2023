import React from "react";
import { Html } from "@react-three/drei";
import "./DashBoard.css";

const DashBoard = ({
    ffaction,
    rewaction,
    toggleaction,
    inner,
    trackDisplay,
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
}) => {
    return (
        <>
            <Html fullscreen>
                <div className="top-right"></div>
                <div className="container fadeIn">
                    <div className="vertical">
                        <div className="horizontal">
                            <span className="casette">
                                <span className="flitter mini-box"></span>
                                SKYLINE
                            </span>
                            <div className="overflow-hidden">
                                <marquee scrollamount="3" className="label">
                                    <span>{trackDisplay}</span>
                                </marquee>
                            </div>
                        </div>
                        <div className="horizontal">
                            <div className="vertical">
                                <span className="btn-1st link">
                                    {/* <img
                                        className="icon bc"
                                        src="src/assets/bc-logotype-light-128.png"
                                    ></img> */}
                                    BC
                                </span>
                                <span className="btn-1st link">SC</span>
                            </div>
                            <div className="vertical">
                                <span className="btn-2nd link">
                                    {" "}
                                    {/* <img
                                        className="icon"
                                        src="src/assets/Spotify_Logo_RGB_White.png"
                                    ></img> */}
                                    Stream
                                </span>
                                <span className="btn-2nd link">Instagram</span>
                            </div>
                            <div className="vertical">
                                <span className="btn-2nd link">
                                    {" "}
                                    {/* <img
                                        className="icon"
                                        src="src/assets/Spotify_Logo_RGB_White.png"
                                    ></img> */}
                                    Video
                                </span>
                                <span className="btn-2nd link">Project</span>
                            </div>
                            <div className="vertical">
                                <button
                                    className="ff_button nav"
                                    onClick={ffaction}
                                >
                                    FF
                                </button>
                                <button
                                    className="rew_button nav"
                                    onClick={rewaction}
                                >
                                    REW
                                </button>
                            </div>
                            <div className="vertical">
                                <div className="horizontal">
                                    <button
                                        className="track_button"
                                        onClick={button1}
                                    >
                                        1
                                    </button>
                                    <button
                                        className="track_button"
                                        onClick={button2}
                                    >
                                        2
                                    </button>
                                    <button
                                        className="track_button"
                                        onClick={button3}
                                    >
                                        3
                                    </button>
                                </div>
                                <div className="horizontal">
                                    <button
                                        className="track_button"
                                        onClick={button4}
                                    >
                                        4
                                    </button>
                                    <button
                                        className="track_button"
                                        onClick={button5}
                                    >
                                        5
                                    </button>
                                    <button
                                        className="track_button"
                                        onClick={button6}
                                    >
                                        6
                                    </button>
                                </div>
                            </div>
                            <div className="vertical">
                                <span className="link">
                                    {" "}
                                    <img
                                        id="logo"
                                        src="src/assets/Ozelot_Logo_Final_StefanoBona_2022.png"
                                    ></img>
                                </span>
                                <span className="link" onClick={toggleaction}>
                                    {inner}
                                    {/* {label} */}
                                    <img
                                        className="toggle"
                                        src="src/assets/skylinesPLAY-PAUSE178px.svg"
                                    ></img>
                                    {/* <img
                                        className="toggle"
                                        src={toggleImage}
                                    ></img> */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Html>
        </>
    );
};

export default DashBoard;
