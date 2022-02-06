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
			color: "#000",
			borderColor: '#333fff',

			'&:hover': {
				backgroundColor: 'transparent'
			},
		},
	};


	return (
		<Grid item xs={8} style={{ marginLeft: '70px' }}>
			This is authentication page.

			<CommonButton
				sx = {buttonStyles}
				variant = 'contained'
			>
				Add User A
			</CommonButton>

			<CommonButton
				size="large"
				sx = {buttonStyles}
				variant="outlined"
			>
				Add User B
			</CommonButton>

			<CommonButton
				variant="contained"
				// color="secondary"
				color="primary"
			>
				Add User C
			</CommonButton>
		</Grid>
	)
};

export default Authentication;
