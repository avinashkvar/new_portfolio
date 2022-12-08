import {Flex} from '@chakra-ui/react'
import { LogoContets } from './LogoContents';
import { SkillIcons } from './SkillsIcons';

export const Skills = () => {
	return <>
	    <Flex justifyContent='center' alignItems='center' gap={[7,8,10]}>
             <LogoContets/>
			 <SkillIcons/>
		</Flex>
	</>;
};
