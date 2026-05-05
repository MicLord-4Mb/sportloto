import React from 'react'
import { Avatar } from 'antd'

const SIZE_MAP = {
  large: { dimension: 60, fontSize: 20 },
  small: { dimension: 36, fontSize: 13 },
}

const LotteryBall = ({ number, size = 'large', animated = false, animationDelay = 0 }) => {
  const { dimension, fontSize } = SIZE_MAP[size] ?? SIZE_MAP.large

  return (
    <Avatar
      size={dimension}
      style={{
        background: 'linear-gradient(135deg, #1677ff 0%, #003eb3 100%)',
        fontSize,
        fontWeight: 900,
        flexShrink: 0,
        boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.25), 0 4px 12px rgba(22,119,255,0.35)',
        border: '3px solid rgba(255,255,255,0.25)',
        animation: animated
          ? `bounce-short 0.5s ease-in-out 1 ${animationDelay}s both`
          : 'none',
      }}
    >
      {number}
    </Avatar>
  )
}

export default LotteryBall
