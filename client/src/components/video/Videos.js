import React from 'react'
import { Grid } from '@material-ui/core'
import { useSelector } from 'react-redux'

import Video from './Video'

const Videos = () => {
	const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	const { videos } = useSelector((state) => state.video)
	return (
		<Grid container item xs={12} justifyContent='center'>
			{videos.length === 0 && <p>Loading...</p>}
			{videos.length !== 0 &&
				videos.map(({ _id, owner, secure_url, title, createdAt }) => (
					<Video
						key={_id}
						_id={_id}
						owner={owner}
						secureUrl={secure_url}
						title={title}
						date={createdAt}
					/>
					// <Video key={ind} ind={ind} src={spacevid} />
				))}
		</Grid>
	)
}

export default Videos
