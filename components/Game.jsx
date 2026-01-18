import React from "react";
import "./style.css";
import { useEffect, useState } from "react";

const Game = () => {

    const [squares,setSquares] = useState(Array(9).fill(''));
    const [isXTurn,setXTurn] = useState(true);
    const [record,setRecord] = useState('');


    function Square({value,onClick}){

        return <button onClick={onClick} className="game-square">{value}</button>
    }

    function winnerIS(squares){
        const winningPatterns = [
        //Horizontal Rows:
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical Columns:
        [2, 5, 8],
        [0, 3, 6],
        [1, 4, 7],
        // Diagonals:
        [0, 4, 8],
        [2, 4, 6]
        ]
        
        for(let i=0;i<winningPatterns.length;i++){
            const [a,b,c] = winningPatterns[i];

            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    function handleClick(getCurrentSquare){
        let copySquares = [...squares];
        if (winnerIS(copySquares) || copySquares[getCurrentSquare]) return;
        copySquares[getCurrentSquare] = isXTurn? 'X' : 'O';
        setXTurn(!isXTurn);
        setSquares(copySquares);
    }

    useEffect(()=>{
        if(!winnerIS(squares) && squares.every(item => item !== '')){
            setRecord('This is a Draw!!!');
        }else if(winnerIS(squares)){
            setRecord(`Winner is ${winnerIS(squares)}.Restart the game to continue`);
        }else{
            setRecord(`Next player is ${isXTurn ? "X" : "O"}`);
        }
    },[squares,isXTurn])

    function handleRestart() {
    setXTurn(true);
    setSquares(Array(9).fill(''));
  }

  return (
    <div className="game-container">

      <div className="row">
        <Square value={squares[0]} onClick={()=>handleClick(0)}/>
        <Square value={squares[1]} onClick={()=>handleClick(1)}/>
        <Square value={squares[2]} onClick={()=>handleClick(2)}/>
      </div>

      <div className="row">
        <Square value={squares[3]} onClick={()=>handleClick(3)}/>
        <Square value={squares[4]} onClick={()=>handleClick(4)}/>
        <Square value={squares[5]} onClick={()=>handleClick(5)}/>
      </div>

      <div className="row">
        <Square value={squares[6]} onClick={()=>handleClick(6)}/>
        <Square value={squares[7]} onClick={()=>handleClick(7)}/>
        <Square value={squares[8]} onClick={()=>handleClick(8)}/>
      </div>

      <h1>{record}</h1>
      <button onClick={handleRestart} className="reset-btn">Reset</button>

    </div>
  );
};

export default Game;
