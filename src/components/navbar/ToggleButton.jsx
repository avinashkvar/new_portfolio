import { Button, Icon } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MdLightMode, MdDarkMode } from 'react-icons/md';

export const ToggleButton = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	return (
		<>
			<Button
				onClick={toggleColorMode}
				fontSize="20px"
				fontWeight="bold"
				m={1}
				padding="10px 20px"
				transition= 'all 0.5s ease'
				_hover={{ background: bg, color: color ,transition: 'all 0.5s ease' }}
			>
				{colorMode === 'light' ? (
					<Icon as={MdDarkMode} fontSize="20px" />
				) : (
					<Icon as={MdLightMode} fontSize="20px" />
				)}
			</Button>
		</>
	);
};
