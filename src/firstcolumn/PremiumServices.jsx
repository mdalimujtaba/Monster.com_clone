import { Box, Center, Flex, Grid, GridItem, Link, Text,Image } from "@chakra-ui/react";

function PremiumServices() {
    const data=[
        {
            id:1,
            image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/aJ98j6upmWI4DEMecdM4NTPzesMybGMNVQBA3Xod.png",
            title:"Resume Writing",
            desciption:"Professionally written resume + cover letter",
            link:"https://www.monsterindia.com/career-services/resume-services"
            
        },
        {
            id:2,
            image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/Xra3gEbEDCZChclt6KyeY08aT14mQIemY87tp56k.png",
            title:"Featured Profile",
            desciption:"Better your chances of getting shortlisted",
            link:"https://www.monsterindia.com/career-services/featured-profile-services"
        },
        {
            id:3,
            image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/K109Ubc6KIVisXQSRJaQhTSXJpOAkU0UUA2dpe7R.png",
            title:"Profile Highlighter",
            desciption:"Grab the attention of employers",
            link:"https://www.monsterindia.com/career-services/profile-highlighter"
        },
        {
            id:4,
            image:"https://media.monsterindia.com/trex/prod-cdn/media/product/2021/august/UWwaneAf2OBhqcauh7PujGU5mIavChpFlRnZabZp.png",
            title:"Career Booster",
            desciption:"Get the power of two in one and speed up your job search",
            link:"https://www.monsterindia.com/career-services/career-booster"
        }
    ]
  return (
    <Box  height="300px" bg="rgb(255,255,255)">
      
        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="94%"
          marginTop="2%"
          marginLeft="3%"
        >
          <Text fontSize="23px" fontWeight="600">
            Premium Services
          </Text>
          <Link href="https://www.monsterindia.com/career-services/">
            <Text color='rgb(93,116,199)'>View All </Text>
          </Link>
        </Flex>
        <Grid templateColumns='repeat(4, 1fr)' gap={3} width="94%"  marginLeft="3%">
            {data.map((item)=>(
                <GridItem key={item.id} border="1px solid rgb(237,237,237)" bg='rgb(255,249,252)' marginTop="4%">
                    <Image src={item.image}  margin="auto" height='30%'/>
                    <Text margin='4%' fontWeight={700}>{item.title}</Text>
                    <Box height='80px'>
                    <Text margin='4%' fontSize='sm'>{item.desciption}</Text>
                    </Box>
                    <Box   paddingLeft='50%'>
                        <Link href={item.link}><Text color='rgb(93,116,199)'>Read more</Text></Link>
                    </Box>
                </GridItem>
            ))}
        </Grid>
      
    </Box>
  );
}
export default PremiumServices;
