import React, {useState} from 'react';

function Solvings() {
    const [number, setNumber] = useState(() => {
        console.log('Coding is going very smoothly');
        return 5
    });
    function Minus() {
        setNumber(minus => minus - 2)
    }
    function Plus() {
        setNumber(plus => plus + 5)
    }
    return (
        <div>
           <button onClick={Minus}>-</button>
           <span>{number}</span>
           <button onClick={Plus}>+</button> 
        </div>
    );
}

export default Solvings;