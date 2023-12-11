import React from "react";
import {
    VStack,
    Box,
    Button
} from "@chakra-ui/react";


import { Header } from "../../components/Header";
import { DeviceLoanList } from "../../components/List/DeviceLoanList";

const page_title: string = "貸出状況一覧";

export const DeviceLoanManage = () => {
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
                    <Button>新規登録</Button>
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
