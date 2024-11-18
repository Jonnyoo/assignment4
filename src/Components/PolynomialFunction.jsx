import React, { useState } from 'react';
import './PolynomialFunction.css';

function PolynomialFunction() {
    const [coefficients, setCoefficients] = useState('');
    const [exponents, setExponents] = useState('');
    const [xvalue, setXValue] = useState('');
    const [result, setResult] = useState('');
    const [polynomial, setPolynomial] = useState('');

    const polynomialEvaluation = (coefficients, exponents, xvalue) => {
        var result = 0;
        for (var i = 0; i < coefficients.length; i++) {
            result += parseFloat(coefficients[i]) * Math.pow(xvalue, parseFloat(exponents[i]));
        }
        return result;
    }
    
    const polynomialFunction = (coefficients, exponents) => {
        var result = '';
        for (var i = 0; i < coefficients.length; i++) {
            if (i == 0) {
                result += coefficients[i] + 'x^' + exponents[i];
            } else if (coefficients[i] < 0) {
                result += ' - ' + Math.abs(coefficients[i]) + 'x^' + exponents[i];
            } else {
                result += ' + ' + coefficients[i] + 'x^' + exponents[i];
            }
        }
        return result;
    }
    
    const handlePolynomial = () => {
        const splitCoefficients = coefficients.split(' ');
        const splitExponents = exponents.split(' ');
        const floatXValue = parseFloat(xvalue);
        const result = polynomialEvaluation(splitCoefficients, splitExponents, floatXValue);
        const polynomial = polynomialFunction(splitCoefficients, splitExponents);
        setPolynomial(polynomial);
        setResult(result);
    }

    return (
        <div className="form-container">
            <h2>Polynomial Function</h2>
            <label htmlFor="coefficients">Coefficients:</label>
            <input type="text" id="coefficients" value={coefficients} onChange={(e) => setCoefficients(e.target.value)}/>
            <label htmlFor="exponents">Exponents:</label>
            <input type="text" id="exponents" value={exponents} onChange={(e) => setExponents(e.target.value)}/>
            <label htmlFor="x-value">x Value:</label>
            <input type="text" id="x-value" value={xvalue} onChange={(e) => setXValue(e.target.value)}/>
            <label htmlFor="polynomial-function-result">Polynomial Function (Result):</label>
            <input type="text" id="polynomial-function-result" value={result} disabled />
            <label htmlFor="polynomial-evaluation-result">Polynomial Evaluation (Result):</label>
            <input type="text" id="polynomial-evaluation-result" value={polynomial} disabled />
            <button id="calculate-polynomial" onClick={handlePolynomial}>Calculate</button>
        </div>
    );
}

export default PolynomialFunction;