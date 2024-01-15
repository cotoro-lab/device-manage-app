import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterConfig } from "./routes/RouterConfig";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <RouterConfig />
        </ChakraProvider>
    </React.StrictMode>
);

