
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './HomePage'
import { ChakraProvider } from '@chakra-ui/react'


function App() {


  return (
   <ChakraProvider>
     <div className="App">
      <Home/>
    
    </div>
   </ChakraProvider>
  )
}

export default App
