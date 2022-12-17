import {
  Button,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
} from "@chakra-ui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostModal = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <ChakraProvider>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent maxW="800">
          <ModalHeader>Create a post!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                ref={initialRef}
                placeholder="First Class Pancake Recipe"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Author</FormLabel>
              <Input placeholder="Bob Jones" />
            </FormControl>
          </ModalBody>

          <Box px={6}>
            <FormControl>
              <FormLabel>Content</FormLabel>
              <ReactQuill theme="snow" value="<p>Hello from CS 306!</p>" />
            </FormControl>
          </Box>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default PostModal;
