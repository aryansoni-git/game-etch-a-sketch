import ButtonContainer from "./ButtonContainer";

function ColorPicker({ color, setColor }) {
    return (
        <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="picker h-20 w-20 rounded-full hover:scale-110 cursor-pointer xs:h-24 xs:w-24"
        />
    );
}

function RangeBar({ size, setSize }) {
    return (
        <div className="flex flex-col justify-center items-center lg:mt-2">
            <p className="xs:text-lg">{size}*{size}</p>
            <input
                type="range"
                min={1}
                max={64}
                value={size}
                onChange={(e) => setSize(Number(e.target.value))} />
        </div>
    );
}

export default function Settings({ color, setColor, size, setSize, mode, setMode, generateRandomColor }) {
    return (
        <section className={`
        flex flex-col gap-5 justify-center items-center px-responsive-padding-x py-responsive-padding-y border-primary-black border-[0.5px] rounded-md 
        xs:py-5 lg:py-8 lg:px-8
        `}>
            <ColorPicker
                color={color}
                setColor={setColor}
            />
            <div className="flex flex-col gap-2">
                <ButtonContainer
                    color={color}
                    mode={mode}
                    setMode={setMode}
                    generateRandomColor={generateRandomColor}
                />
                <RangeBar
                    size={size}
                    setSize={setSize}
                />
            </div>
        </section>
    );
}