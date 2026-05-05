import React from 'react'
import { Card, Flex, Typography, Space } from 'antd'
import { ShakeOutlined } from '@ant-design/icons'
import LanguageSelect from '../atoms/LanguageSelect'
import ThemeToggle from '../atoms/ThemeToggle'

const { Title } = Typography

const AppHeader = ({ title, lang, onLangChange, isDarkMode, onToggleTheme }) => (
  <Card style={{ marginBottom: 24, borderRadius: 24 }}>
    <Flex align="center" justify="space-between" wrap gap="small">
      <Title level={3} style={{ margin: 0, color: 'var(--ant-blue)' }}>
        <ShakeOutlined style={{ marginRight: 8 }} />
        {title}
      </Title>
      <Space>
        <LanguageSelect value={lang} onChange={onLangChange} />
        <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
      </Space>
    </Flex>
  </Card>
)

export default AppHeader
