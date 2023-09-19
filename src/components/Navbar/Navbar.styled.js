import styled from 'styled-components';

export const LogoContainer = styled.div`
	display: flex;

	span {
		margin: 13px 10px;
	}
`;

export const StyledNavbar = styled.nav`
	width: 100%;
	height: 6rem;
	display: flex;
	justify-content: space-between;
	background: black;
	color: white;
	align-items: center;
`;
export const ImageWrapper = styled.div`
	width: 50px;
	height: 50px;

	& img {
		width: 100%;
		height: auto;
		object-fit: contain;
		border-radius: 50%;
	}
`;

export const UnorderedList = styled.div`
	display: flex;
	margin-right: 40px;
	& li {
		list-style: none;
		margin-right: 40px;
	}
	& a {
		color: white;
		text-decoration: none;
	}

	& a:hover {
		color: orange;
	}

	// & a:active {
	// 	color: salmon;
	// }
`;
