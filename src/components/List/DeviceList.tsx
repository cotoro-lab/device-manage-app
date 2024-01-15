import React from "react";
import {
    VStack, HStack,
    Box,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
    , Button
} from "@chakra-ui/react";



export const DeviceList = () => {
    // 仮のデータを生成します（実際のデータに置き換えてください）
    const data = new Array(20).fill(null).map((_, index) => ({
        id: index,
        device_id: `PC-MMAMM-${("000" + (index + 1)).slice(-3)}`,
        device_name: `Thinkpab${("000" + (index + 1)).slice(-3)}`,
        device_category: `ノートPC`,
        purchase_date: `2023/04/${("00" + (index + 1)).slice(-2)}`,
        disposal_date: `9999/99/99`
    }));
    return (
        <>
            <Box
                maxW="100%"
                maxH="500px"
                borderRadius={20}
                border="8px solid"
                borderColor="gray.200"
                overflowY="scroll">
                <TableContainer overflowX="unset" overflowY="unset">
                    <Table
                        id="user-tb"
                        variant="simple"
                    >
                        <Thead position="sticky" top={-1} zIndex="docked" bg="gray.200">
                            <Tr>
                                <Th border="1px solid" borderColor="gray.200" width="20px"></Th>
                                <Th border="1px solid" borderColor="gray.200">端末ID</Th>
                                <Th border="1px solid" borderColor="gray.200">端末名称</Th>
                                <Th border="1px solid" borderColor="gray.200">端末区分</Th>
                                <Th border="1px solid" borderColor="gray.200">購入日</Th>
                                <Th border="1px solid" borderColor="gray.200">廃棄日</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(item => (
                                <Tr key={item.id}>
                                    <Td border="1px solid" borderColor="gray.200"><Button size="xs">選択</Button></Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.device_id}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.device_name}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.device_category}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.purchase_date}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.disposal_date}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

        </>

    );
};
