'use client';
import { useState } from "react";
import Settings from "./Settings";
import GridContainer from "./GridContainer";

// MainSection component combining Settings and GridContainer
export default function MainSection() {
    const [color, setColor] = useState('#333333');
    const [size, setSize] = useState(16);
    const [mode, setMode] = useState('normal');
    const [clearGrid, setClearGrid] = useState(false);

    const generateRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        setColor(randomColor);
    };

    const handleSetMode = (newMode) => {
        if (newMode === 'restart') {
            setClearGrid(!clearGrid);
            return;
        }
        setMode(newMode);
    };

    return (
        <main className={`
        flex flex-col justify-center items-center gap-5 px-responsive-padding-x py-responsive-padding-y
        md:flex-row lg:gap-8
        `}>
            <Settings
                color={color}
                setColor={setColor}
                size={size}
                setSize={setSize}
                mode={mode}
                setMode={handleSetMode}
                generateRandomColor={generateRandomColor}
            />
            <GridContainer
                size={size}
                color={color}
                mode={mode}
                clearGrid={clearGrid}
            />
        </main>
    );
}

