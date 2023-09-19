import styled from 'styled-components';

export const BannerWrapper = styled.div`
	width: 100%;
	height: 60rem;
	position: relative;

	& img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

export const Overlay = styled.div`
	background-color: black;
	width: 100%;
	height: 60rem;
	position: absolute;
	top: 6rem;
	opacity: 0.6;
	display: flex;
	justify-content: center;
	flex-direction: column;
`;

export const StyledCenter = styled.div`
	width: 100%;
	color: white;
	position: absolute;
	top: 30rem;
	text-align: center;
`;
