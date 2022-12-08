import { VStack, Text, Image, useColorMode } from '@chakra-ui/react';
import skillsLight from '../../media/skillsLight.svg';
import skillsDark from '../../media/skillsDark.svg';
//#232235 //#EBEAEF
export const LogoContets = () => {
	const { colorMode } = useColorMode();
	return (
		<>
			<VStack>
				<Text fontSize={['20px','30px','40px']}>I Can Work With</Text>
				<Image
					src={colorMode === 'light' ? skillsLight : skillsDark}
					boxSize={['200px', '300px', '400px']}
				></Image>
			</VStack>
		</>
	);
};
