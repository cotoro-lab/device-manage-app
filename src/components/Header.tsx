import React from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Text,
    HStack, VStack, StackDivider,
    Box
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

type Props = {
    title: string
}

export const Header = (props: Props) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box h='20%' bg='gray.300'>
                <HStack>
                    <Button onClick={onOpen} bg='clear'>
                        <HamburgerIcon />
                    </Button>
                    <Text fontSize='xl' marginLeft='10px'>{props.title}</Text>
                </HStack>
            </Box>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                size='xs'
            >
                <DrawerOverlay />
                <DrawerContent
                    bg='gray.200'
                >
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    <DrawerBody>
                        <VStack
                            divider={<StackDivider borderColor="gray.400" />}
                            spacing={3}
                            align='stretch'
                        >
                            <Link to="/device-loan/list">貸出状況管理画面</Link>
                            <Link to="/device/list">端末管理画面</Link>
                            <Link to="/user/list">ユーザー管理画面</Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
