import ChannelsList from "./components/ChannelsList.js"
import  mockData from './static/channels.json' assert {type: 'json'}
import visitCounter from "./components/visitsCounter.js"
const App = () => {
  console.log('Im working!')
  console.log('mockData is', mockData)
  visitCounter()
  return ChannelsList(mockData)
}

export default App()
