import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    VStack, HStack,
    Box,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
    , Button
} from "@chakra-ui/react";

import { getUserData } from "../../types/data/UserData";


export const UserList = () => {
    const color = "gray.200";
    // 仮のデータを生成します（実際のデータに置き換えてください）
    const data = getUserData();

    return (
        <>
            <Box
                maxW="100%"
                maxH="500px"
                borderRadius={20}
                border="8px solid"
                borderColor={color}
                overflowY="scroll">
                <TableContainer overflowX="unset" overflowY="unset">
                    <Table
                        id="user-tb"
                        variant="simple"
                    >
                        <Thead position="sticky" top={-1} zIndex="docked" bg={color}>
                            <Tr>
                                <Th border="1px solid" borderColor={color} width="20px"></Th>
                                <Th border="1px solid" borderColor={color}>社員番号</Th>
                                <Th border="1px solid" borderColor={color}>氏名</Th>
                                <Th border="1px solid" borderColor={color}>所属</Th>
                                <Th border="1px solid" borderColor={color}>電話番号</Th>
                                <Th border="1px solid" borderColor={color}>メールアドレス</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {data.map(item => (
                                <Tr key={item.id}>
                                    <Td border="1px solid" borderColor={color}>
                                        <Link to={"/user/detail"}>
                                            <Button bg={color} size="xs" >選択</Button>
                                        </Link>
                                    </Td>
                                    <Td border="1px solid" borderColor={color}>{item.user_id}</Td>
                                    <Td border="1px solid" borderColor={color}>{item.user_name}</Td>
                                    <Td border="1px solid" borderColor={color}>{item.user_division}</Td>
                                    <Td border="1px solid" borderColor={color}>{item.tel_num}</Td>
                                    <Td border="1px solid" borderColor={color}>{item.mail_address}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

        </>

    );
};
