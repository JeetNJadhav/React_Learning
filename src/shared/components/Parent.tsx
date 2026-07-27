import { useRef } from "react";
import Child from "./Child";

const Parent = () => {
    const valueRef = useRef("")
    const handleDataFromChild = (data: string) => {
        console.log("Data received from child:", data);
    }
    return <div><Child onDataReceived={handleDataFromChild} valueRef={valueRef}/></div>
}

export default Parent;