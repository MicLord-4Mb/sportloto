import React, { useCallback, useState } from 'react'

import { Button, Layout, Card, Space, Select, Typography, theme as antdTheme, Flex } from 'antd';
import { GlobalOutlined, SunOutlined, MoonOutlined, ShakeOutlined, BarChartOutlined, HistoryOutlined } from '@ant-design/icons';

import { getStatistic } from '../../utils/math';
import { translations } from '../../locales/translations';
import LotteryBall from '../atoms/LotteryBall';
import StatBox from '../atoms/StatBox';

const MainContent = ( { isDarkMode, toggleTheme } ) => {

  const { Title, Text } = Typography;
  const { Header, Content } = Layout;
  const { useToken } = antdTheme;
  const { token } = useToken();
 
  const [currentResult, setCurrentResult] = useState(null);
  const [history, setHistory] = useState([]);
  const [lang, setLang] = useState('en');
  const [isAnimating, setIsAnimating] = useState(false);

  // todo: add direction: rtl for hebrew language, and maybe some specific styles for it (like different font)
  const t = translations[lang];
  const isRtl = lang === 'he';

  const handleGenerator = useCallback(() => {
    setIsAnimating(true);

    setTimeout(() => {
      // Logic to generate lottery numbers and update statistics

      // Example: Generate 5 random numbers between 1 and 36
      // const numberArray = Array.from({ length: 36 }, (_, i) => i + 1);
      // const shuffled = numberArray.sort(() => 0.5 - Math.random());
      // const selectedNumbers = shuffled.slice(0, 5).sort((a, b) => b - a);

      const numberArray = Array.from({ length: 36 }, (_, i) => i + 1);
      // simple shuffle
      for (let i = numberArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numberArray[i], numberArray[j]] = [numberArray[j], numberArray[i]];
      }
      // take first 5 and sort in descending order
      const selectedNumbers = numberArray.slice(0, 5).sort((a, b) => b - a);

      console.log('Generated numbers:', selectedNumbers);

      const stats = getStatistic(selectedNumbers);
      console.log('Statistics:', stats);

      // TODO: make history of generated numbers and statistics, and display it in the history section
      // Example of new entry for history
      const newEntry = { id: Date.now(), numbers: selectedNumbers, stats };

      setCurrentResult(newEntry);
      setHistory(prev => [newEntry, ...prev].slice(0, 5)); // keep only last 5 entries in history
      
      setIsAnimating(false);
    }, 400); // Simulate animation duration
  }, []);
  
  return (
      <Layout className="min-h-screen transition-colors duration-300">  {/* style={{ background: '#f9fafb' }} */}
        <div className="max-w-3xl mx-auto w-full p-4 md:p-8">
          
          {/* Header */}
          <Card className="mb-8 shadow-sm rounded-3xl"> 
            <div className="flex flex-col md:flex-row items-center justify-between">
              <Title level={3} style={{ color: `var(--ant-blue)` }} >
                <ShakeOutlined className="mr-2" />
                {t.title} {/*SportLoto 5 of 36*/}
              </Title>
              <Space>
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
            <Flex align="center" justify="center" gap='small' >
              <Button
                type="primary"
                size = "large"
                icon={<ShakeOutlined spin={isAnimating} />}
                onClick={handleGenerator}
                loading={isAnimating}
              >
                {t.generateBtn}
              </Button>
            </Flex>

            {currentResult && (
              <div className="mt-6">
                <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
                  {currentResult.numbers.map((num, index) => (
                    <LotteryBall key={`${currentResult.id}-${index}`} number={num} style={{ animationDelay: `${index * 0.1}s` }} />
                  ))}
                </div>
              </div>
            )}

            <Card className="mt-8 mb-8 shadow-sm text-center rounded-3xl" >
              <Title level={4} >
                <BarChartOutlined style={{ color:  `var(--ant-blue)` }} />{t.statsTitle}
              </Title>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
                <StatBox label={t.min} value={currentResult?.stats.min} />
                <StatBox label={t.max} value={currentResult?.stats.max} />
                <StatBox label={t.avg} value={currentResult?.stats.average} />
                <StatBox label={t.even} value={currentResult?.stats.even} color="green" />
                <StatBox label={t.odd} value={currentResult?.stats.odd} color="red" />
              </div>
            </Card>
          </Card>

          {/* History Section */}
          <Card style={{ marginBottom: 0, textAlign: 'center' }}>
            <Title level={4} style={{ marginBottom: 16 }}>
              <HistoryOutlined style={{ marginRight: 8 }} />
              {t.historyTitle}
            </Title>

            {history.length === 0 ? (
              <Text type="secondary">
                {t.emptyHistory}
              </Text>
            ) : (
              <Flex vertical gap="small">
                {history.map((entry) => (
                  <Card
                    key={entry.id}
                    size="small"
                    variant="outlined"
                    style={{ borderRadius: 12 }}
                  >
                    <Flex align="center" justify="center" gap="small" wrap>
                      {entry.numbers.map((num, idx) => (
                        <LotteryBall key={idx} number={num} />
                      ))}
                    </Flex>
                  </Card>
                ))}
              </Flex>
            )}
          </Card>

          <style dangerouslySetInnerHTML={{__html: `
            @keyframes bounce-short {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-15px); }

            // .animate-bounce-short {
            //   animation: bounce-short 0.5s ease-in-out 1;
            }
          `}} />
        </div> 
      </Layout>
  )
}

export default MainContent