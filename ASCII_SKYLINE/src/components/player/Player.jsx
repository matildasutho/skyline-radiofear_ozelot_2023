import React, { Suspense, useRef, useState, useEffect } from "react";
import { PositionalAudio } from "@react-three/drei";
import DashBoard from "../ui/dashboard/DashBoard.jsx";
import AsciiEffect from "../AsciiEffect.jsx";
import "../ui/dashboard/DashBoard.css";
import tracks from "./tracks.js";
import colorPalettes from "./colorPalettes.js";
import Gradient from "./Gradient";
import Spinner from "../ui/spinner/Spinner";

export default function Player() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const sound = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [colorPalette, setColorPalette] = useState(colorPalettes[0]);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (sound.current && isPlaying) {
            sound.current.currentTime = currentTime; // Set the currentTime of the audio
            sound.current.play();
            sound.loop = false;
        } else if (sound.current) {
            sound.current.pause();
        }
    }, [currentTime, isPlaying]);

    const playPauseAudio = () => {
        setIsPlaying((prevIsPlaying) => {
            const newIsPlaying = !prevIsPlaying;
            if (newIsPlaying) {
                sound.current.play();
            } else {
                sound.current.pause();
            }
            console.log("Is playing:", newIsPlaying);
            return newIsPlaying;
        });
    };

    const changeTrack = (nextTrackIndex) => {
        sound.current.stop();
        setIsPlaying(false);
        setCurrentTime(0);
        setCurrentTrackIndex(
            (prevIndex) => (nextTrackIndex + tracks.length) % tracks.length
        );
    };

    useEffect(() => {
        if (isPlaying) {
            sound.current?.play();
        }
    }, [isPlaying]);

    const handleColorChange = (palette) => {
        setColorPalette(palette);
    };

    const url = tracks[currentTrackIndex];
    const display = url
        .replace("/tracks/", '░░░ Radiofear  -  "')
        .concat('" ░░░');

    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio
                    url={tracks[currentTrackIndex]}
                    ref={(audio) => (sound.current = audio)}
                    loop={false}
                    onEnded={() => changeTrack(currentTrackIndex + 1)}
                />
            </Suspense>

            <AsciiEffect
                sound={sound}
                backGround={colorPalette.background}
                foreGround={colorPalette.foreground}
                characTers={colorPalette.characters}
            />
            <Gradient />

            <DashBoard
                ffaction={() => changeTrack(currentTrackIndex + 1)}
                rewaction={() => changeTrack(currentTrackIndex - 1)}
                toggleaction={playPauseAudio}
                trackDisplay={display}
                input={" "}
                button1={() => handleColorChange(colorPalettes[0])}
                button2={() => handleColorChange(colorPalettes[1])}
                button3={() => handleColorChange(colorPalettes[2])}
                button4={() => handleColorChange(colorPalettes[3])}
                button5={() => handleColorChange(colorPalettes[4])}
                button6={() => handleColorChange(colorPalettes[5])}
                // Add more buttons with color palettes as needed
            ></DashBoard>
            <Spinner />
        </>
    );
}
