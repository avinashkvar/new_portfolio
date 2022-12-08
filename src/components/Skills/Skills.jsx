import { Flex, useMediaQuery } from '@chakra-ui/react';
import { LogoContets } from './LogoContents';
import { SkillIcons } from './SkillsIcons';

export const Skills = () => {
	const [isLargerThan800] = useMediaQuery('(min-width: 880px)');
	return (
		<>
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
		</>
	);
};
