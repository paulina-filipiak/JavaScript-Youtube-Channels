import ChannelsList from "./components/ChannelsList.js"
import  mockData from './static/channels.json' assert {type: 'json'}
import visitCounter from "./components/visitsCounter.js"
import {filterData} from "./components/ChannelsListFiltered.js"

const App = () => {
  const searchBar = document.querySelector(".filter__input")
  console.log('Im working!')
  console.log('mockData is', mockData)
  visitCounter()
  filterData(mockData)
  // if(searchBar.value.length !== 0){
  //   mockData.filter((channel) => channel.title.includes(query))
  //       return (View.innerHTML = `${channels.map((channel) => SingleChannelCard(channel)).join('')}`)}
  
  return ChannelsList(mockData)
}

export default App()
