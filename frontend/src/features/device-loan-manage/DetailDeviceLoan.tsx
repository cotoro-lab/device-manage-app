import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
    Box,
    HStack, VStack,
    Text,
    Flex,
    Spacer,
    Input, Textarea,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";
import { DeviceLoanData, getDeviceLoanData } from "../../types/data/DeviceLoanData";
import { formatDatetoStr } from "../../utils/dataUtils";

interface State {
    device_loan_id: number;
}

const page_title: string = "貸出状況詳細画面";

export const DetailDeviceLoan = () => {
    const location = useLocation();
    const { device_loan_id } = location.state as State;
    const [deviceLoanData, setDeviceLoanData] = useState<DeviceLoanData>();

    useEffect(() => {
        const all_data = getDeviceLoanData();
        const data = all_data.find(d => d.id === device_loan_id);
        setDeviceLoanData(data);
    }, [device_loan_id]);

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
                            {deviceLoanData && <Text flex="4">{deviceLoanData.device_id}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末名称</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.device_name}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">ユーザーID</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.user_id}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">ユーザー名</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.user_name}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">貸出日</Text>
                            {deviceLoanData && <Text flex="4">{formatDatetoStr(deviceLoanData.rental_date, "/")}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">返却日</Text>
                            {deviceLoanData && <Text flex="4">{formatDatetoStr(deviceLoanData.return_date, "/")}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">利用目的</Text>
                            {deviceLoanData && <Text flex="4">{deviceLoanData.usage_memo}</Text>}
                        </HStack>
                        <HStack mt="30px">
                            <BackButton />
                            <Link to={"/device-loan/edit"} state={{ deviceLoanData }}>
                                <Button colorScheme="telegram" ml="20px">編集</Button>
                            </Link>
                            <Spacer />
                            <Flex justify="flex-end">
                                <Button colorScheme="red" ml="20px">削除</Button>
                            </Flex>
                        </HStack>
                    </VStack>
                </Box>
            </VStack >
        </>
    );
};
