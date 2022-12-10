import { Flex, Box, useMediaQuery } from '@chakra-ui/react';
import { FormInput } from './FormInput';
import { ContentLeft } from './leftPart';

export const SendMsg = () => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	return (
		<Flex
			gap={['30px', '35px', '40px']}
			justify="space-around"
			align="center"
			width={['100%', '60%', '70%']}
			flexDirection={isLargerThan800 ? 'row' : 'column'}
		>
			<Box width="90%">
				<ContentLeft />
			</Box>
			<Box width="90%">
				<FormInput />
			</Box>
		</Flex>
	);
};
