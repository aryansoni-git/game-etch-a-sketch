'use client';

import { useState } from 'react';

export default function ButtonContainer({ setMode, generateRandomColor }) {
    const [activeMode, setActiveMode] = useState('normal');

    const isActive = 'bg-primary-black text-white';

    function Button({ text, mode, addClassName }) {
        const handleClick = () => {
            if (mode === 'random') {
                generateRandomColor();
            } else {
                setMode(mode);
                setActiveMode(mode);
            }
        };

        return (
            <button
                type="button"
                onClick={handleClick}
                className={`${addClassName} ${activeMode === mode ? isActive : ''} border-primary-black border-[0.5px] rounded-md px-5 py-2 hover:bg-primary-black hover:text-white xs:text-lg`}
            >
                {text}
            </button>
        );
    }

    return (
        <div className="flex gap-2 justify-center xs:flex-col lg:gap-3">
            <Button text="Random color" mode="random" />
            <Button text="Normal mode" mode="normal" addClassName="hidden xs:block" />
            <Button text="Hover mode" mode="hover" addClassName="hidden xs:block" />
            <Button text="Restart" mode="restart" />
        </div>
    );
}
