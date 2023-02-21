import React, { useState } from "react";
import "./tik-tak-toe.css"

const TikTakToe = () => {

    const [boardSize] = useState(4);
    const [playerTurn, setPlayerTurn] = useState("x");
    const [gameOver, setGameOver] = useState(false);

    const initialiseBoardData = () => {
        let initialData = [];
        for (let i = 0; i < boardSize; i++) {
            initialData.push(Array.from(Array(boardSize).fill(null)))
        }
        return initialData
    }

    const [boadData, setBoardData] = useState(initialiseBoardData())

    const resetGame = () => {
        setBoardData(initialiseBoardData());
        setGameOver(false);
        setPlayerTurn("x");
    }

    const generateBoard = () => {
        let boardRows = boadData.map((row, i) => {
            return <div className="board-row" key={i}>{
                row.map((col, j) => {
                    return <div className="cell" key={j} onClick={() => { cellClick(i, j) }}>{col}</div>
                })
            }</div>
        })
        return boardRows;
    }
    const cellClick = (row, col) => {
        if (!gameOver && !boadData[row][col]) {
            boadData[row][col] = playerTurn;
            checkForGameOver(row, col);
            setPlayerTurn(playerTurn === "x" ? "o" : "x")
        }
    }
    const checkForGameOver = (row, col) => {
        let d1 = true;
        let d2 = true;
        let rowCheck = true;
        let colCheck = true;
        let allFilled = true;

        //check for diagonal 1
        if (row === col) {
            for (let i = 0; i < boardSize; i++) {
                if (boadData[i][i] !== playerTurn) {
                    d1 = false;
                }
            }
        } else {
            d1 = false
        }

        //check for diagonal 2
        if (row + col === boardSize - 1) {
            for (let i = 0; i < boardSize; i++) {
                if (boadData[i][boardSize - i - 1] !== playerTurn) {
                    d2 = false;
                }
            }
        } else {
            d2 = false
        }

        //check for row 
        for (let i = 0; i < boardSize; i++) {
            if (boadData[row][i] !== playerTurn) {
                rowCheck = false;
            }
        }

        //check for col
        for (let i = 0; i < boardSize; i++) {
            if (boadData[i][col] !== playerTurn) {
                colCheck = false;
            }
        }

        //check for all filled
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (boadData[i][j] !== playerTurn) {
                    allFilled = false;
                }
            }
        }

        setGameOver(d1 || d2 || rowCheck || colCheck || allFilled);
    }

    return <section>
        <div className="game-board">
            {generateBoard()}
            <h3>Game Over: {gameOver ? "Yes" : "No"}</h3>
            <button onClick={resetGame}>Reset Game</button>
        </div>
    </section>
};
export default TikTakToe;