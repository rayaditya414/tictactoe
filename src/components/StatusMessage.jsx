import React from 'react'

const StatusMessage = ({winner,current}) => {

    const noMovesLwft=current.board.every((ele)=>ele!=null);
  return (
    <div className='status-message'>
    { winner && (
    <>
    Winner is  {' '}
    <span className={winner==='X'?'text-green':'text-orange'}>
        {winner}
        </span>
    </>)}
    {!winner && 
    !noMovesLwft && 
    <>
      Next player is {' '}
      <span className={current.isNext?'text-green':'text-orange'}>
      {current.isNext?'X':'O'}
      </span>
     </>}
    {!winner && noMovesLwft && 
    <>
    <span className='text-green'>X</span> and <span className='text-orange'>O</span> tied.
    </>}
    </div>
  )
}

export default StatusMessage