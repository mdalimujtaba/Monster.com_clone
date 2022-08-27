import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Flex,
  Link,
  Grid,
  GridItem,
  Image,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  
  arrows: false,
  
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 3,
  slidesToScroll: 1,
};

export default function WFHJobslider() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
   {
    id:1,
    title:'Coders Brain Technology',
    designation:"React native",
    experience:"4 -8 Years",
    location:"Remote"
   },
   {
    id:2,
    title:'Coders Brain Technology',
    designation:"Front-end Developer",
    experience:"4 -8 Years",
    location:"Remote"
   },
   {
    id:3,
    title:"Coders Brain Technology",
    designation:"SDE-3 API/Backend",
    experience:"5 - 10 Years",
    location:"Mumbai,Remote"
   },
   {
    id:4,
    title:"The Reycruit",
    designation:"UI - React JS Developer",
    experience:"3 -10 Years",
    location:"Hyderabad/Secunderabad, Telangana"
   },
   {
    id:5,
    title:"The Reycruit",
    designation:"Big Data Senior Developer",
    experience:"8 -12 Years",
    location:"Hyderabad/Secunderabad, Telangana"
   },
   {
    id:6,
    title:"The Reycruit",
    designation:"Big Data Developer",
    experience:"5-8 Years",
    location:"Hyderabad/Secunderabad, Telangana"
   },
   {
    id:7,
    title:'Goalreify Ventures Private',
    designation:"Senior Environment Artist",
    experience:"4 -9 Years",
    location:"Bangaluru/Bangalore,Pune"
   }
   
  ];

  return (
    <Box
      marginTop='2%'
      position={'relative'}
      height={'260px'}
      width='100%'
      overflow={'hidden'}
      
      bg="rgb(255,255,255)">
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <Flex
          justifyContent="space-between"
          alignItems="center"
          width="94%"
          marginTop="2%"
          marginLeft="3%"
        >
          <Text fontSize="23px" fontWeight="600">
          Work From Home Jobs
          </Text>
          <Link  href="https://www.monsterindia.com/search/work-from-home-jobs">
            <Text color='rgb(93,116,199)'>View All </Text>
          </Link>
        </Flex>
      {/* Left Icon */}
      <IconButton
        borderRadius="50%"
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiChevronLeft size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
      borderRadius="50%"
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiChevronRight size="40px" />
      </IconButton>
      {/* Slider */}
    <Box width="80%" margin="auto">
    <Slider {...settings} ref={(slider) => setSlider(slider)}>
       {cards.map((item) => (
             <Box
             key={item.id}
             marginTop='1rem'
             
            >
             <Link _hover='textDecoration=none' href='https://www.monsterindia.com/job/ui-react-js-developer-the-reycruit-hyderabad-secunderabad-telangana-7051476'>
             <Box width="90%" margin="auto" border="1px solid rgb(237,237,237)" bg="rgb(247,247,247)" height="150px">
                <Text margin='auto' fontWeight={700}>{item.title}</Text>
                <Text margin='auto' color="grey" fontSize="15px">{item.designation}</Text>
                <Text margin='auto'>Experience:{item.experience}</Text>
                <Text margin='auto'>Location:{item.location}</Text>
             </Box>
             </Link>
           </Box>
        ))}
      </Slider>
    </Box>
      
    </Box>
  );
}