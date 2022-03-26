import { Button, Flex, Heading, Input, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";


export default function Home() {


  const formBackground = useColorModeValue("gray.100", "gray.700")
  
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" onLoad={toggleColorMode}>
      <Flex direction="column" background={formBackground} p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
        <Input placeholder="nanitamo19@gmail.com" variant="filled" mb={3} type="email" />
        <Input placeholder="*************" variant="filled" mb={6} type="password" />
        <Button mb={6} colorScheme="teal">Login</Button>
        <Link>Esqueceu a sua senha?</Link>

        {/* <Button onClick={toggleColorMode}>Dark Mode</Button> */}
      </Flex>
    </Flex>
  )
}
