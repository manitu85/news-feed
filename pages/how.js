import React from 'react';
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react';

const HowItWorks = () => {
  return (
    <Box padding="6" boxShadow="lg" bg="white">
      <Skeleton height="60px" w="700px" />
      <SkeletonText mt="4" noOfLines={3} spacing="2" w="700px" />
      <Skeleton mt="4" height="300px" w="700px" />
    </Box>
  );
};

export default HowItWorks;
