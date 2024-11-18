import React, { useState } from 'react';
import './AmbiguousCase.css';

function AmbiguousCase() {
    const [a, setA] = useState('');
    const [b, setB] = useState('');
    const [angle, setAngle] = useState('');
    const [result, setResult] = useState('');

    const ambiguousCase = (a, b, angle) => {
        if (angle == 90) {
            return 'Right triangle';
        }
        console.log('a: ' + a + ' b: ' + b + ' angle: ' + angle)

        var h = b * Math.sin(angle * (Math.PI / 180));
        h = Math.round(h * 100) / 100;

        console.log('h: ' + h)

        if (angle <= 90) {
            console.log('a: ' + a + ' h: ' + h)
            if (a < h) {
                return 'No triangle';
            } else if ((h < a) && (a < b)) {
                return 'Two triangles (ambiguous case)';
            } else if (a >= h) {
                return 'One triangle';
            } else {
                return 'No solution';
            }
        } else if (angle <= 180) {
            if (a <= b) {
                return 'No triangle';
            } else if (a > b) {
                console.log('One triangle obtuse')
                return 'One triangle';
            }
        } else {
            return 'No solution';
        }
    }


    const handleAmbiguous = () => {
        const sidea = parseFloat(a);
        const sideb = parseFloat(b);
        const anglea = parseFloat(angle);
        console.log('before')
        console.log('a: ' + sidea + ' b: ' + sideb + ' angle: ' + anglea)
        const result = ambiguousCase(sidea, sideb, anglea);
        setResult(result);
    }

    return (
        <div class="form-container">
            <h2>Ambiguous Case</h2>
            <label for="angle-a-ambiguous">Angle A:</label>
            <input type="text" id="angle-a-ambiguous" value={angle} onChange={(e) => setAngle(e.target.value)} />
            <label for="side-a-ambiguous">Side a:</label>
            <input type="text" id="side-a-ambiguous" value={a} onChange={(e) => setA(e.target.value)} />
            <label for="side-b-ambiguous">Side b:</label>
            <input type="text" id="side-b-ambiguous" value={b} onChange={(e) => setB(e.target.value)} />
            <label for="triangle-type-result">Triangle Type (Result):</label>
            <input type="text" id="triangle-type-result" value={result} disabled />
            <button id="calculate-ambiguous" onClick={handleAmbiguous}>Calculate</button>
        </div>
    );
}

export default AmbiguousCase;