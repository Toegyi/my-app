import * as React from "react";
import "./index.css";

import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  Text,
  theme,
  Grid,
  HStack,
  VStack,
} from "@chakra-ui/react";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box>
      <Text>Flex and Spacer: Full width, equal Spacing</Text>
      {/* tailwindcss */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Flex>
        <Box w="70px" h="10" bg="red.500" />
        <Box w="170px" h="10" bg="red.500" />
        <Box w="180px" h="10" bg="red.500" />
      </Flex>

      <Text>
        Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={3}>
        <Box w="170px" h="10" bg="blue.500" />
        <Box w="170px" h="10" bg="blue.500" />
        <Box w="170px" h="10" bg="blue.500" />
      </Grid>

      <Text>
        HStack: The children have equal spacing but don't span the whole
        container
      </Text>
      <HStack spacing="24px" justifyContent={"center"} alignItems={"center"}>
        <Box w="70px" h="10" bg="teal.500"> ONE </Box>
        <Box w="170px" h="10" bg="teal.500" > TWO </Box>
        <Box w="180px" h="10" bg="teal.500" > THREE</Box>
      </HStack>
      <VStack spacing="24px">
        <Box w="170px" h="10" p="2" bg="pink.500" >HELLO TESTING</Box>
        <Box w="170px" h="10" bg="pink.500" />
        <Box w="170px" h="10" bg="pink.500" />
      </VStack>
      <Flex>
        <Box p="4" bg="red.400">
          LeftFlexBox
        </Box>
        <Spacer />
        <Box p="4" bg="green.400">
          RightFlexBox
        </Box>
      </Flex>
    </Box>
  </ChakraProvider>
);
