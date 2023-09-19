import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { SocialContainer } from './Icons.styled';

const Icons = () => {
	return (
		<SocialContainer>
			<div>
				<FaFacebookF />
			</div>
			<div>
				<FaLinkedin />
			</div>
			<div>
				<SiGmail />
			</div>
		</SocialContainer>
	);
};

export default Icons;
