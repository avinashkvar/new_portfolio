import freshly from '../../media/freshly.png';
import bigbascket from '../../media/big.png';
import { ProjectCard } from './projectCard';
import { Flex } from '@chakra-ui/react';
import { useMediaQuery ,VStack,Text} from '@chakra-ui/react';

export const Projects = () => {
	const [isLargerThan800] = useMediaQuery('(min-width: 800px)');
	const content = [
		{
			imge: freshly,
			title: 'freshly.com (Clone)',
			discription:
				'A Food Ordering Web Application where users can login to the site and add their favourite dishes to the cart and User can also sort and filter his favorite foods and pay the payment and the dishes get delivered to their Residentail Home Address provided in the site.',
			title2: 'A Web Application where user can order food.',
			live: 'https://clonefreshly.netlify.app',
			gitHub: 'https://github.com/avinashkvar/freshly',
		},
		{
			imge: bigbascket,
			title: 'BigBascket.com (Clone)',
			discription:
				'This is an Grocery Ordering Web Application where the customers can login and go through all the items i.e vegetables,fruits,staples,cosmetic so on & then they can add the items according to their cart and pay for the above items via card or cash, the items get delivered.',
			title2: 'A Web Application where user can order Grocery Products.',
			live: 'https://bigbasket.vercel.app/',
			gitHub: 'https://github.com/avinashkvar/bigbasket',
		},
	];
	return (
		<VStack>
            <Text m={8} fontSize={['30px','40px','60px']} fontWeight='bold'>
               - Projects -
            </Text>
			<Flex
				gap={4}
				justify="center"
				align="center"
				margin="30px 0px 30px 0px"
				flexDirection={isLargerThan800 ? 'row' : 'column'}
			>
				{content.map((e, i) => (
					<ProjectCard
						image={e.imge}
						title={e.title}
						discription={e.discription}
						title2={e.title2}
						gitHub={e.gitHub}
						live={e.live}
						key={i}
					/>
				))}
			</Flex>
		</VStack>
	);
};
