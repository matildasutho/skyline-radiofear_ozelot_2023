import React, { Suspense, useRef, useState, useEffect } from "react";
import { PositionalAudio } from "@react-three/drei";
import DashBoard from "../ui/dashboard/DashBoard.jsx";
import AsciiEffect from "../AsciiEffect.jsx";
import "../ui/dashboard/DashBoard.css";
import colorPalettes from "./colorPalettes";
import tracks from "./tracks";

export default function PlaySound() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const sound = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [colorPalette, setColorPalette] = useState(colorPalettes[0]);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (sound.current && isPlaying) {
            sound.current.currentTime = currentTime; // Set the currentTime of the audio
            sound.current.play();
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

    // const handleColorChange = (palette) => {
    //     setColorPalette(palette);
    //     setRootBackgroundColor(palette.background);
    //     // Pass the background color to the parent component (RootContainer)
    //     // So it can update the ReactDOM's root background.
    //     if (typeof window !== "undefined") {
    //         window.parent.postMessage(
    //             {
    //                 type: "BACKGROUND_COLOR_CHANGE",
    //                 backgroundColor: palette.background,
    //             },
    //             "*"
    //         );
    //     }
    // };

    useEffect(() => {
        const handleTrackEnded = () => {
            // Change the track index to the next one in the array
            const nextTrackIndex = (currentTrackIndex + 1) % tracks.length;
            changeTrack(nextTrackIndex);
        };

        // Add event listener for the 'ended' event on the audio element
        sound.current?.addEventListener("ended", handleTrackEnded);

        // Clean up the event listener when the component unmounts or the currentTrackIndex changes
        return () => {
            sound.current?.removeEventListener("ended", handleTrackEnded);
        };
    }, [currentTrackIndex]);

    const url = tracks[currentTrackIndex];
    const display = url.replace("/tracks/", "░░░");
    const duration = tracks[0].duration;
    console.log(duration);

    return (
        <>
            <Suspense fallback={null}>
                <PositionalAudio
                    url={tracks[currentTrackIndex]}
                    ref={(audio) => (sound.current = audio)}
                    onEnded={() => {
                        console.log("ended");
                    }}
                />
                {/* <Audio
                    src={tracks[currentTrackIndex]}
                    queNext={() => {
                        handleTrackEnded();
                    }}
                /> */}
                <AsciiEffect
                    sound={sound}
                    backGround={colorPalette.background}
                    foreGround={colorPalette.foreground}
                    characTers={colorPalette.characters}
                />
            </Suspense>

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
            />
        </>
    );
}
