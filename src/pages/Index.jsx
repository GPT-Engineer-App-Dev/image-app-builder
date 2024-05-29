import { Container, Button, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="4xl">{count}</Text>
        <Button colorScheme="teal" onClick={increment}>+</Button>
        <Button colorScheme="teal" onClick={decrement}>-</Button>
        <Button colorScheme="red" onClick={reset}>Reset</Button>
      </VStack>
    </Container>
  );
};

export default Index;