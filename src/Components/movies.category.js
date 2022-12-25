import { Box, Card, CardBody, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {getMovies, getAllMovies } from "../Services/getMovies";
import "./global.component.style.css"

const MoviesCategory = ({hide_search, conditional, main_container}) => {

    const [movies, setMovies] = useState([])
    const [search, setSearch ] = useState()
    const debouncedSearchTerm = useDebounce(search, 500);


    useEffect(()=>{
       getMovies().then((res)=>{
            setMovies(res)
        })
        if (debouncedSearchTerm) {
            getAllMovies(debouncedSearchTerm).then((res)=>{
                if(res){
                setMovies(res)
                }else {
                    getMovies().then((res)=>{
                        console.log("reached here")
                        setMovies(res)
                    })
                }
        })
          }
    },[debouncedSearchTerm])


//Method for that delays for some certain period of time before setting the searched term
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value);
    useEffect(
      () => {
        const handler = setTimeout(() => {
          setDebouncedValue(value);
        }, delay);
        return () => {
          clearTimeout(handler);
        };
      },
      [value, delay]
    );
    return debouncedValue;
  } //end

    return ( 
        <Box className={`movies_category_wrapper ${main_container}`} fontWeight="400" fontStyle="normal" 
        fontFamily="DM Sans" h="349px" w="100%" mt={{base: "56px", sm:"63px"}}
        >
        <Flex style={hide_search} direction="column" px={{base: "28px", sm: "77px"}} w="100%"
            >
              <Text
                fontSize={{base: "16px", sm: "24px"}} lineHeight={{base: "21px", sm:"31px"}} color="#000000"
              >Search</Text>
              <Input
                  type="search" mt={{base: "4px"}}
                    value={search}
                    onChange={((e)=>setSearch(e.target.value))}
                  size='sm' w="100%" h={{base: "34px", sm:"54px"}} border="1px solid #000000"
              />
        </Flex>

        <Box mt={{base: "33px", sm:"48px"}} style={conditional}>
            <Text pl="77px" fontFamily="DM Sans" 
            fontWeight="400" fontSize={{base:"18px", md:"24px"}} lineHeight={{base:"23px",md:"31px"}} color="#000000"
            >
                Movie Category Name
            </Text>
            <Box width="100%" pos="absolute" mt={{base:"26px", sm:"21px", lg:"18px"}}>
            <Flex className="items" ml="77px" mb="67px" gap={{base: "13px",sm:"10px"}} direction="row" overflowX="scroll" h="100%">
                {
                        movies.map((res)=>{
                            return (
                                <Box w="100%" key={res.imdbID}>
                                <Card h={{base: "200px", sm:"300px"}} w={{base: "200px", sm:"300px"}} 
                                 bg="#000000"
                                >
                                    <CardBody
                                        fontSize={{md: "18px"}} lineHeight={{md:"23px"}}
                                        display="flex" alignItems="center" color="#FFFFFF" alignSelf="stretch"
                                        order={0} flex="none" flexGrow = {1} justifyContent="center" 
                                    >
                                        <Text 
                                        w={{base:"180px"}} h={{base:"180px"}} display="flex" alignItems="center"
                                        justifyContent="center"
                                         >{res.Title}</Text>
                                    </CardBody>
                                </Card>
            
                            </Box>
                            )
                        })
                }
                
                
            </Flex>
            </Box>
        </Box>
        </Box>
     );
}
 
export default MoviesCategory;