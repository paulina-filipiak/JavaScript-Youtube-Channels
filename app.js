import ChannelsList from "./components/ChannelsList.js"
import  mockData from './static/channels.json' assert {type: 'json'}
import visitCounter from "./components/visitsCounter.js"
import { cardSorter } from "./components/cardSorter.js"


const App = () => {
  visitCounter()
  const searchBar = document.querySelector(".filter__input")
  const checkboxes = document.querySelectorAll(".choice--radio")
  let filteredData = mockData

  checkboxes.forEach((checkbox) => checkbox.addEventListener("click", cardSorter))
  
  searchBar.addEventListener("keyup", function (e) {
    const query = e.target.value
    filteredData = data.filter((channel)=> channel.title.toLowerCase().includes(query.toLowerCase()))
    return ChannelsList(filteredData)
  })
  if(searchBar.value === ""){return ChannelsList(filteredData)}
}

export default App()
