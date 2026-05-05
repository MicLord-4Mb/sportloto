import React from 'react'
import { Card, Button, Flex, Typography, Divider } from 'antd'
import { ShakeOutlined, BarChartOutlined } from '@ant-design/icons'
import NumbersRow from '../molecules/NumbersRow'
import StatisticsRow from '../molecules/StatisticsRow'

const { Title } = Typography

const GeneratorSection = ({ curLang, currentResult, isAnimating, onGenerate }) => (
  <Card style={{ marginBottom: 24, borderRadius: 24, textAlign: 'center' }}>
    <Flex justify="center">
      <Button
        type="primary"
        size="large"
        icon={<ShakeOutlined spin={isAnimating} />}
        onClick={onGenerate}
        loading={isAnimating}
      >
        {curLang.generateBtn}
      </Button>
    </Flex>

    {currentResult && (
      <>
        <Divider />
        <NumbersRow
          numbers={currentResult.numbers}
          entryId={currentResult.id}
          size="large"
          animated={isAnimating}
        />
        <Divider />
        <Title level={5} style={{ marginBottom: 16 }}>
          <BarChartOutlined style={{ marginRight: 8, color: 'var(--ant-blue)' }} />
          {curLang.statsTitle}
        </Title>
        <StatisticsRow stats={currentResult.stats} curLang={curLang} />
      </>
    )}
  </Card>
)

export default GeneratorSection
