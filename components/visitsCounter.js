const VisitCounter = () => {
	let visitCount = localStorage.getItem("page_view")
	visitCount = Number(visitCount) !== 0 ? Number(visitCount) + 1 : 1
	localStorage.setItem("page_view", visitCount)

	const date = new Date()
	let day = date.getDate()
	let month = date.getMonth() + 1
	let year = date.getFullYear()

	let dateCount = localStorage.getItem("date_view")
	dateCount =
		Number(dateCount) !== ""
			? `${day}-${month}-${year}`
			: localStorage.getItem("date_view")
	localStorage.setItem("date_view", dateCount)
}

export default VisitCounter
