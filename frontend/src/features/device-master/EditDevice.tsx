import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    Box,
    HStack, VStack,
    Text,
    Flex,
    Input,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";
import { DeviceData, getDeviceData } from "../../types/data/DeviceData";
import { formatDatetoStr } from "../../utils/dataUtils";

const page_title: string = "端末編集画面";
interface State {
    deviceData: DeviceData;
}

export const EditDevice = () => {
    const location = useLocation();
    const { deviceData } = location.state as State;

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
                            {deviceData && <Text flex="4">{deviceData.device_id}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末名称</Text>
                            {deviceData && <Input flex="4" value={deviceData.device_name} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末区分</Text>
                            {deviceData && <Input flex="4" value={deviceData.device_category} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">購入日</Text>
                            {deviceData && <Input flex="4" type="date" value={formatDatetoStr(deviceData.purchase_date, "-")} />}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">廃棄日</Text>
                            {deviceData && <Input flex="4" type="date" value={formatDatetoStr(deviceData.disposal_date, "-")} />}
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
