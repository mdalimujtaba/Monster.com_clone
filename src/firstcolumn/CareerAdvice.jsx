import {
  Box,
  Flex,
  Link,
  Text,
  ListItem,
  OrderedList,
  SimpleGrid,
} from "@chakra-ui/react";

function CareerAdvice() {
  return (
    <Box height="300px" bg="rgb(255,255,255)">
      <Flex
        justifyContent="space-between"
        alignItems="center"
        width="94%"
        marginTop="2%"
        marginLeft="3%"
        paddingTop="2%"
      >
        <Text fontSize="23px" fontWeight="600">
          Career Advice and Tips
        </Text>
        <Link href="https://www.monsterindia.com/career-advice/">
          <Text color="rgb(93,116,199)">View All </Text>
        </Link>
      </Flex>
      <OrderedList>
        <Box width="94%" marginTop="2%" marginLeft="3%">
          <SimpleGrid columns={2} spacing={3}>
            <Box width="80%">
              <ListItem>
                20+ Students Resume Examples & Templates For All Students
              </ListItem>
            </Box>
            <Box width="80%">
              <ListItem>Java Developer Resume </ListItem>
            </Box>
            <Box width="80%">
              <ListItem>
                Student Resume Examples: Samples, Guide & Writing Tips to get
                Internship Quickly
              </ListItem>
            </Box>
            <Box width="80%">
              <ListItem>5 Best Resume Format with Cover Letter</ListItem>
            </Box>
            <Box width="80%">
              <ListItem>
                Best Resume Format for Freshers: Samples, Templates, and Writing
                Tips
              </ListItem>
            </Box>
            <Box width="80%">
              <ListItem>How to Write a Resume for Job </ListItem>
            </Box>
          </SimpleGrid>
        </Box>
      </OrderedList>
    </Box>
  );
}
export default CareerAdvice;
