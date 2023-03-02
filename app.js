import ChannelsList from "./components/ChannelsList.js"
import  mockData from './static/channels.json' assert {type: 'json'}
import visitCounter from "./components/visitsCounter.js"


const App = () => {
  // console.log('Im working!')
  // console.log('mockData is', mockData)
  visitCounter()
  const searchBar = document.querySelector(".filter__input")
  let filteredData = mockData
  searchBar.addEventListener("keyup", function (e) {
    const query = e.target.value
    // console.log(query)
    filteredData = mockData.filter((channel)=> channel.title.includes(query))
    // console.log("filtered data is", filteredData)
    return ChannelsList(filteredData)
  })
  if(searchBar.value === ""){return ChannelsList(filteredData)}
}

export default App()
