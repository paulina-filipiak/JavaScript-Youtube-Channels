import ChannelsList from "./ChannelsList.js"

const cleanNumber = (number) => {
	return number.replaceAll(",", "").replaceAll(".", "").replaceAll(" ", "")
}

export const sortByTitle = (data) => {
	let filteredData = data.sort((channelOne, channelTwo) => {
		const channelOneTitle = channelOne.title
		const channelTwoTitle = channelTwo.title
		return channelOneTitle.localeCompare(channelTwoTitle)
	})
	console.log(" filteredData from checkboxTitleHandler", filteredData)
	return ChannelsList(filteredData)
}

export const sortBySubs = (data) => {
	let filteredData = data.sort((channelOne, channelTwo) => {
		const channelOneSubscribers = cleanNumber(
			channelOne.statistics.subscriberCount
		)
		const channelTwoSubscribers = cleanNumber(
			channelTwo.statistics.subscriberCount
		)

		return channelTwoSubscribers - channelOneSubscribers
	})
	return ChannelsList(filteredData)
}

export const sortByVideos = (data) => {
	let filteredData = data.sort((channelOne, channelTwo) => {
		const channelOneVideos = cleanNumber(channelOne.statistics.videoCount)
		const channelTwoVideos = cleanNumber(channelTwo.statistics.videoCount)

		return channelTwoVideos - channelOneVideos
	})
	return ChannelsList(filteredData)
}

export const sortByViews = (data) => {
	let filteredData = data.sort((channelOne, channelTwo) => {
		const channelOneViews = cleanNumber(channelOne.statistics.viewCount)
		const channelTwoViews = cleanNumber(channelTwo.statistics.viewCount)

		return channelTwoViews - channelOneViews
	})
	return ChannelsList(filteredData)
}
