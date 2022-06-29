import React,{useState} from "react";
import Board from "./components/Board" 
import { calculateWinner } from "./helpers";
import "./styles/root.scss"
const App=()=>{


  const [board,setBoard]=useState(Array(9).fill(null));
  const[isNext,setIsNext]=useState(false);

  const winner=calculateWinner(board);
  const message=winner
        ?`Winner is ${winner}`:
        `Next player is ${isNext?'X':'O'}`;



  const handleSqaureClick =(position)=>{
    if(board[position]!=null || winner) return;
    setBoard((prev)=>{
      return prev.map((square,pos)=>{
        if(pos==position) {
          return isNext?'X':'O';
        }
        return square;
      });
     
    })
    setIsNext((prev)=> !prev);
  }

  return(
  <div className="app">
  <h1>TIC TAC TOE!</h1>
  <h2>{message}</h2>
  <Board board={board} handleSqaureClick={handleSqaureClick}/>
</div>);
}

export default App;
