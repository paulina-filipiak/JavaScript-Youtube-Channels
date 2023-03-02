function SingleChannelCard(channel) {
	const channelName = channel.title
	const channelUrl = channel.customUrl
	const channelImg = channel.thumbnails.medium.url
	const channelSubscribers = channel.statistics.subscriberCount
		.replaceAll(",", "")
		.replaceAll(".", "")
		.replaceAll(" ", "")
	const channelVideos = channel.statistics.videoCount
		.replaceAll(",", "")
		.replaceAll(".", "")
		.replaceAll(" ", "")
	const channelViews = channel.statistics.viewCount
		.replaceAll(",", "")
		.replaceAll(".", "")
		.replaceAll(" ", "")

	return /* HTML */ ` <a
    class="wrapper__card"
    href="${channelUrl}/?utm_campaign=${+new Date()}"
    target="blank"
    data-title="${channelName.toLowerCase()}"
    data-subscribers="${channelSubscribers}"
    data-videos="${channelVideos}"
    data-views="${channelViews}"
  >
    <img src=${channelImg} />
    <div "card__info">
      <h2 class="card__name">${channelName}</h2>
      <div class="card__statistics">
        <div>
          <p>SUBSCRIBERS</p>
          <h4>${Number(channelSubscribers).toLocaleString("en-US")}</h4>
        </div>
        <div>
          <p>VIDEOS</p>
          <h4>${Number(channelVideos).toLocaleString("en-US")}</h4>
        </div>
        <div>
          <p>VIEWS</p>
          <h4>${Number(channelViews).toLocaleString("en-US")}</h4>
        </div>
      </div>
    </div>
  </a>`
}

export default SingleChannelCard
