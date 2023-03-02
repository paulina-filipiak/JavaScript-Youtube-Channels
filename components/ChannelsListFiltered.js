// import  mockData from '../static/channels.json' assert {type: 'json'}
import SingleChannelCard from './singleChannelCard.js'
import { View } from '../utils/View.js'
import  mockData from '../static/channels.json' assert {type: 'json'}
export const searchBar = document.querySelector(".filter__input")

export const filterData = (data) => { 
    searchBar.addEventListener("keyup", function (e) {
        const query = e.target.value
        console.log(query)
       const filteredData = data.filter((channel)=> channel.title.includes(query))
       console.log("filtered data is", filteredData)
    }
    )
    }

    // export const filteredData = () => { 
    //     searchBar.addEventListener("keyup", function (e) {
    //         const query = e.target.value
    //         console.log(query)
    //         channels = channels.filter((channel) => channel.title.icludes(query))
    //         return (View.innerHTML = `${channels.map((channel) => SingleChannelCard(channel)).join('')}`)}
    //     )
    //     }
