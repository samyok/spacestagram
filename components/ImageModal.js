import {Box, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import {AnimatePresence, motion} from 'framer-motion';
import Hashtag from "./Hashtag";
import config from "./_styles.config";
import LikeButton from "./LikeButton";
import {optimize} from "../includes/api";
import dayjs from "dayjs";

const MotionBox = motion(Box);

export default function ImageModal({image, clickOut}) {

    const imageSrc = image && optimize(image.hdurl || image.url, 1000, 100);
    let tags = image && image.concept_tags
        .filter((tag, i) => i < 2 || tag.probability > 0.75)
        .map(tag => tag.unstemmed.toLowerCase().replaceAll(' ', ''))
        .map((tag, index) => <Hashtag key={'tag' + tag + index} label={tag}/>)

    return (
        <AnimatePresence>

            {image && <MotionBox

                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                overflowY={'scroll'}
                pos={'fixed'} top={0} left={0} w={'100vw'} h={'100vh'} bg={'rgba(107,107,107, .22)'}
                backdropFilter={'blur(5px)'} onClick={() => clickOut()}>
                <Box

                    w={'100%'} maxW={'900px'} bg={config.darkBkg} mx={'auto'} my={[0, 10, 16]} py={[0, 5, 8]}
                    borderRadius={'3xl'}>
                    <Box px={config.pagePadding} py={2}>
                        <Heading size={'2xl'} fontWeight={'black'} color={'white'}>{image.title}</Heading>
                        <Flex justifyContent={'space-between'} flexWrap={'wrap'}>
                            <Text
                                color={config.darkSubtext}
                                fontWeight={500}
                                fontSize={'lg'}
                            >{image.copyright ? `Copyright ${image.copyright}` : 'Courtesy of NASA (public domain)'}</Text>
                            <Text
                                color={config.darkSubtext}
                                fontWeight={500}
                                fontSize={'lg'}
                            >{dayjs(image.date).format('MMMM D, YYYY')}</Text>
                        </Flex>
                    </Box>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imageSrc} alt={image.title}/>
                    <Box px={config.pagePadding} pt={[2, 6, 8]}>
                        <Text
                            color={config.white}
                            fontWeight={500}
                            fontSize={'lg'}
                        >{image.explanation}</Text>
                    </Box>
                    <Flex justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'}
                          px={config.pagePadding}>
                        <HStack spacing={4}>
                            {tags}
                        </HStack>
                        <LikeButton likes={12}/>
                    </Flex>
                </Box>
            </MotionBox>}</AnimatePresence>)


    // <Box borderRadius={'2xl'} w={['100%', '50%', '33%']} overflow={'hidden'} pos={'relative'}>
    //     {/* eslint-disable-next-line @next/next/no-img-element */}
    //     <motion.img
    //         src={src}
    //         alt="pciture"
    //         whileHover={{ scale: 1.1, cursor: 'pointer' }}
    //         transition={{
    //             default: {duration: .5, ease: "easeInOut"},
    //         }}
    //     />
    //     <HStack pos={'absolute'} bottom={0} p={3}>
    //         <Hashtag label={'galaxy'}/>
    //         <Hashtag label={'hubble'}/>
    //     </HStack>
    //     <Box pos={'absolute'} top={0} right={0} p={3}>
    //         <LikeButton size={'md'} likes={9}/>
    //     </Box>
    // </Box>

}
