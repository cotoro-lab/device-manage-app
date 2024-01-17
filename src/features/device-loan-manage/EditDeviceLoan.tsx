import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    Box,
    HStack, VStack,
    Text,
    Flex,
    Input, Textarea,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";
import { DeviceLoanData, getDeviceLoanData } from "../../types/data/DeviceLoanData";

interface State {
    deviceLoanData: DeviceLoanData;
}

const page_title: string = "貸出状況編集画面";

export const EditDeviceLoan = () => {
    const location = useLocation();
    const { deviceLoanData } = location.state as State;

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
                            <Text flex="3">貸出状況ID</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.id}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末ID</Text>
                            {deviceLoanData && <Input flex="4" value={deviceLoanData.device_id} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末名称</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.device_name}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">ユーザーID</Text>
                            {deviceLoanData && <Input flex="4" value={deviceLoanData.user_id} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">ユーザー名</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.user_name}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">貸出日</Text>
                            {deviceLoanData && <Input flex="4" type="date" value={deviceLoanData.rental_date} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">返却日</Text>
                            {deviceLoanData && <Input flex="4" type="date" value={deviceLoanData.return_date} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">利用目的</Text>
                            {deviceLoanData && <Textarea flex="4" value={deviceLoanData.usage_memo} />}
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
