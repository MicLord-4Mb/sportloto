import React from 'react'
import { Flex } from 'antd'
import StatBox from '../atoms/StatBox'

const StatisticsRow = ({ stats, curLang }) => (
  <Flex gap="small" wrap justify="center">
    <StatBox label={curLang.min}  value={stats?.min} />
    <StatBox label={curLang.max}  value={stats?.max} />
    <StatBox label={curLang.avg}  value={stats?.average} />
    <StatBox label={curLang.even} value={stats?.even} color="green" />
    <StatBox label={curLang.odd}  value={stats?.odd}  color="red" />
  </Flex>
)

export default StatisticsRow
