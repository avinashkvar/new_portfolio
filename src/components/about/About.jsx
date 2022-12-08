import {
	Flex,
	Box,
	VStack,
	Text,
	Image,
	useColorModeValue,
	HStack,
	useMediaQuery,
} from '@chakra-ui/react';
import { Description } from './Discription';
import photo from '../../media/Photo.jpg';
import { DownloadResume } from './DownloadResume';
import { ViewResume } from './ViewResume';
export const About = () => {
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	return (
		<Flex
			width="80%"
			align="center"
			style={
				isLargerThan800
					? { flexDirection: 'row' }
					: { flexDirection: 'column-reverse' }
			}
			id="about"
		>
			<Box m={2}>
				<VStack>
					<Text fontSize="30px" fontWeight="bold">
						Let's have a Introduction
					</Text>
					<Description />
					<HStack>
						<DownloadResume />
						<ViewResume />
					</HStack>
				</VStack>
			</Box>
			<Box m={2}>
				<Image
					src={photo}
					borderRadius="8px"
					bg={bg}
					padding="2px"
					width={['200px', '400px', '800px']}
				></Image>
			</Box>
		</Flex>
	);
};
