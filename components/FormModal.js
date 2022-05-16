import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const DynamicForm = dynamic(() => import("./Form"), { ssr: false });

export default function FormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box mt={4}>
      <Button onClick={onOpen}>Review Product</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Review Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <DynamicForm closeModal={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}
