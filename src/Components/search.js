import { Box, Input, Text, Flex } from "@chakra-ui/react";

const Search = () => {
    return ( 
        <Box className="search_wrapper" w="100%" h="100%" pt="63px">
            <Flex direction="column" px="77px" w="100%" gap="4" 
            fontWeight="400" fontStyle="normal" fontFamily="DM Sans"
            fontSize="24px" lineHeight="31px" color="#000000"
            >
              <Text className="search_label">Search</Text>
              <Input
                  type="search"
                    // value={value}
                    // onChange={handleChange}
                  size='sm' w="100%" h="54px" border="1px solid #000000"
                  className="search_input_field"
              />
            </Flex>
        </Box>

     );
}
 
export default Search;