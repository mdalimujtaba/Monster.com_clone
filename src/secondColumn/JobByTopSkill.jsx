import { Box, Link, Text } from "@chakra-ui/react";

function JobByTopSkill() {
  return (
    <Box border="1px solid rgb(237,237,237)" width="100%" marginTop="4%" bg="rgb(255,255,255)">
      <Box borderBottom="1px solid grey" padding="2% 0% 2% 0%">
        <Text marginLeft="10%" fontSize="xl" fontWeight="600">
          Jobs by Top Skills
        </Text>
      </Box>
      <Box>
        <Link href="https://www.monsterindia.com/search/accounting-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Accounting Jobs</Text>
        </Link>
        <Link href="ahttps://www.monsterindia.com/search/analytics-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Analytics Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/animation-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Animation Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/architecture-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Architecture Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/banking-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Banking Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/bpo-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">BPO Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/data-science-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Data Science Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/java-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Java Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/marketing-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Marketing Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/mechanical-engineering-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Mechanical Engineering Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/networking-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Networking Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/online-marketing-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Online Marketing Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/seo-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">SEO Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/teaching-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">Teaching Jobs</Text>
        </Link>
        <Link href="https://www.monsterindia.com/search/ux-ui-design-jobs">
          <Text color={"rgb(163,120,142)" } marginLeft="10%">UX/UI Jobs</Text>
        </Link>
      </Box>
    </Box>
  );
}
export default JobByTopSkill;
