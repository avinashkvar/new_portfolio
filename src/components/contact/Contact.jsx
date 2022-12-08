import {
	Flex,
	Box,
	VStack,
	useColorMode,
	Text,
	Image,
	useMediaQuery,
} from '@chakra-ui/react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiMail } from 'react-icons/hi';
import { MdCall } from 'react-icons/md';
import { ContactButtons } from './ContactButtons';
import contactLight from '../../media/contactLight.svg';
import contactDark from '../../media/contactDark.svg';
import { AttentionSeeker } from 'react-awesome-reveal';
export const Contact = () => {
	const { colorMode } = useColorMode();
	const [isLargerThan300] = useMediaQuery('(min-width: 400px)');
	const item = [
		{
			title: 'GitHub',
			link: 'https://github.com/avinashkvar',
			icon: AiFillGithub,
		},
		{
			title: 'LinkedIn',
			link: 'https://www.linkedin.com/in/avinash-k-8691021a8/',
			icon: AiFillLinkedin,
		},
		{
			title: 'avinashk17avi@gmail.com',
			link: 'mailto:avinashk17avi@gmail.com',
			icon: HiMail,
		},
		{
			title: 'Phone',
			link: 'tel:+91 9110434503',
			icon: MdCall,
		},
	];
	return (
		<VStack>
			<Text m={8} fontSize={['30px', '40px', '60px']} fontWeight="bold">
				- Contact -
			</Text>
			<Flex
				gap={[10, 20, 40]}
				justify="center"
				align="center"
				flexDirection={isLargerThan300 ? 'row' : 'column-reverse'}
			>
				<Box>
					<VStack>
						{item.map((e, i) => (
							<ContactButtons
								title={e.title}
								link={e.link}
								icon={e.icon}
								key={i}
							/>
						))}
					</VStack>
				</Box>
				<Box>
					<AttentionSeeker effect="rubberBand">
						<Image
							src={colorMode === 'light' ? contactLight : contactDark}
							boxSize={['150px', '250px', '400px']}
						></Image>
					</AttentionSeeker>
				</Box>
			</Flex>
		</VStack>
	);
};
