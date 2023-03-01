function SingleChannelCard(channel) {
  const channelName = channel.title
  const channelUrl = channel.customUrl
  const channelImg = channel.thumbnails.medium.url
  const ChannelSubscribers = channel.statistics.subscriberCount
  const channelVideos = channel.statistics.videoCount
  const channelViews = channel.statistics.viewCount

  return /* HTML */ ` <a
    class="wrapper__card"
    href="${channelUrl}/?utm_campaign=${'12.12.2022'}"
    target="blank"
  >
    <img src=${channelImg} />
    <div "card__info">
      <h2 class="card__name">${channelName}</h2>
      <div class="card__statistics">
        <div>
          <p>SUBSCRIBERS</p>
          <h4>${ChannelSubscribers}</h4>
        </div>
        <div>
          <p>VIDEOS</p>
          <h4>${channelVideos}</h4>
        </div>
        <div>
          <p>VIEWS</p>
          <h4>${channelViews}</h4>
        </div>
      </div>
    </div>
  </a>`
}

export default SingleChannelCard
