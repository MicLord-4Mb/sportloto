import {Card, Typography} from 'antd'
import React from 'react'

const { Title, Text } = Typography;

const StatBox = ({ label, value, color = 'blue' }) => {
  return (
    <Card size='small' bordered={false} className="shadow-sm bg-gray-50 dark:bg-gray-800">
      <Text type="secondary" className="text-xs uppercase font-semibold block mb-1">
        {label}
      </Text>
      <Title level={4} style={{ margin: 0, color: `var(--ant-${color})` }}>
        {value}
      </Title>
    </Card>
  )
}

export default StatBox