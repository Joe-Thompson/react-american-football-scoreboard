import React, { useState } from "react";
import "./App.css";

const BottomRow = () => {
  const [down, updateDown] = useState(1);
  const [togo, updateTogo] = useState(10);
  const [ballOn, updateBallOn] = useState(25);
  const [quarter, updateQuarter] = useState(1);

  return (
    <div  className="bottomRow">
      <div className="down">
        <h3 id = "title" className="down__title">Down</h3>
        <div className="down__value">{down}</div>
        <button onClick = { () => updateDown(down + 1)} className="scoreboardKeeper">Increase</button>
        <button onClick = { () => updateDown(1)} className="scoreboardKeeper">Reset</button>
      </div>
      <div className="toGo">
        <h3 id = "title" className="toGo__title">To Go</h3>
        <div className="toGo__value">{togo}</div>
        <button onClick = { () => updateTogo(togo + 1)} className="scoreboardKeeper">Gain</button>
        <button onClick = { () => updateTogo(togo - 1)} className="scoreboardKeeper">Lose</button>
        <button onClick = { () => updateTogo(10)} className="scoreboardKeeper">Reset</button>
      </div>
      <div className="ballOn">
        <h3 id = "title" className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
        <button onClick = { () => updateBallOn(ballOn + 1)} className="scoreboardKeeper">Gain</button>
        <button onClick = { () => updateBallOn(ballOn - 1)} className="scoreboardKeeper">Lose</button>
        <button onClick = { () => updateBallOn(25)} className="scoreboardKeeper">Reset</button>
      </div>
      <div className="quarter">
        <h3 id = "title" className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button onClick = { () => updateQuarter(quarter +1)} className="scoreboardKeeper">Increase</button>
        <button onClick = { () => updateQuarter(1)} className="scoreboardKeeper">Reset</button>
      </div>
    </div>
  );
};

export default BottomRow;
