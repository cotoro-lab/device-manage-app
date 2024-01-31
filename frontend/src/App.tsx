import React from 'react';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    HStack, VStack
    , Box
    , Center, Square, Circle, Button
    , Text
} from '@chakra-ui/react';

import AppImage from "./assets/app_image.png";

const App = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch("http://localhost:5000/")
            .then((res) => res.text())
            .then((data) => setMessage(data));
    }, []);

    return (
        <>
            <div className="App">
                <Center>
                    <Box m={50} width={500}>
                        <VStack ml={30} mr={30} mt={5}>
                            <Box width={300} borderRadius="md">
                                <img src={AppImage} />
                            </Box>
                            <Text as="b" fontSize="2xl" color="blue.800">Device Magement App</Text>
                            <Text as="b" fontSize="2xl" color="blue.800">{message}</Text>
                            <Link to="/device-loan/list">
                                <Button mt={5} width={250} bg="gray.100" color="blue.800">
                                    貸出状況管理
                                </Button>
                            </Link>
                            <Link to="/device/list">
                                <Button mt={5} width={250} bg="gray.100" color="blue.800">
                                    端末情報管理
                                </Button>
                            </Link>
                            <Link to="/user/list">
                                <Button mt={5} width={250} bg="gray.100" color="blue.800">
                                    ユーザー情報管理
                                </Button>
                            </Link>
                        </VStack>
                    </Box>
                </Center>
            </div>
        </>
    );
}

export default App;
