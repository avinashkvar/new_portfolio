import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Stack, Box, Center } from '@chakra-ui/react';
import { Home } from './components/home/Home';
import { ScrollTop } from './components/scrollup/ScrollTop';
import { About } from './components/about/About';
import { Slide, AttentionSeeker } from 'react-awesome-reveal';
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
			</Stack>
			<Box>
				<ScrollTop />
			</Box>
		</div>
	);
}

export default App;
