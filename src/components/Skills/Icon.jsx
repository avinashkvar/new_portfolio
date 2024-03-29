import {
	Box,
	VStack,
	Icon,
	Text,
	useColorModeValue,
	Link,
} from '@chakra-ui/react';
import { Zoom } from 'react-awesome-reveal';

export const IconItem = ({ title, icon }) => {
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	return (
		<Zoom>
			<Box
				padding="10px"
				border={`1px solid ${bg}`}
				borderRadius="50%"
				_hover={{ background: bg, color: color }}
				transition="all 0.5s ease"
			>
				<VStack>
					<Link>
						<Icon as={icon} fontSize={['20px', '30px', '40px']}></Icon>
					</Link>
					<Text fontSize={['10px', '13px', '18px']}>{title}</Text>
				</VStack>
			</Box>
		</Zoom>
	);
};
