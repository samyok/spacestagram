import {Box, HStack} from "@chakra-ui/react";
import {motion} from "framer-motion";
import Hashtag from "./Hashtag";
import LikeButton from "./LikeButton";

export default function ImageCard({src}) {
    return <Box borderRadius={'2xl'} w={['100%', '50%', '33%']} overflow={'hidden'} pos={'relative'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
            src={src}
            alt="pciture"
            whileHover={{ scale: 1.1, cursor: 'pointer' }}
            transition={{
                default: {duration: .5, ease: "easeInOut"},
            }}
        />
        <HStack pos={'absolute'} bottom={0} p={3}>
            <Hashtag label={'galaxy'}/>
            <Hashtag label={'hubble'}/>
        </HStack>
        <Box pos={'absolute'} top={0} right={0} p={3}>
            <LikeButton size={'md'} likes={9}/>
        </Box>
    </Box>

}
