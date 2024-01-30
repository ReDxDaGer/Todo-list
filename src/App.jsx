import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

function App() {
  return (
    <>
    <Flex w='100%' h='100vh'>
      <Flex w='100%' flexDir={'column'} ml={'20%'}>
        <Text>Tasks</Text>
      </Flex>
    </Flex>
    </>
  )
}

export default App