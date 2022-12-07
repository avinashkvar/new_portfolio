import { Box, Button, Icon, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import './scrolltop.css'

export const ScrollTop = () => {
	const bg = useColorModeValue('#2d3748', '#f7fafc');
	const color = useColorModeValue('#f7fafc', '#2d3748');
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		if (window.pageYOffset > 10) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisible);
        return ()=>{
            window.removeEventListener('scroll',toggleVisible)
        }
    },[])

	return (
		<Box display="flex" justifyContent="flex-end">
			<Button
				onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
				id="myBtn"
				padding="20px"
				borderRadius="8px"
				m={2}
				_hover={{ bg: bg, color: color }}
                style={visible ? {opacity:100}: {opacity:0}}
			>
				<Icon as={AiOutlineArrowUp} fontSize="35px" fontWeight="bold" />
			</Button>
		</Box>
	);
};
