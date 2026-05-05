import React from 'react'
import { Card, Flex, Typography } from 'antd'
import { HistoryOutlined } from '@ant-design/icons'
import HistoryEntry from '../molecules/HistoryEntry'

const { Title, Text } = Typography

const HistorySection = ({ history, curLang }) => (
  <Card style={{ borderRadius: 24, textAlign: 'center' }}>
    <Title level={4} style={{ marginBottom: 16 }}>
      <HistoryOutlined style={{ marginRight: 8 }} />
      {curLang.historyTitle}
    </Title>

    {history.length === 0 ? (
      <Text type="secondary">{curLang.emptyHistory}</Text>
    ) : (
      <Flex vertical gap="small">
        {history.map(entry => (
          <HistoryEntry key={entry.id} entry={entry} curLang={curLang} />
        ))}
      </Flex>
    )}
  </Card>
)

export default HistorySection
