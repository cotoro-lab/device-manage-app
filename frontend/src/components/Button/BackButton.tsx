import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Button
} from "@chakra-ui/react"

export const BackButton = () => {

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <Button colorScheme="red" variant='outline' onClick={handleBack}>戻る</Button>
    );
};
