import freshly from '../../media/freshly.png';
import bigbascket from '../../media/big.png';
import { ProjectCard } from './projectCard';
import { Grid } from '@chakra-ui/react';
import { VStack, Text } from '@chakra-ui/react';
import weather from '../../media/weather.png';
import stopwatch from '../../media/stopwatch1.png';
import tictactoa from '../../media/tictactoa.png'
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import {BsFillBootstrapFill} from 'react-icons/bs'
export const Projects = () => {
	const content = [
		{
			imge: freshly,
			title: 'Freshly.com (Clone)',
			discription:
				'A Food Ordering Web Application where users can login to the site and add their favourite dishes to the cart and User can also sort and filter his favorite foods and pay the payment and the dishes get delivered to their Residentail Home Address provided in the site.',
			title2: 'A Web Application where user can order food.',
			live: 'https://magical-mousse-a93d02.netlify.app/',
			gitHub: 'https://github.com/avinashkvar/freshly',
			items: [
				{ title: 'HTML', icon: AiFillHtml5 },
				{ title: 'CSS', icon: DiCss3 },
				{ title: 'JS', icon: SiJavascript },
			],
		},
		{
			imge: bigbascket,
			title: 'BigBascket.com (Clone)',
			discription:
				'This is an Grocery Ordering Web Application where the customers can login and go through all the items i.e vegetables,fruits,staples,cosmetic so on & then they can add the items according to their cart and pay for the above items via card or cash, the items get delivered.',
			title2: 'A Web Application where user can order Grocery Products.',
			live: 'https://bigbasket.vercel.app/',
			gitHub: 'https://github.com/avinashkvar/bigbasket',
			items: [
				{ title: 'HTML', icon: AiFillHtml5 },
				{ title: 'CSS', icon: DiCss3 },
				{ title: 'JS', icon: SiJavascript },
			],
		},
		{
			imge: weather,
			title: 'Weather App',
			discription:
				'A simple weather application where user can find the latitude, longitude, wind Speed etc. By entering the proper city name.',
			title2: '',
			live: 'https://super-bublanina-b5d8b9.netlify.app/',
			gitHub: 'https://github.com/avinashkvar/wheather_app',
			items: [
				{ title: 'HTML', icon: AiFillHtml5 },
				{ title: 'CSS', icon: DiCss3 },
				{ title: 'JS', icon: SiJavascript },
			],
		},
		{
			imge: stopwatch,
			title: 'StopWatch',
			discription:
				'A simple StopWatch application where user can start,resume,pause and restart the time.',
			title2: '',
			live: 'https://avinash-stop-watch.vercel.app/',
			gitHub: 'https://github.com/avinashkvar/react/tree/main/stopwatch',
			items: [
				{ title: 'React', icon: GrReactjs },
				{ title: 'Bootstrap', icon: BsFillBootstrapFill },
			],
		},
		{
			imge: tictactoa,
			title: 'TicTacToa',
			discription:
				'A simple TicTacToa application where two players will play game, by default player one will choose x and player two will choose o and game continues.',
			title2: '',
			live: 'https://avinashk-tictactoe.vercel.app/',
			gitHub: 'https://github.com/avinashkvar/tictactoe',
			items: [
				{ title: 'React', icon: GrReactjs },
				{ title: 'Bootstrap', icon: BsFillBootstrapFill },
			],
		},
	];
	return (
		<VStack>
			<Text m={8} fontSize={['30px', '40px', '60px']} fontWeight="bold">
				- Projects -
			</Text>
			<Grid
				gap={4}
				margin="30px 10px 30px 10px"
				templateColumns={[
					'repeat(1, 1fr)',
					'repeat(1, 1fr)',
					'repeat(2, 1fr)',
				]}
				alignContent="center"
			>
				{content.map((e, i) => (
					<ProjectCard
						image={e.imge}
						title={e.title}
						discription={e.discription}
						title2={e.title2}
						gitHub={e.gitHub}
						live={e.live}
						items={e.items}
						key={i}
					/>
				))}
			</Grid>
		</VStack>
	);
};
