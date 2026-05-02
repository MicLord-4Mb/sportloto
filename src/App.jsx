import React, { useState, useEffect } from 'react';

import { Button, Layout, Card, ConfigProvider, theme as antdTheme, Space, Select } from 'antd';
import { GlobalOutlined, SunOutlined, MoonOutlined } from '@ant-design/icons';

import LotteryBall from './components/atoms/LotteryBall';
import StatBox from './components/atoms/StatBox';

export default function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  
  return (
    // TODO : find how to switch dark/light themes on antD
    // TODO : add dark mode toggle button
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff'
        },
      }}
    > 


      <Layout className="min-h-screen transition-colors duration-300">  {/* style={{ background: '#f9fafb' }} */}
        <div className="max-w-3xl mx-auto w-full p-4 md:p-8">
          
          {/* Header */}
          <Card className="mb-8 shadow-sm rounded-3xl"> {/* style={{ background: '#e0f7fa' }} */}
            <div className="flex flex-col md:flex-row items-center justify-between">
              <h1 className="text-3xl font-bold text-blue-600 mb-5">
                SPortLoto 5 of 36
              </h1>
              <Space>
                <GlobalOutlined />
                <Select value={lang} onChange={setLang} variant="borderless" style={{ width: 100 }}>
                  <Select.Option value="en">English</Select.Option>
                  <Select.Option value="ru">Русский</Select.Option>
                  <Select.Option value="he">עברית</Select.Option>
                </Select>
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
        </Card>
        <div>
          <LotteryBall />
          <LotteryBall />
          <LotteryBall />
          <LotteryBall />
          <LotteryBall />
        </div>
        <Card className="mb-8 shadow-sm text-center rounded-3xl" >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistics</h2>
          <StatBox label="Min value" value={5} />
          <StatBox label="Max value" value={30} />
          <StatBox label="Average" value={18.4} />
          <StatBox label="Even count" value={3} color="green" />
          <StatBox label="Odd count" value={2} color="red" />
        </Card>
        <Card className="mb-8 shadow-sm text-center rounded-3xl" >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">History (Last 5)</h2>
          <p className="text-gray-500">No history yet. Generate your first combination!</p>
        </Card>
        </div> 
      </Layout>
    </ConfigProvider>
  )
}
