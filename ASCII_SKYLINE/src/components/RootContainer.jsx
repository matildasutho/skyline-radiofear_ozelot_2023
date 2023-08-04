import React from "react";
import ReactDOM from "react-dom";
import PlaySound from "./player/Player";

const RootContainer = ({ backgroundColor }) => {
    return (
        <div style={{ background: backgroundColor }}>
            <PlaySound />
        </div>
    );
};

export default RootContainer;
