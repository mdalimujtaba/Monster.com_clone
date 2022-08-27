import { Box, Button, Flex, Image, Link, Text } from "@chakra-ui/react";

function AskHere(){
    return (
       <Link _hover={"textDecoration=none"} href='https://www.monsterindia.com/career-services?utm_source=nudge_homepage&utm_campaign=careerservices'>
         <Box height='130px' border="1px solid rgb(237,237,237)" bg="rgb(255,255,255)"  >
            <Flex>
                <Box  width="25%" height='129px'>
                    <Image height='100%' width='100%' src="https://media.monsterindia.com/trex/public/default/images/cs-banner-budge-1.png"/>
                </Box>
                <Box  width="60%">
                    <Text fontWeight="700" fontSize='20px'>What it feels to have 48% more interview call?</Text>
                    <Text>To get 5X more recuiter views only on your profile</Text>
                </Box>
                <Box style={{display:"flex",alignItems:"flex-end",justifyContent:"end"}}  width='15%'>
                    <Button bg='rgb(107,80,167)' color="white" borderRadius="60% 0% 0% 0%" width="100%" _hover={"bg=rgb(107,80,167)"}>Ask Here</Button>
                </Box>

            </Flex>
        </Box>
       </Link>
    )
}
export default AskHere;