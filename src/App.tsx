import React from 'react';
import { Link } from "react-router-dom";
import { HStack, VStack } from '@chakra-ui/react';

const App = () => {
    return (
        <>
            <div className="App">
                <VStack>
                    <p>Device Magement App</p>
                    <Link to="/device-loan/list">貸出状況管理</Link>
                    <Link to="/device/list">端末情報管理</Link>
                    <Link to="/user/list">ユーザー情報管理</Link>
                </VStack>
            </div>
        </>
    );
}

export default App;
