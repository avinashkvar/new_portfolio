import { Flex, Box, Text } from '@chakra-ui/react';
import { Tabs } from './Tabs';
import { ToggleButton } from './ToggleButton';
import {
	useMediaQuery,
	Icon,
	Button,
	useDisclosure,
	Drawer,
	DrawerContent,
	DrawerCloseButton,
	DrawerOverlay,
	DrawerBody,
	useColorModeValue,
	VStack
} from '@chakra-ui/react';
import {  GiHamburgerMenu } from 'react-icons/gi';
import { useRef } from 'react';

export const Navbar = () => {
	const [isLargerThan800] = useMediaQuery('(min-width: 880px)');
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	const handleOnClick = ()=>{
        onClose();
	}
	return (
		<Box
			p={3}
			w="100%"
			backgroundColor={color}
			position="fixed"
			overflow="hidden"
			top="0"
			zIndex="20"
			background="Scrollbar"
		>
			<Flex
				align="center"
				justify="space-between"
				gap={[1, 2, 3]}
				m={[1, 2, 3]}
			>
				<Box>
					<Text
						fontSize={['20px', '20px', '25px', '30px']}
						fontWeight="bold"
					>
						{'</>'}Welcome!
					</Text>
				</Box>
				<Box>
					{isLargerThan800 ? (
						<Tabs />
					) : (
						<>
							<Button
								onClick={onOpen}
								_hover={{
									background: bg,
									color: color,
									transition: 'all 0.5s ease',
								}}
							>
								<Icon as={GiHamburgerMenu} fontSize="20px" />
							</Button>
							<Drawer
								isOpen={isOpen}
								placement="top"
								onClose={onClose}
								finalFocusRef={btnRef}
							>
								<DrawerOverlay />
								<DrawerContent>
									<DrawerCloseButton />

									<DrawerBody>
										<VStack>
											<Tabs cb={handleOnClick}></Tabs>
										</VStack>
									</DrawerBody>
								</DrawerContent>
							</Drawer>
						</>
					)}
					<ToggleButton />
				</Box>
			</Flex>
		</Box>
	);
};
