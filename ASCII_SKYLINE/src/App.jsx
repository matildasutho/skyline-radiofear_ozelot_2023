import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { VRButton, XR, Controllers } from "@react-three/xr";
import "./App.css";
import Space from "./components/Space.jsx";
import DataProvider from "./components/DataContext.jsx";
import Player from "./components/player/Player";

function ThreeScene() {
    return (
        <>
            <ambientLight color={[0.1, 0.05, 0.05]} />
            <pointLight position={[0, 10, 0]} intensity={[1]} color="blue" />
            <PerspectiveCamera makeDefault fov={50} position={[0, 0, 0.1]} />
            <OrbitControls maxDistance={[0.1]} />
            <Space />
        </>
    );
}

function App() {
    return (
        <>
            <DataProvider>
                {/* <VRButton /> */}
                <Canvas
                    camera={{ position: [0, 0, 3] }}
                    gl={{
                        powerPreference: "high-performance",
                        alpha: false,
                        antialias: false,
                        stencil: false,
                        depth: false,
                    }}
                >
                    <XR>
                        <Controllers />

                        <Suspense fallback={null}>
                            <Player />
                            <ThreeScene />
                        </Suspense>
                    </XR>
                </Canvas>
            </DataProvider>
        </>
    );
}

export default App;
