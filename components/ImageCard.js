import {Box, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import {motion} from "framer-motion";
import Hashtag from "./Hashtag";
import LikeButton from "./LikeButton";
import {optimize} from "../includes/api";
import config from "./_styles.config";
import dayjs from "dayjs";

export default function ImageCard({image, onDetails}) {

    if (!image || image.media_type !== 'image') return null;

    let src = optimize(image.hdurl || image.url, 500, 75);
    let tags = image.concept_tags
        .filter((tag, i) => i < 2)
        .map(tag => tag.unstemmed.toLowerCase().replaceAll(' ', ''))
        .map((tag, index) => <Hashtag key={'tag' + tag + index} label={tag}/>)


    // return <Box borderRadius={'2xl'} w={'100%'} overflow={'hidden'} pos={'relative'} m={2}>
    //     {/* eslint-disable-next-line @next/next/no-img-element */}
    //     <motion.img
    //         src={src}
    //         alt={"Image of " + image.title}
    //         whileHover={{scale: 1.1, cursor: 'pointer'}}
    //         transition={{
    //             default: {duration: .5, ease: "easeInOut"},
    //         }}
    //     />
    //     <HStack pos={'absolute'} bottom={0} p={3}>
    //         {tags}
    //     </HStack>
    //     <Box pos={'absolute'} top={0} right={0} p={3}>
    //         <LikeButton size={'md'} likes={image.likes}/>
    //     </Box>
    // </Box>
    return <Box
        h={'50vh'}
        minH={'400px'}
        maxH={'1000px'}
        position={'relative'}
        overflow={'hidden'}
        backgroundImage={optimize(src, 1000, 100)}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        borderBottom={`1px solid ${config.darkBorder}`}
    >
        <Box px={config.pagePadding} pt={32} pb={8}
             position={'absolute'} bottom={0} left={0} width={'full'}
             bgGradient={`linear(to-b, ${config.darkBkg}00 0%, ${config.darkBkg}FF 80%)`}>

            <Heading size={'2xl'} fontWeight={'black'} color={'white'}>{image.title}</Heading>
            <Heading size={'md'} fontWeight={'black'}
                     color={config.darkSubtext}>{dayjs(image.date).format('MMMM D, YYYY')}</Heading>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <HStack spacing={2} alignItems={'center'}>
                    <Text
                        textDecoration={'underline'}
                        textUnderlineOffset={3}
                        color={config.darkSubtext}
                        fontWeight={500}
                        fontSize={'md'}
                        cursor={"pointer"}
                        onClick={() => onDetails(image)}
                    >View Details</Text>
                    {tags}
                </HStack>
                <LikeButton size={'md'} likes={image.likes || 0}/>
            </Flex>
        </Box>
    </Box>
}
