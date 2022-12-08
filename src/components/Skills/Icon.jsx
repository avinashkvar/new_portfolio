import { Box, VStack, Icon,Text,useColorModeValue } from '@chakra-ui/react';

export const IconItem = ({ title, icon }) => {
    const bg = useColorModeValue('#2d3748', '#f7fafc');
	return (
		<Box padding='10px' border={`1px solid ${bg}`} borderRadius='50%'>
			<VStack>
				<Icon as={icon} fontSize={['20px', '30px', '40px']}></Icon>
				<Text>{title}</Text>
			</VStack>
		</Box>
	);
};
