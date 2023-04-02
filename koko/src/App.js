import './App.css';
import {Box} from '@chakra-ui/react'
import AllRoutes from "./Routes/AllRoutes"

function App() {
  return (
    <div className="App">
      <Box  w="100%" margin="auto">
        <AllRoutes/>
      </Box>


    </div>
  );
}
export default App;
