import SingleChannelCard from "./SingleChannelCard.js"
import { view } from "../utils/view.js"

const ChannelsList = (channels) => {
	return (view.innerHTML = `${channels
		.map((channel) => SingleChannelCard(channel))
		.join("")}`)
}

export default ChannelsList
