export const cardSorter = (e) => {
    const checkboxId =e.target.id
    const cardsFromDOM = document.querySelectorAll(".wrapper__card")
    
    const sortByTitle = (a,b) => {
      if (a.getAttribute("data-title") < b.getAttribute("data-title"))
      return -1;
      if (a.getAttribute("data-title") > b.getAttribute("data-title"))
      return 1;
      return 0
    }
    
    const sortBySubscribers = (a,b) => {
      if (Number(a.getAttribute("data-subscribers")) < Number(b.getAttribute("data-subscribers")))
      return 1;
      if (Number(a.getAttribute("data-subscribers")) > Number(b.getAttribute("data-subscribers")))
      return -1;
      return 0
    }
    
    const sortByVideos = (a,b) => {
      if (Number(a.getAttribute("data-videos")) < Number(b.getAttribute("data-videos")))
      return 1;
      if (Number(a.getAttribute("data-videos")) > Number(b.getAttribute("data-videos")))
      return -1;
      return 0
    }
    
    const sortByViews = (a,b) => {
      if (Number(a.getAttribute("data-views")) < Number(b.getAttribute("data-views")))
      return 1;
      if (Number(a.getAttribute("data-views")) > Number(b.getAttribute("data-views")))
      return -1;
      return 0
    }
    
    function sortDataByTitle() {
      const cardsArray = Array.from(cardsFromDOM);
      let sorted = cardsArray.sort(sortByTitle);
      sorted.forEach(e =>
          document.querySelector(".js-content").
              appendChild(e));     
    }
    
    function sortDataBySubscribers() {
      const cardsArray = Array.from(cardsFromDOM);
      let sorted = cardsArray.sort(sortBySubscribers);
      sorted.forEach(e =>
          document.querySelector(".js-content").
              appendChild(e));     
    }
    
    function sortDataByVideos() {
      const cardsArray = Array.from(cardsFromDOM);
      let sorted = cardsArray.sort(sortByVideos);
      sorted.forEach(e =>
          document.querySelector(".js-content").
              appendChild(e));     
    }
    
    function sortDataByViews() {
      const cardsArray = Array.from(cardsFromDOM);
      let sorted = cardsArray.sort(sortByViews);
      sorted.forEach(e =>
          document.querySelector(".js-content").
              appendChild(e));     
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
    }
    }