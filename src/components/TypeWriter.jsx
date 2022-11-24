import * as React from "react";

const TypeWriter = ({ text, onComplete }) => {
    const [currentText, setCurrentText] = React.useState("");
    const [currentIdx, setCurrentIdx] = React.useState(0);
    const [pointerBlink, setPointerBlink] = React.useState(false);

    // Reset
    React.useEffect(() => {
        setCurrentIdx(0);
        setCurrentText("");
        setPointerBlink(false);
    }, [text]);

    // Typing effect
    React.useEffect(() => {
        let timeout = setTimeout(() => {
            const char = text.charAt(currentIdx);
            if (char === "") {
                clearTimeout(timeout);
                setPointerBlink(true);
                onComplete && onComplete();
                return;
            }
            setCurrentText(value => value += char);
            setCurrentIdx(value => value += 1);
        }, 100);
        return () => clearTimeout(timeout);
    }, [currentIdx]);

    return (
        <div className="type-text-wrap">
            <h1 className="mt-36 font-bold text-4xl md:text-5xl mb-4">
                {currentText}
                <div className={`type-pointer bg-white inline pl-[2px] pr-[2px]${pointerBlink ? " animate-blink-fast" : ""}`} />
            </h1>
        </div>
    )
};

export default TypeWriter;
