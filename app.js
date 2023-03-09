import ChannelsList from "./components/ChannelsList.js"
import mockData from "./static/channels.json" assert { type: "json" }
import VisitCounter from "./components/VisitsCounter.js"
import {
	sortBySubs,
	sortByTitle,
	sortByVideos,
	sortByViews,
} from "./components/CardSorterThree.js"

const App = () => {
	VisitCounter()
	let data = mockData
	let filteredData = JSON.parse(JSON.stringify(data))
	const form = document.querySelector("form")
	const searchBar = document.querySelector(".filter__input")
	const clearButton = document.querySelector(".button__clear")
	const reverseButton = document.querySelector(".button__ascending")
	const checkboxes = document.querySelectorAll(".choice--radio")
	const checkboxTitle = document.querySelector("#sort-title")
	const checkboxSubscribers = checkboxes[1]
	const checkboxVideos = checkboxes[2]
	const checkboxViews = checkboxes[3]

	checkboxTitle.addEventListener("click", () => {
		sortByTitle(filteredData)
	})

	checkboxSubscribers.addEventListener("click", () => {
		sortBySubs(filteredData)
	})

	checkboxVideos.addEventListener("click", () => {
		sortByVideos(filteredData)
	})

	checkboxViews.addEventListener("click", () => {
		sortByViews(filteredData)
	})

	reverseButton.addEventListener("click", () => {
		filteredData.reverse()
		return ChannelsList(filteredData)
	})

	clearButton.addEventListener("click", () => {
		form.reset()
		searchBar.value = ""
		filteredData = JSON.parse(JSON.stringify(data))
		console.log(" filteredData from clearButton", filteredData)
		return ChannelsList(data)
	})

	searchBar.addEventListener("keyup", function (e) {
		const query = e.target.value
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
