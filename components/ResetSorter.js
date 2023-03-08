import ChannelsList from "./ChannelsList.js"
import mockData from "../static/channels.json" assert { type: "json" }
const form = document.querySelector("form")
const searchBar = document.querySelector(".filter__input")
let data = mockData

export const ResetSorter = () => {
	form.reset()
	searchBar.value = ""
	return ChannelsList(data)
}
