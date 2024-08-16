import React, { useState } from "react";
export default function Function({name, count, onClick, setCount}) {
    const [number, setNumber] = useState(_=> 0);
    const [msg, setMsg] = useState('hello world');
    const handleClick1 = (type) => {
        setNumber(number + (type === 'plus' ? 1 : -1))
        // console.log('qwwwqweqw')
    }
    return (
        <div>
            <h2>{name}state 的用法</h2>
            <h3>{msg}</h3>
            <div>this number is {number}</div>
            <div>this count is {count}</div>
            {/* 手控组件 */}
            <button onClick={() => handleClick1("plus")}>+</button>
            <button onClick={() => handleClick1("minus")}>-</button>
            <button onClick={() => onClick(12)}>修改count</button>
            <button onClick={() => setCount(v => v+1)}>修改count</button>
        </div>
    )
}