import React from "react"

import Tracks from "./discover/Tracks.js"
import trackRaw from "./discover/TrackRaw.js"

import "./css/Discover.css"
import "./css/Tracks.css"

function Discover () {

	const TrackLi = trackRaw.map(trackData => <Tracks 
		key={trackData.id} 
		ta={trackData.ta} 
		pb={trackData.pb}
		artist={trackData.artist}
		art={trackData.art}
		title={trackData.title}
		genre={trackData.genre}
		date={trackData.date}
		 />)

	return(
		<div className = "mid">
			<div className="discover">
				<h1>Discover</h1>
				{TrackLi}
			</div>
		</div>
	)
}

export default Discover