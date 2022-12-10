import { VStack, Text, Image, useColorMode } from '@chakra-ui/react';
import lastImageLight from '../../media/lastLight.svg';
import lastImageDark from '../../media/lastDark.svg';

export const ContentLeft = () => {
	const { colorMode } = useColorMode();
	return (
		<VStack>
			<Text fontSize={['18px', '24px', '30px']} fontWeight="bold">
				Contact Me
			</Text>
			<Text>
				Drop a suggestion, feedback, opportunities or we can colaborate on a
				project. Please mention your contact details if you are expecting a
				reply.
			</Text>
			<Image
				src={colorMode === 'light' ? lastImageLight : lastImageDark}
				width={['150px', '200px', '300px']}
			></Image>
		</VStack>
	);
};
