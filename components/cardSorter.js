export const CardSorter = (event) => {
	const checkboxId = event.target.id
	const cardsFromDOM = document.querySelectorAll(".wrapper__card")

	const sortByTitle = (cardOne, cardTwo) => {
		return cardOne
			.getAttribute("data-title")
			.localeCompare(cardTwo.getAttribute("data-title"))
	}

	const sortBySubscribers = (cardOne, cardTwo) => {
		return (
			cardTwo.getAttribute("data-subscribers") -
			cardOne.getAttribute("data-subscribers")
		)
	}

	const sortByVideos = (cardOne, cardTwo) => {
		return (
			cardTwo.getAttribute("data-videos") - cardOne.getAttribute("data-videos")
		)
	}

	const sortByViews = (cardOne, cardTwo) => {
		return (
			cardTwo.getAttribute("data-views") - cardOne.getAttribute("data-views")
		)
	}

	const sortDataByTitle = () => {
		const cardsArray = Array.from(cardsFromDOM) //method creates a new array from an existing one, or from an array-like object (which is what a NodeList is)
		let sorted = cardsArray.sort(sortByTitle)
		sorted.forEach((el) =>
			document.querySelector(".js-content").appendChild(el)
		)
	}

	const sortDataBySubscribers = () => {
		const cardsArray = Array.from(cardsFromDOM)
		let sorted = cardsArray.sort(sortBySubscribers)
		sorted.forEach((el) =>
			document.querySelector(".js-content").appendChild(el)
		)
	}

	const sortDataByVideos = () => {
		const cardsArray = Array.from(cardsFromDOM)
		let sorted = cardsArray.sort(sortByVideos)
		sorted.forEach((el) =>
			document.querySelector(".js-content").appendChild(el)
		)
	}

	const sortDataByViews = () => {
		const cardsArray = Array.from(cardsFromDOM)
		let sorted = cardsArray.sort(sortByViews)
		sorted.forEach((el) =>
			document.querySelector(".js-content").appendChild(el)
		)
	}

	switch (checkboxId) {
		case "sort-title":
			sortDataByTitle()
			break
		case "sort-subscribers":
			sortDataBySubscribers()
			break
		case "sort-videos":
			sortDataByVideos()
			break
		case "sort-views":
			sortDataByViews()
			break
		default:
	}
}
