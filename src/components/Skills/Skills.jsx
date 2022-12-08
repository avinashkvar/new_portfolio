import { Flex, useMediaQuery, VStack, Text } from '@chakra-ui/react';
import { LogoContets } from './LogoContents';
import { SkillIcons } from './SkillsIcons';

export const Skills = () => {
	const [isLargerThan800] = useMediaQuery('(min-width: 880px)');
	return (
		<>
			<VStack>
				<Text m={8} fontSize={['30px', '40px', '60px']} fontWeight="bold">
					- Skills -
				</Text>
				<Flex
					justifyContent="center"
					alignItems="center"
					gap={[7, 8, 10]}
					flexDirection={isLargerThan800 ? 'row' : 'column'}
					margin="30px 0px 30px 0px"
				>
					<LogoContets />
					<SkillIcons />
				</Flex>
			</VStack>
		</>
	);
};
