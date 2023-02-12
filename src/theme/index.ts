import { extendBaseTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from '@chakra-ui/react'

import chakraTheme, { ThemeComponentProps} from '@chakra-ui/theme';

// const { Button } = chakraTheme.components;

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


export const theme = extendBaseTheme({
    components: {
        Button
    }
})