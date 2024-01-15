import React from "react";
import {
    Box,
    HStack, VStack,
    Text,
    Input,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";

const page_title: string = "端末登録画面";

export const DetailDevice = () => {
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
                            <Text flex="3">端末名称</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末区分</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">購入日</Text>
                            <Input flex="4" type="date"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">廃棄日</Text>
                            <Input flex="4" type="date"></Input>
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
