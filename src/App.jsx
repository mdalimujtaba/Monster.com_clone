
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './HomePage'
import { ChakraProvider } from '@chakra-ui/react'


function App() {


  return (
   <ChakraProvider>
     <div className="App" style={{backgroundColor:"rgb(245,245,245)"}}>
      <Home/>
    
    </div>
   </ChakraProvider>
  )
}

export default App
