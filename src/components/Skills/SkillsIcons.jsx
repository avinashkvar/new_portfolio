import { Grid } from '@chakra-ui/react';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import {
	SiJavascript,
	SiRedux,
	SiMongodb,
	SiChakraui,
	SiMaterialui,
	SiExpress,
} from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoNodejs } from 'react-icons/io';
import {  BsFillBootstrapFill } from 'react-icons/bs';
import { FaGitSquare } from 'react-icons/fa';
import { IconItem } from './Icon';

export const SkillIcons = () => {
 
	const items = [
		{ title: 'HTML', icon: AiFillHtml5 },
		{ title: 'CSS', icon: DiCss3 },
		{ title: 'JS', icon: SiJavascript },
		{ title: 'React', icon: GrReactjs },
		{ title: 'Redux', icon: SiRedux },
		{ title: 'NodeJS', icon: IoLogoNodejs },
		{ title: 'MongoDB', icon: SiMongodb },
		{ title: 'GitBash', icon: FaGitSquare },
		{ title: 'ChakraUI', icon: SiChakraui },
		{ title: 'MUI', icon: SiMaterialui },
		{ title: 'ExpressJS', icon: SiExpress },
		{ title: 'Bootstrap', icon: BsFillBootstrapFill },
	];
	return (
		<Grid
			templateColumns={[
				'repeat(4, 1fr)',
				'repeat(4, 1fr)',
				'repeat(5, 1fr)',
			]}
			gap={[2, 3, 5]}
		>
			{items.map((e,i) => (
				<IconItem title={e.title} icon={e.icon} key={i}/>
			))}
		</Grid>
	);
};
