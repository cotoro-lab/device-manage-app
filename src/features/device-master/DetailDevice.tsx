import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
    Box,
    HStack, VStack,
    Text,
    Flex,
    Button,
} from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { BackButton } from "../../components/Button/BackButton";
import { DeviceData, getDeviceData } from "../../types/data/DeviceData";

const page_title: string = "端末詳細画面";
interface State {
    device_id: string;
}

export const DetailDevice = () => {
    const location = useLocation();
    const { device_id } = location.state as State;
    const [deviceData, setDeviceData] = useState<DeviceData>();

    useEffect(() => {
        const all_data = getDeviceData();
        const data = all_data.find(d => d.device_id === device_id);
        setDeviceData(data);
    }, [device_id]);


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
                        <Flex justify="flex-end">
                            <Button colorScheme="red" ml="20px">削除</Button>
                        </Flex>
                        <HStack justify="space-between">
                            <Text flex="3">端末ID</Text>
                            {deviceData && <Text flex="4">{deviceData.device_id}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末名称</Text>
                            {deviceData && <Text flex="4">{deviceData.device_name}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">端末区分</Text>
                            {deviceData && <Text flex="4">{deviceData.device_category}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">購入日</Text>
                            {deviceData && <Text flex="4">{deviceData.purchase_date}</Text>}
                        </HStack>
                        <HStack justify="space-between">
                            <Text flex="3">廃棄日</Text>
                            {deviceData && <Text flex="4">{deviceData.disposal_date}</Text>}
                        </HStack>
                        <HStack mt="30px">
                            <BackButton />
                            <Button colorScheme="telegram" ml="20px">編集</Button>
                        </HStack>
                    </VStack>
                </Box>
            </VStack>
        </>
    );
};
