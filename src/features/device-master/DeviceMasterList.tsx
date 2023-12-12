import React from "react";
import {
    VStack,
    Box,
    Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { DeviceList } from "../../components/List/DeviceList";

const page_title: string = "端末一覧画面";

export const DeviceMasterList = () => {
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
                    <Link to="/device/create">
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
                    <DeviceList />
                </Box>
            </VStack>
        </>
    );
};
