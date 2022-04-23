import * as React from 'react'
import { Center, Container, Heading, Button } from '@chakra-ui/react'

function Home() {
  return (
    <Container my="6">
      <Heading textAlign="center">Geolocation</Heading>
      <Center mt="6">
        <Button colorScheme="primary">Click Me</Button>
      </Center>
    </Container>
  )
}

export default Home
