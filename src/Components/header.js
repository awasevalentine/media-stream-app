import { Box, Text, Flex } from "@chakra-ui/react";
import "./global.component.style.css"

const Header = () => {
    return ( 
        <Box className="header_main" h="100%" w="100%" >
            <Flex className="content_wrapper" h="140px" direction="row" bg="#292929"
                justifyContent={{base: 'center', lg: 'normal'}} alignItems="center"
            >
                <Box className="logo_Wrapper" h={{base: "50.3px", sm: "60px"}} ml={{base: 'none', lg: '77px'}}></Box>
            </Flex>
            <Box className="heros_wrapper" h={{base: "257px", sm:"400px", lg:"550px"}}>
                <Flex ml={{base: 'none', lg:"77px"}} pt={{base: 'none', lg: '109px'}} h='282px' boxSizing="border-box"  justifyContent={{base:'center', lg: "start"}} alignItem="center">
                    <Text display={{base: 'none', sm: "flex"}} w="390px" fontFamily="DM Sans" fontStyle="normal" fontSize="72px" fontWeight="700"
                    lineHeight="94px" textAlign={{base:'center', lg: "left"}} letterSpacing="-0.05em" color="#FFFFFF"
                    >Watch something incredible</Text>
                </Flex>
            </Box>
        </Box>

     );
}
 
export default Header;