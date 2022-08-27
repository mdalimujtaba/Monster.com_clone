import { Box, Flex,Image,Text,Link} from "@chakra-ui/react"

function BewareFraud(){
    return(
        <Box bg="rgb(248,231,175)" width='100%' height="120px" marginTop='4%'>
            <Flex>
                <Image src="https://media.monsterindia.com/trex/public/default/images/beware-icon.png" height='120px'/>
                <Box  height="120px">
                    <Text fontSize="md" color="black" fontWeight="600">Beware of fraud</Text>
                    <Text fontSize='sm' color='rgb(124,117,114)'>Monster or it's partners do not charge any money from job seekers for job offers.</Text>
                    <Link paddingLeft="60%" href="https://www.monsterindia.com/info/besafe" color="blueviolet">Know more</Link>
                </Box>
            </Flex>
        </Box>
    )
}
export default BewareFraud