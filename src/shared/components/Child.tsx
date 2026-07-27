import type { MutableRefObject } from "react";

const Child = ({onDataReceived, valueRef}: {onDataReceived: (data: string) => void, valueRef: MutableRefObject<string>}) => {
    return <div>Child
        {/* // useref example */}
        <textarea onChange={(e) => {
            valueRef.current = e.target.value
        }}/>
        {/* callback child to parent prop example */}
        <button onClick={() => onDataReceived("data from child")}>Child Button</button>
    </div>
}

export default Child;