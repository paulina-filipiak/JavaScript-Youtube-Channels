import { SingleChannelCard } from './singleChannelCard'
import { View } from '../utils/View'

export default ChannelsList = (channels) => {
  return (View.innerHTML = `<div>${channels
    .map((channel) => SingleChannelCard(channel))
    .join('')}</div>`)
}
