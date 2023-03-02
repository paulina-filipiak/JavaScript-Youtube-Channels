const VisitCounter = () => {
	let visitCount = localStorage.getItem("page_view")
	visitCount = Number(visitCount) !== 0 ? Number(visitCount) + 1 : 1
	localStorage.setItem("page_view", visitCount)
}

export default VisitCounter

// const date = new Date()
// let day = date.getDate();
// let month = date.getMonth() + 1;
// let year = date.getFullYear();

// ${day}-${month}-${year}
