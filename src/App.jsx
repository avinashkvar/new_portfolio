import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Stack, Box, Center } from '@chakra-ui/react';
import { Home } from './components/home/Home';
import { ScrollTop } from './components/scrollup/ScrollTop';
import { About } from './components/about/About';

function App() {
	return (
		<div>
			<Stack direction="column" spacing="24px">
				<Box>
					<Navbar />
				</Box>
				<Box width="100%">
					<Center>
						<Home id="home" />
					</Center>
				</Box>
				<Box width="100%">
					<Center>
						<About/>
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
