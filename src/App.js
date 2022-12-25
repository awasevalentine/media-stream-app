import { ChakraProvider } from '@chakra-ui/react';
import Layout from './Pages/default_layout';

function App() {
  return (
    <ChakraProvider>
      <Layout />
    </ChakraProvider>
  );
}

export default App;
