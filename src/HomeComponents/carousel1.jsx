import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
 Image,
 Link
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots:false,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  slidesToShow: 6,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      image:
        'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/june/ZnNwNuQzQu0ja8wsf8vGg4ajsi5RRpd7vlOX71RC.jpeg',
        link:"https://company.monsterindia.com/tcsin/index.html?searchId=7107f9f4-4f3e-4f28-a3ea-bcfb7324b8ff"
    },
    {
      image:
        'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg',
        link:"https://company.monsterindia.com/harmanin/"
    },
    {
      image:
        'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg',
        link:"https://www.monsterindia.com/srp/results?query=xSP_genptinx,xgenpactindinx&searchId=70707412-10ef-4a97-9982-21066e0ab7d7"
    },
    {
        image:
          'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/august/nGqLoPmZun0GxVuKOgaEBB7Q63BGdyOPqHxRpTCl.jpeg',
          link:"https://www.monsterindia.com/srp/results?query=xsynopsysinx&searchId=c905848c-ac32-48f4-a91f-0dbbeadf3bd4"
      },
      {
        image:
          'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg',
          link:"https://www.monsterindia.com/srp/results?query=xcogninx&searchId=d3c25b9f-e966-4c16-8778-ee8f64d29921"
      },
      {
        image:
          'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg',
          link:"https://www.monsterindia.com/srp/results?query=xcogninx&searchId=d3c25b9f-e966-4c16-8778-ee8f64d29921"
      },
      {
        image:
          'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg',
          link:"https://www.monsterindia.com/srp/results?query=xcogninx&searchId=d3c25b9f-e966-4c16-8778-ee8f64d29921"
      },
      {
        image:
          'https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/I32QY2OzbvdjaGT1p5mPc7YPDdxkEOAMeyIt3vHT.jpeg',
          link:"https://www.monsterindia.com/srp/results?query=xcogninx&searchId=d3c25b9f-e966-4c16-8778-ee8f64d29921"
      },
      
  ];

  return (
    <Box
      position={'relative'}
      height={'90px'}
      width={'full'}
      overflow={'hidden'}
      >
      
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
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            marginTop='1rem'
           >
            <Box width="70%" margin="auto" >
                <Link href={card.link}>
                    <Image margin="auto" src={card.image} />
                </Link>
                
            </Box>
           
          </Box>
        ))}
      </Slider>
    </Box>
  );
}