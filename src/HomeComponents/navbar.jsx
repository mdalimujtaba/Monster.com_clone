import { Box, Center, Flex, Image,Stack,Button, border } from "@chakra-ui/react";
function Navbar() {
  return (
    <div >
      <Center
        border="1px solid black"
        width="100%"
        height="75px"
        p={4}
        bg='rgb(255,255,255)'
        
      >
        <Flex color="white" border="1px solid yellow" width="90%" height="100%">
          <Center border="1px solid blue" height="100%" width="68%">
            
            <Stack direction="row" spacing={4} align="center">
            <Center  >
              <Image
                src="https://media.monsterindia.com/trex/public/default/images/monster-logo.svg"
                alt="monster-logo"
                style={{height:"40px"}}
              />
            </Center>
            <div className="navbarButtondiv"  >
              <button id="navJobSearch" className="navJobSearch" border="1px solid black"  >
                JOB SEARCH
              </button>
              <div className="jobsearchMenu">
                <div className="menuItems" >JOBS BY LOCATION</div>
                <div className="menuItems">JOBS BY SKILLS</div>
                <div className="menuItems">JOBS BY TITLE</div>
                <div className="menuItems">JOBS BY FUNCTIONS</div>
                <div className="menuItems">JOBS BY INDUSTRY</div>
                <div className="menuItems">JOBS BY EDUCATION</div>
                <div className="menuItems">FRESHER JOBS</div>
                <div className="menuItems">OTHERS JOBS</div>
                <div className="menuItems">JOBS BY COMPANY</div>
                <div className="menuItems">JOBS BY CONSULTANT</div>
                <div className="menuItems">JOBS BY RECRUITER</div>
              </div>
            </div>  
              <div className="navbarButtondiv">
                <button id="navwfh" className="navJobSearch"   >
                WORK FROM HOME
              </button>
              <div className="jobsearchMenu">
                <div className="menuItems" >WORK FROM HOME JOBS IN BANGALORE</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN MUMBAI</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN CHENNAI</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN HYDERABAD</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN KOLKATA</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN PUNE</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN DELHI NCR</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN NOIDA</div>
                <div className="menuItems" >WORK FROM HOME JOBS IN GURGAON</div>
                <div className="menuItems" >VIEW ALL WORK FROM HOME JOBS  </div>
              </div>
              </div>
              <div className="navbarButtondiv">
              <button id="navCT" className="navJobSearch"  >
                CAREER TIPS
              </button>
              <div className="jobsearchMenu">
                <div className="menuItems" >COVID-19 CAREER ADVICE</div>
                <div className="menuItems" >JOB SEARCH STATEGY</div>
                <div className="menuItems" >RESUME & COVER LETTER</div>
                <div className="menuItems" >INTERVIEW TIPS</div>
                <div className="menuItems" >CAREER MANAGEMENT</div>
                <div className="menuItems" >SALARY NEGOTIATION</div>
                <div className="menuItems" >COURSES</div>
              </div>
              </div>
             <div className="navbarButtondiv">
             <button id="navPS" className="navJobSearch" background="rgb(253,233,189)" >
                PREMIUM SERVICES
              </button>
              <div className="jobsearchMenu">
                <div className="menuItems" >FEATURED PROFILE</div>
                <div className="menuItems" >PROFILE HIGHLIGHTER</div>
                <div className="menuItems" >CAREER BOOSTER</div>
                <div className="menuItems" >RESUME WRITING</div>
                <div className="menuItems" >LINKEDIN MAKEOVER</div>
                <div className="menuItems" >MOCK INTERVIEW</div>
                <div className="menuItems" >PSYCHOMETRIC TEST</div>               
              </div>
             </div>
              <div className="navbarButtondiv" >
              <button id="navM" className="navJobSearch"  >
                MORE
              </button>
              <div className="jobsearchMenu">
                <div className="menuItems" >SPECIAL ABILITY JOBS</div>
                <div className="menuItems" >FREE JOB ALERT</div>
                <div className="menuItems" >EMPLOYMENT INDEX</div>
                <div className="menuItems" >SALARY</div>
                <div className="menuItems" >SEARCH TIPS</div>
                <div className="menuItems" >JOBS APP</div>              
              </div>
              </div>
            </Stack>
          </Center>
          <Center border="1px solid red" height="100%" width="40%">
           <Stack direction="row" spacing={2} align="center">
           <button id="login" className="login1">JOBSEEKER LOGIN</button>
           <div id="employerDiv">
           <button id="forEmployer" className="login1">FOR EMPLOYERS</button>
           <div className="jobsearchMenu">
                <div className="menuItems" >CONNECT WITH US</div>
                <div className="menuItems" >BUY ONLINE</div>
                <div className="menuItems" >EMPLOYER LOGIN</div>
                             
              </div>
           </div>
           </Stack>

          </Center>
        </Flex>
      </Center>
    </div>
  );
}
export default Navbar;
