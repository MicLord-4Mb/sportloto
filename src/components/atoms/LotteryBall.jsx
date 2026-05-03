import React from 'react'
import { Avatar } from 'antd'

const LotteryBall = ({ number }) => {
  return (
    <Avatar
      size={60}
      style={{
        background: 'linear-gradient(135deg, #1677ff 0%, #003eb3 100%)',
        fontSize: 20,
        fontWeight: 900,
        flexShrink: 0,
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.25), 0 4px 12px rgba(22,119,255,0.35)',
        border: '3px solid rgba(255,255,255,0.25)',
      }}
    >
      {number}
    </Avatar>
  )
}

export default LotteryBall