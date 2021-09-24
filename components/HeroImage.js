import {Box, Flex, Heading, HStack, Text} from "@chakra-ui/react";
import config from "./_styles.config";
import Hashtag from "./Hashtag";
import LikeButton from "./LikeButton";
import {useEffect, useState} from "react";
import {API, optimize} from '../includes/api';
import dayjs from 'dayjs';

export default function HeroImage({onDetails}) {
    let [todayAPOD, setTodayAPOD] = useState(null);
    useEffect(() => {
        API.apod({image_only: true}).then(data => setTodayAPOD(data));
    }, []);

    if (!todayAPOD) return null;
    let imgSrc = todayAPOD.hdurl || todayAPOD.url;
    let tags = todayAPOD.concept_tags
        .filter((tag, i) => i < 2 || tag.probability > 0.75)
        .map(tag => tag.unstemmed.toLowerCase().replaceAll(' ', ''))
        .map((tag, index) => <Hashtag key={'tag' + tag + index} label={tag}/>)
    return <Box
        h={'50vh'}
        minH={'400px'}
        maxH={'1000px'}
        position={'relative'}
        overflow={'hidden'}
        backgroundImage={optimize(imgSrc, 1000, 100)}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        borderBottom={`1px solid ${config.darkBorder}`}
    >
        <Box px={config.pagePadding} pt={32} pb={8}
             position={'absolute'} bottom={0} left={0} width={'full'}
             bgGradient={`linear(to-b, ${config.darkBkg}00 0%, ${config.darkBkg}FF 80%)`}>

            <Heading size={'3xl'} fontWeight={'black'} color={'white'}>{todayAPOD.title}</Heading>
            <Heading size={'lg'} fontWeight={'black'}
                     color={config.darkSubtext}>{dayjs(todayAPOD.date).format('MMMM D, YYYY')}</Heading>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <HStack spacing={2} alignItems={'center'}>
                    <Text
                        textDecoration={'underline'}
                        textUnderlineOffset={3}
                        color={config.darkSubtext}
                        fontWeight={500}
                        fontSize={'xl'}
                        cursor={"pointer"}
                        onClick={() => onDetails(todayAPOD)}
                    >View Details</Text>
                    {tags}
                </HStack>
                <LikeButton size={'lg'} likes={todayAPOD.likes || 0}/>
            </Flex>
        </Box>
    </Box>
}
