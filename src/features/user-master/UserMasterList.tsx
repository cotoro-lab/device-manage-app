import React from "react";
import { Link } from "react-router-dom";
import {
    VStack,
    Box,
    Button
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { UserList } from "../../components/List/UserList";

const page_title: string = "ユーザー一覧画面";

export const UserMasterList = () => {

    return (
        <>
            <VStack
                spacing={4}
                align='stretch'
            >
                <Box>
                    <Header title={page_title} />
                </Box>
                <Box
                    maxW="95%"
                    mx="5%"
                    mt="15px"
                >
                    <Link to="/user/create">
                        <Button colorScheme="telegram">
                            新規登録
                        </Button>
                    </Link>
                </Box>
                <Box
                    maxW="95%"
                    mx="5%"
                    mt="15px"
                >
                    <UserList />
                </Box>
            </VStack>
        </>
    );
};
