import React, { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <VideoContext.Provider value={{ isPlaying, setIsPlaying }}>
            {children}
        </VideoContext.Provider>
    );
};

export const useVideo = () => useContext(VideoContext);
