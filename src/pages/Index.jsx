import { Box, Flex, Input, InputGroup, InputRightElement, VStack, Text, Avatar, Divider, IconButton, Container, Heading, Spacer, Button } from "@chakra-ui/react";
import { FaPaperPlane, FaUserCircle } from "react-icons/fa";

const Index = () => {
  // Mock data for contacts and messages
  const contacts = ["Alice", "Bob", "Charlie", "Dave"];
  const messages = [
    { sender: "Alice", content: "Hey, how are you?", time: "10:30 AM" },
    { sender: "You", content: "I am good! How about you?", time: "10:32 AM" },
    { sender: "Alice", content: "Doing well, thanks for asking!", time: "10:35 AM" },
  ];

  return (
    <Container maxW="container.xl" p={5}>
      <Flex h="90vh" bg="gray.100" borderRadius="lg" overflow="hidden">
        {/* Sidebar: Contact List */}
        <VStack w="300px" p={5} spacing={4} bg="white" boxShadow="md">
          <Heading size="md">Contacts</Heading>
          <Divider />
          {contacts.map((contact, index) => (
            <Flex key={index} align="center" w="100%">
              <Avatar size="sm" name={contact} />
              <Text ml={3}>{contact}</Text>
            </Flex>
          ))}
        </VStack>

        {/* Chat Area */}
        <Flex direction="column" flex="1" p={5}>
          {/* Chat Header */}
          <Flex align="center" p={3} boxShadow="sm" bg="white">
            <Avatar size="md" icon={<FaUserCircle />} />
            <Text ml={3} fontWeight="bold">
              Alice
            </Text>
            <Spacer />
            <Text fontSize="sm">Last seen today at 10:35 AM</Text>
            <Button colorScheme="blue" size="sm" ml={4}>
              Subscribe
            </Button>
          </Flex>

          {/* Message Display Area */}
          <VStack flex="1" p={3} spacing={4} align="start" overflowY="auto">
            {messages.map((message, index) => (
              <Flex key={index} alignSelf={message.sender === "You" ? "end" : "start"}>
                <Box p={3} bg={message.sender === "You" ? "blue.100" : "gray.200"} borderRadius="md">
                  <Text fontSize="sm">{message.content}</Text>
                  <Text fontSize="xs" opacity="0.7">
                    {message.time}
                  </Text>
                </Box>
              </Flex>
            ))}
          </VStack>

          {/* Input Box */}
          <InputGroup boxShadow="sm" mt={3}>
            <Input pr="3.5rem" placeholder="Type a message..." />
            <InputRightElement width="3rem">
              <IconButton aria-label="Send message" icon={<FaPaperPlane />} />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
