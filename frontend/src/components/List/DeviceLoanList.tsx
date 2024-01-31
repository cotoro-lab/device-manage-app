import React from "react";
import { Link } from "react-router-dom";
import {
    VStack, HStack,
    Box,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
    , Button
} from "@chakra-ui/react";

import { getDeviceLoanData } from "../../types/data/DeviceLoanData";


export const DeviceLoanList = () => {
    // 仮のデータを生成します（実際のデータに置き換えてください）
    const data = getDeviceLoanData();

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
                                <Th border="1px solid" borderColor="gray.200">端末名称</Th>
                                <Th border="1px solid" borderColor="gray.200">ユーザー名</Th>
                                <Th border="1px solid" borderColor="gray.200">貸出日</Th>
                                <Th border="1px solid" borderColor="gray.200">返却日</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(item => (
                                <Tr key={item.id}>
                                    <Td border="1px solid" borderColor="gray.200">
                                        <Link to={"/device-loan/detail"} state={{ device_loan_id: item.id }}>
                                            <Button size="xs">選択</Button>
                                        </Link>
                                    </Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.device_name}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.user_name}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.rental_date}</Td>
                                    <Td border="1px solid" borderColor="gray.200">{item.return_date}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

        </>

    );
};
