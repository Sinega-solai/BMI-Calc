
import React, { useState } from "react";
import "./Bmi.css";

function Bmi() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [bmists, setBmists] = useState("");
    const [errormsg, seterrormsg] = useState("");

    const handleCalc = () => {
        const isValidHeight = /^\d+$/.test(height);
        const isValidWeight = /^\d+$/.test(weight);
        if (isValidHeight && isValidWeight) {
            const heightInMeters = height / 100;
            const bmiValue = weight / (heightInMeters * heightInMeters);
            setBmi(bmiValue.toFixed(2));
            if (bmiValue < 18.5) {
                setBmists("UNDER WEIGHT");
            } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
                setBmists("NORMAL WEIGHT");
            } else if (bmiValue >= 25 && bmiValue < 29.9) {
                setBmists("OVER WEIGHT");
            } else {
                setBmists("OBESES");
            }
            seterrormsg("")
        } else {
            setBmi(null);
            setBmists("");
            seterrormsg("please enter the numeric value")
        }
    };
    function clrmsg() {
        setWeight("");
        setHeight("");
        setBmi(null);
        setBmists("");
    }

    return (
        <>
            <div className="Bmi-cal">
                <div className="box">
                    <img src="weight.jpeg" alt="" />
                </div>
                <div className="data">
                    <h1>BMI CALCULATOR</h1>
                    {errormsg && <p className="error">{errormsg}</p>}
                    <div className="input-contain">
                        <label htmlFor="height">HEIGHT (CM)</label>
                        <input
                            type="text"
                            id="height"
                            value={height}
                            onChange={(e) => setHeight(e.target.value)}
                        />
                    </div>
                    <div className="input-contain">
                        <label htmlFor="weight">WEIGHT (KG)</label>
                        <input
                            type="text"
                            id="weight"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <button onClick={handleCalc}>CALCULATE BMI</button>
                    <button onClick={clrmsg}>CLEAR</button>
                    {bmi !== null && (
                        <div className="result">
                            <p>YOUR BMI IS {bmi}</p>
                            <p>STATUS: {bmists}</p>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Bmi;
