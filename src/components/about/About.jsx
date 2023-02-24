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
import photo from '../../media/githubedit1.jpg';
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
			margin="30px 0px 30px 0px"
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
					bg={bg}
					padding="2px"
					borderRadius="10%"
				></Image>
			</Box>
		</Flex>
	);
};
