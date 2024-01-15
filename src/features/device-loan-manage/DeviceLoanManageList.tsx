import React from "react";
import {
    VStack,
    Box,
    Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


import { Header } from "../../components/Header";
import { DeviceLoanList } from "../../components/List/DeviceLoanList";

const page_title: string = "貸出状況一覧";

export const DeviceLoanManageList = () => {
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
                    <Link to="/device-loan/create">
                        <Button colorScheme="telegram">新規登録</Button>
                    </Link>
                </Box>
                <Box
                    maxW="95%"
                    mx="5%"
                    mt="15px"
                >
                    <DeviceLoanList />
                </Box>
            </VStack>
        </>

    );
};
