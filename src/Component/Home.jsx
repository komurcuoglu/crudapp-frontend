
import { Box, Typography, styled } from '@mui/material';
import Spring from '../Assets/Images/spring.png';
import React from '../Assets/Images/react.png';
const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});

const Home = () => {
    
    return (
        <Header>
            <Typography variant="h4">Anasayfa</Typography>
            <Box style={{display: 'flex'}}>
                <Image src={React}  />
                <Image src={Spring} />
            </Box>
        </Header>
    )
}

export default Home;