import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
    Box,
    HStack, VStack,
    Text,
    Flex, Spacer,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";
import { UserData, getUserData } from "../../types/data/UserData";

const page_title: string = "ユーザー詳細画面";
interface State {
    user_id: number;
}

export const DetailUser = () => {
    const location = useLocation();
    const { user_id } = location.state as State;
    const [user, setUser] = useState<UserData>();

    useEffect(() => {
        const all_data: UserData[] = getUserData();
        const data = all_data.find(d => d.user_id === user_id);
        setUser(data);

    }, [user_id]);

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
                            {user && <Text flex="4">{user.user_name}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">所属</Text>
                            {user && <Text flex="4">{user.user_division}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">電話番号</Text>
                            {user && <Text flex="4">{user.tel_num}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">メールアドレス</Text>
                            {user && <Text flex="4">{user.mail_address}</Text>}
                        </HStack>
                        <HStack mt="30px">
                            <BackButton />
                            <Link to={"/user/edit"} state={{ user }}>
                                <Button colorScheme="telegram" ml="20px">編集</Button>
                            </Link>
                            <Spacer />
                            <Flex justify="end" mr="50px">
                                <Button colorScheme="red" mr="50px">削除</Button>
                            </Flex>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </>
    );
};
