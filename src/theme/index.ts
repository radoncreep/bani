import { extendBaseTheme, extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from '@chakra-ui/react'

import chakraTheme from '@chakra-ui/theme';

const { Input } = chakraTheme.components;

const Button= {
    baseStyle: {
        backgroundColor: "#5444F2",
        textColor: "#fff",
        color: '#fff'
    },
    variants: {
        'rect-filled': {
            paddingX: '20px',
            paddingY: '10px',
        },
        'circle-filled': {
            borderRadius: '50%'
        }
    },
    defaultProps: {
        variant: 'rect-filled'
    }
}


const Text = {
    baseStyle: {
        textColor: "#fff",
        color: '#000'
    },
    variants: {
        header1: {
            fontSize: '18px',
            fontWeight: 600,
        },
        header2: {
            fontSize: '14px',
            fontWeight: 500
        }
    },
    defaultProps: {
        variant: 'header1'
    }
}

export const AppTheme = extendBaseTheme({
    components: {
        Button,
        Input,
        Text
    }
})