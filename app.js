import ChannelsList from "./components/ChannelsList.js"
import mockData from "./static/channels.json" assert { type: "json" }
import VisitCounter from "./components/VisitsCounter.js"
import { CardSorter } from "./components/CardSorter.js"
// import { fetchData } from "./utils/fetchData.js"

const App = () => {
	VisitCounter()
	let data = mockData
	const searchBar = document.querySelector(".filter__input")
	const checkboxes = document.querySelectorAll(".choice--radio")
	const clearButton = document.querySelector(".button")
	const form = document.querySelector("form")
	let filteredData = data

	clearButton.addEventListener("click", () => {
		form.reset()
		searchBar.value = ""
		return ChannelsList(data)
	})

	checkboxes.forEach((checkbox) =>
		checkbox.addEventListener("click", CardSorter)
	)

	searchBar.addEventListener("keyup", function (e) {
		const query = e.target.value
		console.log(searchBar.value)
		filteredData = data.filter((channel) =>
			channel.title.toLowerCase().includes(query.toLowerCase())
		)
		return ChannelsList(filteredData)
	})
	if (searchBar.value === "") {
		return ChannelsList(data)
	}
}

export default App()
