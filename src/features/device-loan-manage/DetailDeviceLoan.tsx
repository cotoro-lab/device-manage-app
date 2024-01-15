import React from "react";
import {
    Box,
    HStack, VStack,
    Text,
    Input, Textarea,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";

const page_title: string = "貸出状況登録画面";

export const DetailDeviceLoan = () => {
    return (
        <>
            <VStack
                spacing={4}
                align='stretch'
            >
                <Header title={page_title} />

                <Box
                    maxW="80%"
                    mx="10%"
                    mt="15px"

                >
                    <VStack
                        align="stretch"
                        maxW="60%"
                    >
                        <HStack justify="space-between">
                            <Text flex="3">端末ID</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">ユーザーID</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">貸出日</Text>
                            <Input flex="4" type="date"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">返却日</Text>
                            <Input flex="4" type="date"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">利用目的</Text>
                            <Textarea flex="4"></Textarea>
                        </HStack>
                        <HStack mt="30px">
                            <BackButton />
                            <Button colorScheme="telegram" ml="20px">登録</Button>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </>
    );
};
