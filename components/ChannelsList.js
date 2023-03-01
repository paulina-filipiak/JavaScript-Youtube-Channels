import SingleChannelCard from './singleChannelCard.js'
import { View } from '../utils/View.js'

function ChannelsList(channels) {
  return (View.innerHTML = `${channels.map((channel) => SingleChannelCard(channel)).join('')}`)
}

export default ChannelsList
