import { Button, Layout, Card } from 'antd';
import './App.css'
import LotteryBall from './components/atoms/LotteryBall';
import StatBox from './components/atoms/StatBox';



function App() {
  

  return (
    <Layout className="min-h-screen transition-colors duration-300" style={{ background: '#f9fafb' }}>
      {/* Header */}
      <Card className="mb-8 shadow-sm rounded-2xl" bodyStyle={{ padding: '16px' }}>
        <h1 className="text-3xl font-bold text-blue-600 mb-5">
          SPortLoto 5 of 36
        </h1>
      </Card>

      {/* Main Content */}
      <Card className="mb-8 shadow-lg text-center rounded-3xl" style={{ width: 300}}>
       <Button type="primary">!!! Preeessss Meee !!!!</Button>
      </Card>
      <div>
        <LotteryBall />
        <LotteryBall />
        <LotteryBall />
        <LotteryBall />
        <LotteryBall />
      </div>
      <Card className="mb-8 shadow-lg text-center rounded-3xl" style={{ width: 300}}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistics</h2>
        <StatBox label="Min value" value={5} />
        <StatBox label="Max value" value={30} />
        <StatBox label="Average" value={18.4} />
        <StatBox label="Even count" value={3} color="green" />
        <StatBox label="Odd count" value={2} color="red" />
      </Card>
      <Card className="mb-8 shadow-lg text-center rounded-3xl" style={{ width: 300}}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">History (Last 5)</h2>
        <p className="text-gray-500">No history yet. Generate your first combination!</p>
      </Card> 
    </Layout>
  )
}

export default App
