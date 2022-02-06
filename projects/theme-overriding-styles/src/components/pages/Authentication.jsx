import React from 'react';
import Grid from '@mui/material/Grid';

import CommonButton from '../common/CommonButton'


const Authentication = () => {
	const buttonStyles = {
		fontSize: '0.875rem',
		fontWeight: 600,
		textTransform: 'capitalize',
		borderRadius: 2.5,

		'&.MuiButton-contained': {
			backgroundColor: '#009be5',

			'&:hover': {
				backgroundColor: '#006db3'
			},
		},

		'&.MuiButton-outlined': {
			color: "#fff",
			borderColor: '#fff',

			'&:hover': {
				backgroundColor: 'transparent'
			},
		},
	};


	return (
		<Grid item xs={8} style={{ marginLeft: '70px' }}>
			This is authentication page.

			{/* <div style={{display: "flex", flexDirection: "column"}}> */}
				<CommonButton
					sx = {buttonStyles}
					variant = 'contained'
				>
					Add User A
				</CommonButton>

				<CommonButton
					sx = {buttonStyles}
					variant="outlined"
				>
					Add User B
				</CommonButton>
			{/* </div> */}
		</Grid>
	)
};

export default Authentication;
