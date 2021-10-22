import React from 'react'
import { Grid } from '@material-ui/core'

import Video from './Video'
import spacevid from '../../space.mp4'
import sample from '../../sample.mp4'

const Videos = () => {
	const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	return (
		<Grid container item xs={12} justifyContent='flex-start'>
			{val.map((_, ind) => (
				// <Video src={ind % 2 === 0 ? spacevid : sample} />
				<Video key={ind} ind={ind} src={spacevid} />
			))}
		</Grid>
	)
}

export default Videos
