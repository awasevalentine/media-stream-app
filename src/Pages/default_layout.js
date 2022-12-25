import { Box } from "@chakra-ui/react";
import Header from "../Components/header";
import MoviesCategory from "../Components/movies.category";


const Layout = () => {
    return ( 
        <Box className="default_layout" >
            <Header />
            <MoviesCategory/>
            <MoviesCategory hide_search={{display: "none"}} main_container="main_container" conditional={{marginTop: '0px'}} />
        </Box>
     );
}
export default Layout;