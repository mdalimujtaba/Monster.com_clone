import { Box, Grid, Link, Stack, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Box bg="rgb(93,77,168)" height="350px">
        <Grid
          templateColumns="repeat(5, 1fr)"
          width="86%"
          height="100%"
          marginLeft="7%"
          paddingTop="2%"
        >
          <Stack direction={"column"} color="white">
            <Text fontSize={"20px"} fontWeight={500}>
              Job Seekers
            </Text>
            <Link>Job Search</Link>
            <Link>Job Seekers Login</Link>
            <Link>Upload Resume</Link>
            <Link>Career Advice</Link>
            <Link>Search Tips</Link>
            <Link>Free Job Alert</Link>
            <Link>Find Companies</Link>
            <Link>Help</Link>
          </Stack>
          <Stack direction={"column"} color="white">
            <Text fontSize={"20px"} fontWeight={500}>
              Employer
            </Text>
            <Link>Employer Login</Link>
            <Link>Job Posting</Link>
            <Link>Access Resume Database</Link>
            <Link>Join mRecruiters</Link>
            <Link>Buy Online</Link>
          </Stack>
          <Stack direction={"column"} color="white">
            <Text fontSize={"20px"} fontWeight={500}>
              Monster
            </Text>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
            <Link>Career with us</Link>
            <Link>Send Feedback</Link>
            <Link>Testimonials</Link>
            <Link>HTML Sitemap</Link>
            <Link>XML Sitemap</Link>
            <Link>Jobs App</Link>
          </Stack>
          <Stack direction={"column"} color="white">
            <Text fontSize={"20px"} fontWeight={500}>
              Stay Connected
            </Text>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
            <Link>Linkedin</Link>
            <Link>Instagram</Link>
            <Link>Youtube</Link>
          </Stack>
          <Stack direction={"column"} color="white">
            <Text fontSize={"20px"} fontWeight={500}>
              Legal
            </Text>
            <Link>Security & Fraud</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Use</Link>
            <Link>Beware of Fraudsters</Link>
            <Link>Be Safe</Link>
            <Link>Complaints</Link>
          </Stack>
        </Grid>
      </Box>
      <Box height="50px" >
        <Box width={'86%'} margin="auto" paddingTop="10px" >
        <Text >© 2021 Monster - All Rights Reserved</Text>
        </Box>
      </Box>
    </>
  );
}
