import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Text,
	Button,
	Icon,
	Collapse,
	Heading,
	useColorModeValue,
	Link,
	HStack,
	VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { IoIosEye } from 'react-icons/io';
import '../navbar/link.css';
import { Zoom } from 'react-awesome-reveal';
import { TeachStack } from './TechStack';

export const ProjectCard = ({
	image,
	title,
	discription,
	title2,
	gitHub,
	live,
	items,
}) => {
	const [isEntered, setIsEntered] = useState(false);
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');

	return (
		<Zoom>
			<Card maxW={['sm', 'md', 'lg']} align="center">
				<CardHeader align="center">
					<Image
						src={image}
						onMouseEnter={() => setIsEntered(true)}
						onMouseLeave={() => setIsEntered(false)}
					></Image>
					<Heading fontSize={['15px', '18px', '24px']} fontWeight="bold">
						{title}
					</Heading>
					<Text>{title2}</Text>
				</CardHeader>

				<CardBody>
					<Collapse in={isEntered} animateOpacity>
						<Text>{discription}</Text>
					</Collapse>
				</CardBody>

				<CardFooter>
					<VStack>
						<HStack>
							{items.map((e, i) => (
								<TeachStack title={e.title} icon={e.icon} key={i} />
							))}
						</HStack>
						<HStack>
							<Link className="link" href={live} isExternal>
								<Button
									margin="0px 20px 0px 20px"
									width="150px"
									height="auto"
									padding={['10px', '13px', '15px']}
									_hover={{ background: bg, color: color }}
								>
									<Text
										fontSize={['18px', '18px', '20px']}
										fontWeight="bold"
									>
										Live<Icon as={IoIosEye} marginLeft="5px"></Icon>
									</Text>
								</Button>
							</Link>
							<Link className="link" isExternal href={gitHub}>
								<Button
									margin="0px 20px 0px 20px"
									width="150px"
									height="auto"
									padding={['10px', '13px', '15px']}
									_hover={{ background: bg, color: color }}
								>
									<Text
										fontSize={['18px', '18px', '20px']}
										fontWeight="bold"
									>
										Code<Icon as={FaCode} marginLeft="5px"></Icon>
									</Text>
								</Button>
							</Link>
						</HStack>
					</VStack>
				</CardFooter>
			</Card>
		</Zoom>
	);
};
