import ChannelsList from "./components/ChannelsList.js"
import  mockData from './static/channels.json' assert {type: 'json'}
const App = () => {
  console.log('Im working!')
  console.log('mockData is', mockData)
  return ChannelsList(mockData)
}

export default App()
