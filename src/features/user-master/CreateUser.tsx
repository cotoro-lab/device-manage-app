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

const page_title: string = "ユーザー登録画面";

export const CreateUser = () => {
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
                            <Text flex="3">社員番号</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">氏名</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">所属</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">電話番号</Text>
                            <Input flex="4"></Input>
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">メールアドレス</Text>
                            <Input flex="4"></Input>
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
