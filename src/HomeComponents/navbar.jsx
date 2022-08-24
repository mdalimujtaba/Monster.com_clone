import { Box, Center, Flex, Image,Stack,Button, border } from "@chakra-ui/react";
function Navbar() {
  return (
    <div>
      <Center
        border="1px solid black"
        width="100%"
        height="75px"
        p={4}
        color="black"
      >
        <Flex color="white" border="1px solid yellow" width="90%" height="100%">
          <Center border="1px solid blue" height="100%" width="68%">
            
            <Stack direction="row" spacing={4} align="center">
            <Center  >
              <Image
                src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
                alt="monster-logo"
                height="fit-content"
              />
            </Center>
            <div className="navbarButtondiv"  >
              <button id="navJobSearch" className="navJobSearch" border="1px solid black"  color="black">
                JOB SEARCH
              </button>
            </div>  
              <div className="navbarButtondiv">
                <button id="navwfh" className="navJobSearch"  color="black" >
                WORK FROM HOME
              </button>
              </div>
              <div className="navbarButtondiv">
              <button id="navCT" className="navJobSearch"  color="black">
                CAREER TIPS
              </button>
              </div>
             <div className="navbarButtondiv">
             <button id="navPS" className="navJobSearch" background="rgb(253,233,189)" color="black">
                PREMIUM SERVICES
              </button>
             </div>
              <div className="navbarButtondiv" >
              <button id="navM" className="navJobSearch" color="black" >
                MORE
              </button>
              </div>
            </Stack>
          </Center>
          <Center border="1px solid red" height="100%" width="40%">
           <Stack direction="row" spacing={2} align="center">
           <button id="login" className="login1">JOBSEEKER LOGIN</button>
            <button id="forEmployer" className="login1">FOR EMPLOYERS</button>
           </Stack>

          </Center>
        </Flex>
      </Center>
    </div>
  );
}
export default Navbar;
