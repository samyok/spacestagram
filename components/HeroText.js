import {Heading} from "@chakra-ui/react";
import config from "./_styles.config";

export default function HeroText({line1, line2}) {
    return <>
        <Heading
            color={'white'}
            fontWeight={'extrabold'}
            fontSize={'5.5rem'}>
            {line1}
        </Heading>
        <Heading
            display={'inline-block'}
            fontWeight={'extrabold'}
            fontSize={'5.5rem'}
            bgGradient={config.redGrad}
            bgClip="text">
            {line2}
        </Heading>
    </>
}
