import { useCounter } from "./useCounter"

export const Counter = () => {

    const {count, increment, decrement} = useCounter();

    return <div><h3>Counter using custom Hook</h3>
        <div>{count}</div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
    </div>
}
