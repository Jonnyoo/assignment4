import React, { useState } from 'react';
import './NewtonsMethod.css';

function NewtonsMethod() {
    const [g, setG] = useState('');
    const [result, setResult] = useState(null);

    const newtonsMethod = (g) => {
        function f(x) {
            return 6 * Math.pow(x, 4) - 13 * Math.pow(x, 3) - 18 * Math.pow(x, 2) + 7 * x + 6;
        }
        function fPrime(x) {
            return 24 * Math.pow(x, 3) - 39 * Math.pow(x, 2) - 36 * x + 7;
        }
        let maxIterations = 1000;
        let iterations = 0;
        while (Math.abs(f(g)) > 0.0001 && iterations < maxIterations) {
            g = g - f(g) / fPrime(g);
            iterations++;
        }
        return g;
    }

    const handleNewtons = () => {
        const guessG = parseFloat(g);
        const result = newtonsMethod(guessG);
        setResult(result);
    }

    return (
        <div class="form-container">
            <h2>Newton's Method</h2>
            <label for="root-guess">Root Guess:</label>
            <input type="text" id="root-guess" value={g} onChange={(e) => setG(e.target.value)} />
            <label for="root-approximation-result">Root Approximation (Result):</label>
            <input type="text" id="root-approximation-result" value={result} disabled />
            <button id="calculate-newton" onClick={handleNewtons}>Calculate</button>
        </div>
    );
}

export default NewtonsMethod;