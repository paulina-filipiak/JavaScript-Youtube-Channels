import SingleChannelCard from './singleChannelCard.js'
import { View } from '../utils/View.js'

function ChannelsList(channels) {
  return (View.innerHTML = `<div>${channels
    .map((channel) => SingleChannelCard(channel))
    .join('')}</div>`)
}

export default ChannelsList
