import React from 'react'
import { Select, theme as antdTheme } from 'antd'
import { GlobalOutlined } from '@ant-design/icons'

const { useToken } = antdTheme

const LanguageSelect = ({ value, onChange }) => {
  const { token } = useToken()

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: '4px 10px',
        borderRadius: 8,
        backgroundColor: token.colorFillAlter,
      }}
    >
      <GlobalOutlined style={{ color: token.colorTextSecondary }} />
      <Select value={value} onChange={onChange} variant="borderless" style={{ width: 100 }}>
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="ru">Русский</Select.Option>
        <Select.Option value="he">עברית</Select.Option>
      </Select>
    </div>
  )
}

export default LanguageSelect
