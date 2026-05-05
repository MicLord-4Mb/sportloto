import React from 'react'
import { Flex } from 'antd'
import LotteryBall from '../atoms/LotteryBall'

const NumbersRow = ({ numbers, entryId, size = 'large', animated = false }) => (
  <Flex align="center" justify="center" gap="small" wrap>
    {numbers.map((num, index) => (
      <LotteryBall
        key={`${entryId}-${index}`}
        number={num}
        size={size}
        animated={animated}
        animationDelay={index * 0.1}
      />
    ))}
  </Flex>
)

export default NumbersRow
