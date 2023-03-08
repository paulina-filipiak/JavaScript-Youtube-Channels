const VisitCounter = () => {
	let visitCount = localStorage.getItem("page_views")
	visitCount = Number(visitCount) !== 0 ? Number(visitCount) + 1 : 1
	localStorage.setItem("page_views", visitCount)

	const presentDate = new Date()
	const options = {
		year: "numeric",
		month: "short",
		day: "numeric",
	}

	const lastVisitDate = localStorage.getItem("present_visit_date")
	const date = `${presentDate.toLocaleDateString("pl", options)}`

	localStorage.setItem("present_visit_date", date)
	if (lastVisitDate) {
		localStorage.setItem("present_visit_date", date)
		localStorage.setItem("last_visit_date", lastVisitDate)
	}
}

export default VisitCounter
