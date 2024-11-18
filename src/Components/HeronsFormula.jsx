import React, { useState } from 'react';
import './HeronsFormula.css';

function HeronsFormula() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [c, setC] = useState('');
    const [area, setArea] = useState('');

    const calculateHeron = (a, b, c) => {
        return (1 / 4) * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
    }

    const handleCalculate = () => {
        const sideA = parseFloat(a);
        const sideB = parseFloat(b);
        const sideC = parseFloat(c);
        const result = calculateHeron(sideA, sideB, sideC);
        setArea(result);
    }

    return (
        <div className="form-container">
            <h2>Heron's Formula</h2>
            <label htmlFor="side-a-heron">Side a:</label>
            <input type="text" id="side-a-heron" value={a} onChange={(e) => setA(e.target.value)} />
            <label htmlFor="side-b-heron">Side b:</label>
            <input type="text" id="side-b-heron" value={b} onChange={(e) => setB(e.target.value)} />
            <label htmlFor="side-c-heron">Side c:</label>
            <input type="text" id="side-c-heron" value={c} onChange={(e) => setC(e.target.value)} />
            <label htmlFor="heron-result">Area (Result):</label>
            <input type="text" id="heron-result" value={area} disabled />
            <button id="calculate-heron" onClick={handleCalculate}>Calculate</button>
        </div>
    );
}

export default HeronsFormula;