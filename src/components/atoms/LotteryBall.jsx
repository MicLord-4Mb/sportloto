import React from 'react'

const LotteryBall = ({number}) => {
  return (
    <div
      className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center text-2xl font-black shadow-inner border-4 border-blue-200">
      {number}
    </div>
  )
}

export default LotteryBall