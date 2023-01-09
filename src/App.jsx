import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Stack, Box, Center } from '@chakra-ui/react';
import { Home } from './components/home/Home';
import { ScrollTop } from './components/scrollup/ScrollTop';
import { About } from './components/about/About';
import { Slide, AttentionSeeker } from 'react-awesome-reveal';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/contact/Contact';
import { SendMsg } from './components/contactInfo/SendMsg';
import {Footer} from './components/footer/Footer'

function App() {
	return (
		<div>
			<Stack direction="column" spacing="24px">
				<Box>
					<Navbar />
				</Box>
				<Box width="100%" id="home">
					<Center>
						<Home />
					</Center>
				</Box>
				<hr />
				<Box width="100%" id="about">
					<Slide>
						<Center>
							<About></About>
						</Center>
					</Slide>
				</Box>
				<hr />
				<Box width="100%" id="skills">
					<Center width="100%">
						<AttentionSeeker effect="pulse">
							<Skills></Skills>
						</AttentionSeeker>
					</Center>
				</Box>
				<hr />
				<Box id="projects" width="100%">
					<Center>
						<Projects />
					</Center>
				</Box>
				<hr />
				<Box id="contact" width="100%">
					<Center>
						<Contact/>
					</Center>
				</Box>
				<hr />
				<Box gap={10} marginBottom='30px'>
					<Center>
						<SendMsg/>
					</Center>
				</Box>
				<hr />
                <Box marginTop={10}>
                     <Center>
						 <Footer></Footer>
					 </Center>
				</Box>
			</Stack>
			<Box>
				<ScrollTop />
			</Box>
		</div>
	);
}

export default App;
