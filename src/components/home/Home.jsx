import {
	HStack,
	Box,
	Text,
	VStack,
	Icon,
	Image,
	useColorMode,
} from '@chakra-ui/react';
import { BsEmojiWinkFill } from 'react-icons/bs';
import HomeImageLight from '../../media/HomeLight.svg'
import HomeImageDark from '../../media/HomeDark.svg'

export const Home = () => {
  const { colorMode } = useColorMode();
	return (
		<VStack>
			<HStack>
				<Box>
					<Text fontSize={['40px', '50px', '100px']} fontWeight="bold">
						HELLO!
					</Text>
				</Box>
				<Box>
					<Text
						fontSize={['30px', '40px', '60px']}
						bgGradient="linear(to-l, #7928CA, #FF0080)"
						bgClip="text"
					>
						I'm <b>Avinash K</b>
					</Text>
				</Box>
			</HStack>
			<HStack width={['90%','80%','60%']}>
				<Text fontSize={['10px', '15px', '20px']} fontWeight="bold">
					“Any fool can write code that a computer can understand. Good
					programmers write code that humans can understand.”
					<Icon
						as={BsEmojiWinkFill}
						fontSize={['10px', '15px', '20px']}
						marginLeft="10px"
					></Icon>
				</Text>
			</HStack>
			<HStack>
				{colorMode === 'light' ? (
					<Image
						src={HomeImageLight}
						boxSize={['100px', '200px', '300px']}
						objectFit="cover"
					/>
				) : (
					<Image
						src={HomeImageDark}
						boxSize={['100px', '200px', '300px']}
						objectFit="cover"
					/>
				)}
			</HStack>
		</VStack>
	);
};
