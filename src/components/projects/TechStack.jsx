import { Box, VStack, Link, Text, Icon ,useColorModeValue} from '@chakra-ui/react';
import {Zoom} from 'react-awesome-reveal'

export const TeachStack = ({ title, icon }) => {
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	return (
		<Zoom>
			<Box
				padding="10px"
				border={`1px solid ${bg}`}
				borderRadius="50%"
                width='80px'
                height='80px'
				_hover={{ background: bg, color: color }}
				transition="all 0.5s ease"
			>
				<VStack>
					<Link>
						<Icon as={icon} fontSize='25px'></Icon>
					</Link>
					<Text fontSize={['10px', '13px', '18px']}>{title}</Text>
				</VStack>
			</Box>
		</Zoom>
	);
};
