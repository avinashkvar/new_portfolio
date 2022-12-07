import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Stack, Box, Center } from '@chakra-ui/react';
import { Home } from './components/home/Home';
import { ScrollTop } from './components/scrollup/ScrollTop';
import { About } from './components/about/About';
import { Slide } from 'react-awesome-reveal';
import { Skills } from './components/Skills/Skills';

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

				<Box width="100%" id="about">
					<Slide>
						<Center>
							<About />
						</Center>
					</Slide>
				</Box>
				<Box id='skills'>
					<Skills/>
				</Box>
			</Stack>
			<Box>
				<ScrollTop />
			</Box>
		</div>
	);
}

export default App;
