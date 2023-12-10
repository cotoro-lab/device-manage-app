import React from "react";
import {
    VStack, HStack,
    Box,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
    , Button
} from "@chakra-ui/react";

import { Header } from "../../components/Header";

const page_title: string = "ユーザー一覧画面";

export const UserMasterList = () => {
    // 仮のデータを生成します（実際のデータに置き換えてください）
    const data = new Array(20).fill(null).map((_, index) => ({
        id: index,
        culomnnum: index + 1,
        name: `アイテム${index + 1}`,
        quantity: Math.floor(Math.random() * 100)
    }));
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
                    maxW="90%"
                    mx="10%"
                    mt="30px"
                >
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
                                        <Th border="1px solid" borderColor="gray.200">社員番号</Th>
                                        <Th border="1px solid" borderColor="gray.200">氏名</Th>
                                        <Th border="1px solid" borderColor="gray.200">所属</Th>
                                        <Th border="1px solid" borderColor="gray.200">電話番号</Th>
                                        <Th border="1px solid" borderColor="gray.200">メールアドレス</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(item => (
                                        <Tr key={item.id}>
                                            <Td border="1px solid" borderColor="gray.200"><Button size="xs">選択</Button></Td>
                                            <Td border="1px solid" borderColor="gray.200">{item.culomnnum}</Td>
                                            <Td border="1px solid" borderColor="gray.200">{item.name}</Td>
                                            <Td border="1px solid" borderColor="gray.200">{item.quantity}</Td>
                                            <Td border="1px solid" borderColor="gray.200">{item.quantity}</Td>
                                            <Td border="1px solid" borderColor="gray.200">{item.quantity}</Td>
                                        </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </VStack>
        </>
    );
};
