import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import AskHere from "../firstcolumn/AskHere";
import PremiumServices from "../firstcolumn/PremiumServices";
import RecentJobs from "../firstcolumn/RecentJobs";

import WFHJobslider from "../firstcolumn/WFHJobslider";
import SpaceForAdd1 from "../secondColumn/add1";
import SpaceForAdd2 from "../secondColumn/add2";
import BewareFraud from "../secondColumn/BewareFraud";
import JobByTopSkill from "../secondColumn/JobByTopSkill";
import PopularDesignation from "../secondColumn/PopularDesignation";

function TwoColumn(){
    return (
       <Box width='86%' margin='auto' >
         <Flex  gap='15px' >
            <Box border="1px solid black " height="auto" width='72%' marginTop='1%'>
                <AskHere/>
                <WFHJobslider/>
                <RecentJobs/>
                <PremiumServices/>
            </Box>
            <Box  height='auto' width='27%' marginTop='1%'>
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