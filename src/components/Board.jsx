import React,{useState} from 'react'
import Sqaure from './Sqaure'

const board = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const[isNext,setIsNext]=useState(false);


  
  const handleSqaureClick =(position)=>{
    if(board[position]!=null) return;
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

  const renderSquare=(position)=>{

    return (
      <Sqaure 
      value={board[position]}
      onClick={ ()=> handleSqaureClick(position)}
      />
    );
  };
  return (
    <div className='board'>
        <div className='board-row'>
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className='board-row'>
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className='board-row'>
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>

    </div>
  );
};

export default board