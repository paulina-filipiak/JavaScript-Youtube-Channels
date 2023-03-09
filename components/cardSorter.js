export const CardSorter = (event) => {
	const checkboxId = event.target.id
	const cardsFromDOM = document.querySelectorAll(".wrapper__card")

	const sortByTitle = (a, b) => {
		if (a.getAttribute("data-title") < b.getAttribute("data-title")) return -1
		if (a.getAttribute("data-title") > b.getAttribute("data-title")) return 1
		return 0
	}

	const sortBySubscribers = (a, b) => {
		if (
			Number(a.getAttribute("data-subscribers")) <
			Number(b.getAttribute("data-subscribers"))
		)
			return 1
		if (
			Number(a.getAttribute("data-subscribers")) >
			Number(b.getAttribute("data-subscribers"))
		)
			return -1
		return 0
	}

	const sortByVideos = (a, b) => {
		if (
			Number(a.getAttribute("data-videos")) <
			Number(b.getAttribute("data-videos"))
		)
			return 1
		if (
			Number(a.getAttribute("data-videos")) >
			Number(b.getAttribute("data-videos"))
		)
			return -1
		return 0
	}

	const sortByViews = (a, b) => {
		if (
			Number(a.getAttribute("data-views")) <
			Number(b.getAttribute("data-views"))
		)
			return 1
		if (
			Number(a.getAttribute("data-views")) >
			Number(b.getAttribute("data-views"))
		)
			return -1
		return 0
	}

	const sortDataByTitle = () => {
		const cardsArray = Array.from(cardsFromDOM)
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
