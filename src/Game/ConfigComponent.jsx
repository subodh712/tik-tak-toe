import { useState } from "react";
import AppButton from "../Components/AppButton";
import "./Config.css"

const ConfigGame = ({ setBoardSize }) => {

    const [boardSize, setBoardSizeState] = useState(0);
    return <div>
        <h3>Enter the Board Size:&nbsp;&nbsp;
            <input className="board-size-input" type="number" min={3} max={8} value={boardSize} onChange={(event) => { setBoardSizeState(event.target.valueAsNumber) }} /></h3>
        <div><AppButton onClick={() => setBoardSize(boardSize)} text="Save" /></div>
    </div>
}

export default ConfigGame