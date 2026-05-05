import React from 'react'
import { Button } from 'antd'
import { SunOutlined, MoonOutlined } from '@ant-design/icons'

const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <Button
      type="text"
      shape="circle"
      icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />}
      onClick={onToggle}
  	/>
  )
}

export default ThemeToggle
