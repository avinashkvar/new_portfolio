import {
	HStack,
	Box,
	Text,
	VStack,
	Icon,
	Image,
	useColorMode,
	Link,
	Center,
} from '@chakra-ui/react';
import { BsEmojiWinkFill, BsGithub, BsLinkedin } from 'react-icons/bs';
import HomeImageLight from '../../media/HomeLight.svg';
import HomeImageDark from '../../media/HomeDark.svg';
import { AttentionSeeker } from 'react-awesome-reveal';
import 'animate.css';
export const Home = () => {
	const { colorMode } = useColorMode();
	return (
		<VStack marginTop="60px">
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
						className="animate__animated animate__flipInX animate__slow	1s"
					>
						I'm <b>Avinash K</b>
					</Text>
				</Box>
			</HStack>
			<HStack>
				<AttentionSeeker>
					<Text
						fontSize={['20px', '30px', '40px']}
						bgGradient="linear(to-l, #7928CA, #FF0080)"
						bgClip="text"
						fontWeight="bold"
						Full
						Stack
						Web
						Developer
					>
						Full Stack Web Developer
					</Text>
				</AttentionSeeker>
			</HStack>
			<HStack>
				<Center>
					<Link
						fontSize={['20px', '30px', '40px']}
						href="https://github.com/avinashkvar"
						isExternal
						margin="0px 60px 0px 60px"
					>
						<Icon as={BsGithub}></Icon>
					</Link>
					<Link
						fontSize={['20px', '30px', '40px']}
						href="https://www.linkedin.com/in/avinash-k-8691021a8/"
						isExternal
						margin="0px 60px 0px 60px"
					>
						<Icon as={BsLinkedin}></Icon>
					</Link>
				</Center>
			</HStack>
			<HStack width={['90%', '80%', '60%']}>
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
