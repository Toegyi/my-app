import * as React from "react"
import {
  ChakraProvider,
  Box,
  Flex,
  Spacer,
  theme,
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Flex>
      <Box p='4' bg='red.400'>
        LeftFlexBox
      </Box>
    <Spacer />
      <Box p='4' bg='green.400'>
        RightFlexBox
      </Box>
    </Flex>
  </ChakraProvider>
)
