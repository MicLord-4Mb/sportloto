import React from 'react'
import { Card, Statistic } from 'antd'

const StatBox = ({ label, value, color }) => {
  return (
    <Card size="small" variant="outlined" style={{ flex: 1, minWidth: 100 }}>
      <Statistic
        title={label}
        value={value ?? '—'}
        valueStyle={{ color: color || 'inherit', fontSize: 20 }}
      />
    </Card>
  )
}

export default StatBox