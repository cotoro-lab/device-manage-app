import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    Box,
    HStack, VStack,
    Text,
    Input,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";
import { UserData, getUserData } from "../../types/data/UserData";

const page_title: string = "ユーザー編集画面";
interface State {
    user: UserData;
}

export const EditUser = () => {
    const location = useLocation();
    const { user } = location.state as State;

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
                            {user && <Text flex="4">{user.user_id}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">氏名</Text>
                            {user && <Input flex="4" value={user.user_name} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">所属</Text>
                            {user && <Input flex="4" value={user.user_division} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">電話番号</Text>
                            {user && <Input flex="4" value={user.tel_num} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">メールアドレス</Text>
                            {user && <Input flex="4" value={user.mail_address} />}
                        </HStack>
                        <HStack mt="30px">
                            <BackButton />
                            <Button colorScheme="telegram" ml="20px">更新</Button>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </>
    );
};
