import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import SpaceForAdd1 from "../secondColumn/add1";
import SpaceForAdd2 from "../secondColumn/add2";
import BewareFraud from "../secondColumn/BewareFraud";
import JobByTopSkill from "../secondColumn/JobByTopSkill";
import PopularDesignation from "../secondColumn/PopularDesignation";

function TwoColumn(){
    return (
       <Box width='86%' margin='auto'border='1px solid yellow' >
         <Flex  gap='15px' >
            <Box border="1px solid black " height="200px" width='130%'>

            </Box>
            <Box  height='auto' width='50%'>
                <SpaceForAdd1/>
                <BewareFraud/>
                <JobByTopSkill/>
                <SpaceForAdd2/>
                <PopularDesignation/>
            </Box>
        </Flex>
       </Box>
    )
}
export default TwoColumn;