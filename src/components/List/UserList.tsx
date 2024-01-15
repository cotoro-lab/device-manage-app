import React from "react";
import {
    VStack, HStack,
    Box,
    Table, Thead, Tbody, Tr, Th, Td, TableContainer
    , Button
} from "@chakra-ui/react";



export const UserList = () => {
    const color = "gray.200";
    // 仮のデータを生成します（実際のデータに置き換えてください）
    const data = new Array(20).fill(null).map((_, index) => ({
        id: index,
        user_id: 10002300000 + index + 1,
        user_name: `田中太郎 ${index + 1}`,
        user_division: `田中太郎 ${index + 1}`,
        tel_num: `080-3333-22${("00" + (index + 1)).slice(-2)}`,
        mail_address: `hoge@gmail.com${index + 1}`
    }));
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
                                    <Td border="1px solid" borderColor={color}><Button bg={color} size="xs">選択</Button></Td>
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
