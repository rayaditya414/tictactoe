import React from 'react'

const StatusMessage = ({winner,current}) => {

    const noMovesLwft=current.board.every((ele)=>ele!=null);
  return (
    <h2>
    { winner && `Winner is ${winner} !!`}
    {!winner && !noMovesLwft &&`Next player is ${current.isNext?'X':'O'}`}
    {!winner && noMovesLwft && `Game Drawn!`}
    </h2>
  )
}

export default StatusMessage