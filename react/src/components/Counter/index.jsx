import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    function onPlus() {
        setCount(count > 9 ? 10 : count + 1)
        // if (count > 9) {
        //     setCount(10)
        // } else {
        //     setCount(count + 1)
        // }
    }
    function onMinus() {
        if (count <= 0) {
            setCount(0)
        } else {
            setCount(count - 1)
        }
    }
    function onSpecial() {
        let num = +prompt('Enter is a special number:')
        if (num >= 0 && num <= 10) {
            setCount(num)
        } else {
            setCount(num > 10 ? 10 : 0)
        }
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={onPlus}>+</button>
            <button onClick={onMinus}>-</button>
            <button onClick={() => setCount(0)}>reset</button>
            <button onClick={onSpecial}>special</button>
            <button onClick={() => console.log(count)}>console</button>
        </>
    )
}
export default Counter;
