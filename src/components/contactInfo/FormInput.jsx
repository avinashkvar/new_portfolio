import {
	VStack,
	Input,
	InputGroup,
	InputLeftElement,
	Icon,
	Textarea,
	Button,
	useToast
} from '@chakra-ui/react';
import { useState } from 'react';
import { GrMail } from 'react-icons/gr';

export const FormInput = () => {
	const [input, setInput] = useState({
		email: '',
		text: '',
	});
	const toast = useToast();

	const handleChange = (e) => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
	};

	const submitIt = () => {
		window.Email.send({
			Host: 'smtp.gmail.com',
			Username: 'k3076183@gmail.com',
			Password: 'Avinashraja@123',
			To: 'k3076183@gmail.com',
			From: input.email,
			Subject: input.text,
			Body: input.text,
		}).then((message) => console.log(message));
		
	};
	return (
		<VStack textAlign="center" alignContent="center">
		
				<>
					<InputGroup>
						<InputLeftElement
							pointerEvents="none"
							children={<Icon as={GrMail} />}
						/>
						<Input
							type="email"
							placeholder="Enter your email"
							width={['350px', '400px', '510px']}
							name="email"
							onChange={(e) => handleChange(e)}
						></Input>
					</InputGroup>
					<Textarea
						size={['sm', 'md', 'lg']}
						placeholder="Type your message..."
						height={['100px', '200px', '300px']}
						name="text"
						onChange={(e) => handleChange(e)}
					></Textarea>
					<Button onClick={() => {
						 submitIt();
						 toast({
								title: 'Thanks for Reaching',
								position: "bottom-right",
								isClosable: true,
								status:'success'
							});
					}}>Submit</Button>
				</>
			
		</VStack>
	);
};
