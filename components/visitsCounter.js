const visitCounter = () => {
  let visitCount = localStorage.getItem('page_view')
  visitCount = Number(visitCount) !== 0 ? Number(visitCount) + 1 : 1
  localStorage.setItem('page_view', visitCount)
}

export default visitCounter
