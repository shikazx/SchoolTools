
// import {Button} from "@nextui-org/button";
import {Box, TapArea, Text} from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { useState, useEffect } from 'react';





const Home = () => {



    return (  
        <div className = "home">

            <h2>Homepage</h2>

            <TapAreaBox>

            </TapAreaBox>

        </div>

        

    );
}

export default Home;



function TapAreaBox() {
    return (
        <Box
            alignItems="center"
            display="flex"
            height="100%"
            justifyContent="center"
            padding={8}

        >
            <Box borderStyle="sm" rounding={4} width={170}>
                <TapArea rounding={4}>
                    <Box
                        alignItems="center"
                        direction="column"
                        display="flex"
                        padding={4}
                    >
                        <Text className="tapBoxTitle" weight="bold" >Merge PDF</Text>
                        <img className ="tapBoxImage"
                            src="pdf.png"
                            alt={'pdf'}
                             style={{ width: '100%', height: '100%', padding: '16px'}}

                        />
                    </Box>
                </TapArea>
            </Box>
        </Box>
    );
}
