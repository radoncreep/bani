import { ImageProps, StyleProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";


type AppIconProps = {
    imageSource: string,
    customStyle: StyleProps,
    targetUrl: string;
}

export const AppIcon = (props: AppIconProps): JSX.Element => {
    return (
        <Image 
            style={{

            }}
            src={props.imageSource}
        />
    )
}