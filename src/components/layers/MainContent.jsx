import React, { useState } from 'react'

import { Button, Layout, Card, Space, Select, Typography, theme as antdTheme } from 'antd';
import { GlobalOutlined, SunOutlined, MoonOutlined, ShakeOutlined } from '@ant-design/icons';

import LotteryBall from '../atoms/LotteryBall';
import StatBox from '../atoms/StatBox';

const MainContent = ( { isDarkMode, toggleTheme } ) => {

  const { Title, Text } = Typography;
  const { Header, Content } = Layout;
  const { useToken } = antdTheme;
  const { token } = useToken();

  const [lang, setLang] = useState('en');

  return (
      <Layout className="min-h-screen transition-colors duration-300">  {/* style={{ background: '#f9fafb' }} */}
        <div className="max-w-3xl mx-auto w-full p-4 md:p-8">
          
          {/* Header */}
          <Card className="mb-8 shadow-sm rounded-3xl"> {/* style={{ background: '#e0f7fa' }} */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* <h1 className="text-3xl font-bold text-blue-600(155DFC) mb-5"> */}
              <Title level={3} style={{ color: `var(--ant-blue)` }} >
                <ShakeOutlined className="mr-2" />
                SPortLoto 5 of 36
              </Title>
              <Space>
                {/* <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 p-1 rounded-lg"> */}
                <div className="flex items-center gap-2 p-1 rounded-lg transition-colors" 
                style={{ backgroundColor: token.colorFillAlter }}>
                  <GlobalOutlined />
                  <Select value={lang} onChange={setLang} variant="borderless" style={{ width: 100 }}>
                    <Select.Option value="en">English</Select.Option>
                    <Select.Option value="ru">Русский</Select.Option>
                    <Select.Option value="he">עברית</Select.Option>
                  </Select>
                </div>
                <Button 
                  type="text" 
                  shape="circle" 
                  icon={isDarkMode ? <SunOutlined /> : <MoonOutlined />} 
                  onClick={toggleTheme} 
                />
              </Space>
            </div>
          </Card>

          {/* Main Content */}
          <Card className="mb-8 shadow-sm text-center rounded-3xl" >
            <Button type="primary">!!! Preeessss Meee !!!!</Button>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
              <LotteryBall number={1} />
              <LotteryBall number={2} />
              <LotteryBall number={3} />
              <LotteryBall number={4} />
              <LotteryBall number={5} />
            </div>
            <Card className="mb-8 shadow-sm text-center rounded-3xl" >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                <StatBox label="Min value" value={5} />
                <StatBox label="Max value" value={30} />
                <StatBox label="Average" value={18.4} />
                <StatBox label="Even count" value={3} color="green" />
                <StatBox label="Odd count" value={2} color="red" />
              </div>
            </Card>
          </Card>
          <Card className="mb-8 shadow-sm text-center rounded-3xl" >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">History (Last 5)</h2>
            <p className="text-gray-500">No history yet. Generate your first combination!</p>
          </Card>
        </div> 
      </Layout>
  )
}

export default MainContent