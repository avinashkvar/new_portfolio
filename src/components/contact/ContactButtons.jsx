import { Button, Text, Link, Icon,useColorModeValue } from '@chakra-ui/react';
import '../navbar/link.css'

export const ContactButtons = ({ title, link, icon }) => {
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	return (
		<Button
			_hover={{ background: bg, color: color }}
			width={['200px', '250px', '300px']}
            padding='15px'
		>
			<Text fontSize={['11px', '18px', '20px']} fontWeight='bold'>
				<Link className="link" href={link} isExternal>
					{title}
				</Link>
				<Icon as={icon} marginLeft='10px' fontSize={['13px','16px','19px']}></Icon>
			</Text>
		</Button>
	);
};
