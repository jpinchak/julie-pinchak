import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'
import { theme } from '../app/theme'

type ModalProps = {
  variant?: string;
  isOpen: boolean;
  onClose: () => void;
  modalTitle?: string;
  bodyText: string;
  buttonText: string;
  buttonAction: () => void;
  secondaryButtonText?: string;
  secondaryButtonAction?: () => void;
}

function Modal({
  variant = 'default',
  isOpen,
  onClose,
  modalTitle,
  bodyText,
  buttonText,
  buttonAction,
  secondaryButtonText,
  secondaryButtonAction
}: ModalProps) {

  const handleMainButtonClick = () => {
    onClose();
    buttonAction();
  }

  const handleSecondayButtonClick = () => {
    secondaryButtonAction?.();
    onClose();
  }

  return (
    <ChakraModal isCentered size="md" isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        bg={'white'}
        width={['90%', null, null, null, '50%']}
        minH={'38%'}
        px={0}
      >
        <ModalHeader color="blues.500" pt={7} alignSelf={'center'}>{modalTitle}</ModalHeader>
        <ModalCloseButton color="blues.500" pt={1} />
        <ModalBody px={[5, null, null, 20]} color="blues.500" textAlign={'center'}>{bodyText}</ModalBody>

        <ModalFooter justifyContent='center' pb={6}>
          <Button colorScheme='pinks' variant='solid' onClick={handleMainButtonClick} mx={2}>{buttonText}</Button>
          { secondaryButtonText && 
            <Button colorScheme='pinks' variant='outline' onClick={handleSecondayButtonClick} mx={2}>{secondaryButtonText}</Button>
          }
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}

export default Modal