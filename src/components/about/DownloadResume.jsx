import { Button, Link, Icon, useColorModeValue } from '@chakra-ui/react';
import { IoMdDownload } from 'react-icons/io';
import '../navbar/link.css';
import resume from '../../media/avinash-k-resume.pdf';
export const DownloadResume = () => {
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	return (
		<Link className="link" isExternal href={resume} download>
			<Button
				_hover={{ bg: bg, color: color }}
				fontSize={['15px', '18px', '20px']}
				fontWeight="bold"
			>
				Download CV
				<Icon
					as={IoMdDownload}
					fontSize={['15px', '18px', '20px']}
					fontWeight="bold"
					m={1}
				></Icon>
			</Button>
		</Link>
	);
};
