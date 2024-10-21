import React, { useState } from "react";
import "./App.css";

function App() {
	const [inputValue, setInputValue] = useState(0);
	const [fromUnit, setFromUnit] = useState("cm");
	const [toUnit, setToUnit] = useState("inch");
	const [result, setResult] = useState(0);

	const conversionFactors = {
		cm: {
			inch: 1 / 2.54,
			feet: 1 / 30.48,
			meter: 1 / 100,
			yard: 1 / 91.44,
			mile: 1 / 160934.4,
			kilometer: 1 / 100000,
		},
		inch: {
			cm: 2.54,
			feet: 1 / 12,
			meter: 0.0254,
			yard: 1 / 36,
			mile: 1 / 63360,
			kilometer: 0.0000254,
		},
		feet: {
			cm: 30.48,
			inch: 12,
			meter: 0.3048,
			yard: 1 / 3,
			mile: 1 / 5280,
			kilometer: 0.0003048,
		},
		meter: {
			cm: 100,
			inch: 39.3701,
			feet: 3.28084,
			yard: 1.09361,
			mile: 1 / 1609.34,
			kilometer: 0.001,
		},
		yard: {
			cm: 91.44,
			inch: 36,
			feet: 3,
			meter: 0.9144,
			mile: 1 / 1760,
			kilometer: 0.0009144,
		},
		mile: {
			cm: 160934.4,
			inch: 63360,
			feet: 5280,
			meter: 1609.34,
			yard: 1760,
			kilometer: 1.60934,
    	},
		kilometer: {
			cm: 1e5,
			inch: 39370.1,
			feet: 3280.84,
			meter: 1000,
			yard: 1093.61,
			mile: 0.621371,
		}
	};

	const convert = () => {
		const convertedResult =
			inputValue * conversionFactors[fromUnit][toUnit];
		setResult(convertedResult.toFixed(4));
	};

	return (
		<div className="container">
			<h1>Converter</h1>
			<input
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(parseFloat(e.target.value))}
				placeholder="Enter value"
				className="input-field"
			/>
			<select
				className="unit-selectors"
				value={fromUnit}
				onChange={(e) => setFromUnit(e.target.value)}
			>
				{Object.keys(conversionFactors).map((unit) => (
					<option key={unit} value={unit}>
						{unit}
					</option>
				))}
			</select>
			<select
				className="unit-selectors"
				value={toUnit}
				onChange={(e) => setToUnit(e.target.value)}
			>
				{Object.keys(conversionFactors[fromUnit]).map((unit) => (
					<option key={unit} value={unit}>
						{unit}
					</option>
				))}
			</select>
			<p id="result">{result}</p>
			<button onClick={convert} className="convert-button">
				Convert
			</button>
		</div>
	);
}

export default App;