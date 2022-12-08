import {
	Link,
	useColorModeValue,
	Button,
	Icon,
} from '@chakra-ui/react';
import './link.css';
import { AiFillHome } from 'react-icons/ai';
import { BsPersonBoundingBox } from 'react-icons/bs';
import { FaGraduationCap } from 'react-icons/fa';
import { BsStack } from 'react-icons/bs';
import { IoMdContact } from 'react-icons/io';

export const Tabs = ({cb}) => {
	const tabs = [
		{ title: 'Home', icon: AiFillHome, link: '#home' },
		{ title: 'About', icon: BsPersonBoundingBox, link: '#about' },
		{ title: 'Skills', icon: FaGraduationCap, link: '#skills' },
		{ title: 'Projects', icon: BsStack, link: '#projects' },
		{ title: 'Contact', icon: IoMdContact, link: '#contact' },
	];
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	
	return (
		<>
			{tabs.map((e, i) => (
				<Button
					key={i}
					_hover={{ background: bg, color: color }}
					m={1}
					width={['100px', '100px', '150px']}
				>
					<Link
						fontWeight="bold"
						fontSize={['13px', '15px', '20px']}
						className="link"
						href={e.link}
						onClick={()=>cb()}
					>
						{e.title}
					</Link>

					<Icon as={e.icon} fontSize="20px" m={1.5} />
				</Button>
			))}
		</>
	);
};
