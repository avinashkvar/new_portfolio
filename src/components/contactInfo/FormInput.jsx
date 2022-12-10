import { VStack, Input, InputGroup, InputLeftElement,Icon ,Textarea } from '@chakra-ui/react';
import { GrMail } from 'react-icons/gr';

export const FormInput = () => {
	return (
		<VStack textAlign="center" alignContent="center">
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					children={<Icon as={GrMail} />}
				/>
				<Input
					type="email"
					placeholder="Enter your email"
					width={['350px', '400px', '510px']}
				></Input>
			</InputGroup>
			<Textarea
				size={['sm','md','lg']}
				placeholder="Type your message..."
                height={['100px','200px','300px']}
			></Textarea>
		</VStack>
	);
};
