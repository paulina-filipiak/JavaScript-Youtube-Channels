// import ChannelsList from "./ChannelsList.js"

// export const CardSorter = (event) => {
// 	let filteredData = data
// 	const checkboxId = event.target.id

// 	// const sortByTitle = () => {
// 	// 	filteredData = data.sort((channelOne, channelTwo) => {
// 	// 		return channelOne.title.localeCompare(channelTwo.title)
// 	// 	})
// 	// 	// console.log(filteredData)

// 	// }
// 	const cleanNumber = (number) => {
// 		return number.replaceAll(",", "").replaceAll(".", "").replaceAll(" ", "")
// 	}

// 	const sortById = (id, data) => {
// 		filteredData = data.sort((channelOne, channelTwo) => {
// 			const channelOneTitle = channelOne.title
// 			const channelOneSubscribers = cleanNumber(
// 				channelOne.statistics.subscriberCount
// 			)
// 			const channelOneVideos = cleanNumber(channelOne.statistics.videoCount)
// 			const channelOneViews = cleanNumber(channelOne.statistics.viewCount)
// 			const channelTwoTitle = channelTwo.title
// 			const channelTwoSubscribers = cleanNumber(
// 				channelTwo.statistics.subscriberCount
// 			)
// 			const channelTwoVideos = cleanNumber(channelTwo.statistics.videoCount)
// 			const channelTwoViews = cleanNumber(channelTwo.statistics.viewCount)

// 			switch (id) {
// 				case "sort-title":
// 					channelOneTitle.localeCompare(channelTwoTitle)
// 					break
// 				case "sort-subscribers":
// 					channelTwoSubscribers - channelOneSubscribers
// 					break
// 				case "sort-videos":
// 					channelTwoVideos - channelOneVideos
// 					break
// 				case "sort-views":
// 					channelTwoViews - channelOneViews
// 					break
// 				default:
// 			}
// 		})
// 	}
// 	sortById(checkboxId, data)
// 	return ChannelsList(filteredData)
// }
