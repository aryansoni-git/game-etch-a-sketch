'use client';
import { useEffect, useState } from "react";
import useScreenSize from "./useScreenSize";

export default function GridContainer({ size, color, mode, clearGrid }) {
    const isSmallScreen = useScreenSize(640);
    const isMediumScreen = useScreenSize(768);
    const isLargeScreen = useScreenSize(1024);

    const [grid, setGrid] = useState(Array.from({ length: size * size }).fill(''));

    const gridOnSmall = 300;
    const gridOnMedium = 400;
    const gridOnLarge = 500;

    const containerSize = (isSmallScreen && gridOnSmall) || (isMediumScreen && gridOnMedium) || gridOnLarge;

    useEffect(() => {
        setGrid(Array.from({ length: size * size }).fill(''));
    }, [size, clearGrid]);

    const handleCellInteraction = (index) => {
        const newGrid = [...grid];
        if (mode === 'clear') {
            newGrid[index] = '';
        } else if (mode === 'random') {
            newGrid[index] = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        } else {
            newGrid[index] = color;
        }
        setGrid(newGrid);
    };

    const cellProps = (index) => {
        if (mode === 'hover') {
            return {
                onMouseEnter: () => handleCellInteraction(index),
            };
        } else {
            return {
                onClick: () => handleCellInteraction(index),
            };
        }
    };

    return (
        <section
            style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${size}, 1fr)`,
                gridTemplateRows: `repeat(${size}, 1fr)`,
                width: containerSize,
                height: containerSize,
            }}
            className="shadow-lg shadow-primary-black"
        >
            {grid.map((cellColor, index) => (
                <div
                    key={index}
                    style={{
                        backgroundColor: cellColor,
                    }}
                    className="cursor-crosshair border-none outline-none box-border hover:shadow-md hover:shadow-primary-black"
                    {...cellProps(index)}
                >
                </div>
            ))}
        </section>

    );
}