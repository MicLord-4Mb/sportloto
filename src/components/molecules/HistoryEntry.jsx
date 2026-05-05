import React from 'react'
import { Card, Flex, Typography } from 'antd'
import NumbersRow from './NumbersRow'

const { Text } = Typography

const MiniStat = ({ label, value, color }) => (
  <Text style={{ fontSize: 12, color: color || 'inherit' }}>
    {label}:&nbsp;<strong>{value}</strong>
  </Text>
)

const HistoryEntry = ({ entry, curLang }) => (
  <Card size="small" variant="outlined" style={{ borderRadius: 12 }}>
    <Flex align="center" justify="space-between" gap="middle" wrap>
      <NumbersRow numbers={entry.numbers} entryId={entry.id} size="small" />

      <Flex gap={10} wrap>
        <MiniStat label={curLang.min}  value={entry.stats.min} />
        <MiniStat label={curLang.max}  value={entry.stats.max} />
        <MiniStat label={curLang.avg}  value={entry.stats.average} />
        <MiniStat label={curLang.even} value={entry.stats.even} color="green" />
        <MiniStat label={curLang.odd}  value={entry.stats.odd}  color="red" />
      </Flex>
    </Flex>
  </Card>
)

export default HistoryEntry
