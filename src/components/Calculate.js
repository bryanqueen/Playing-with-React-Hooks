import React,{useState} from 'react';

function Calculate() {
    const [value, setValue] = useState(() => {
        console.log('Omo i Just dey Calculate Gan');
        return 10
    })
    function Divisor() {
        setValue(divisor => divisor / 10)
    }
    function Multiplier(params) {
        setValue(multiplier => multiplier * 100)
    }
    return (
        <div>
            <button onClick={Divisor}>/</button>
            <span>{value}</span>
            <button onClick={Multiplier}>X</button>
        </div>
    );
}

export default Calculate;