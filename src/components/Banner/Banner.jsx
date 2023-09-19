import React from 'react';
import Button from '../Buttons';
import banner from '../../assets/banner.jpg';
import Icons from '../Icons';

import { BannerWrapper, Overlay, StyledCenter } from './Banner.styled';

export default function Banner() {
	return (
		<>
			<BannerWrapper>
				<img src={banner} alt='Banner' />
			</BannerWrapper>
			<StyledCenter>
				<h1>HEY, I'M MARTHA G MANDIZVIDZA</h1>
				<p>A frontend focused Web Developer building accessible websites</p>
				<Button />
			</StyledCenter>
			<Overlay />

			<Icons />
		</>
	);
}
