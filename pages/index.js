import Head from 'next/head'
import Navigation from "../components/Navigation";
import {Box, Flex, Input, Select, Text} from "@chakra-ui/react";
import config from "../components/_styles.config";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";
import CalendarSelect from "../components/CalendarSelect";
import {SearchIcon} from "@chakra-ui/icons";
import ImageModal from "../components/ImageModal";
import {useState} from "react";
import Gallery from "../components/Gallery";

export default function Home() {

    let [data, setData] = useState(null);
    let [modalImage, setModalImage] = useState(null);

    return (
        <Box bg={config.darkBkg}>
            <Head>
                <title>Spacetagram!</title>
                <meta name="description" content="View NASA's Astronomy Picture of the Day Archive :)"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Box color={'white'}>
                <Navigation page={'/'}/>

                <Box px={config.pagePadding} py={10}>
                    <HeroText line1={"astronomy picture"} line2={"of the day"}/>
                    <Text fontSize={'1.25rem'} mt={5}>Click on any image to view more information! This gallery is
                        sourced from NASA’s large collection of daily content since June of 1995. Media here is resized,
                        optimized, and cached for viewing on the web. The hashtags are generated using NASA&apos;s
                        concept-tagging model.</Text>
                </Box>
                <HeroImage onDetails={img => setModalImage(img)}/>
            </Box>
            <Flex justifyContent={'space-between'} ml={-2} wrap={'wrap'}
                  px={config.pagePadding} py={8} spacing={4} color={config.darkSubtext} fontWeight={'600'}
                  fontSize={'1.25rem'}>
                <Flex m={2} p={2} borderRadius={'md'} alignItems={'center'} justifyContent={'center'} flexGrow={[1, 1, 0]}
                      border={`1px solid ${config.darkBorder}`}>
                    sorting
                    <Select ml={1} p={0} fontWeight={'600'} fontSize={'1.25rem'} variant="unstyled" cursor={"pointer"}
                            placeholder="by newest">
                        <option value="oldest">by oldest</option>
                        <option value="likes">by likes</option>
                        <option value="randomly">randomly</option>
                    </Select>
                </Flex>
                {/*<Flex m={2} p={2} borderRadius={'md'} alignItems={'center'} justifyContent={'center'} flexGrow={1}*/}
                {/*      border={`1px solid ${config.darkBorder}`}>*/}
                {/*    including*/}
                {/*    <Select ml={1} p={0} fontWeight={'600'} fontSize={'1.25rem'} variant="unstyled" cursor={"pointer"}*/}
                {/*            placeholder="only images">*/}
                {/*        <option value="option1">images and videos</option>*/}
                {/*    </Select>*/}
                {/*</Flex>*/}
                {/*<Flex m={2} flexGrow={9999} alignItems={'center'} p={2} borderRadius={'md'}*/}
                {/*      border={`1px solid ${config.darkBorder}`}>*/}
                {/*    <SearchIcon color={config.darkSubtext} size={'sm'} mr={2}/>*/}

                {/*    <Input variant={'unstyled'} fontWeight={'600'} fontSize={'1.25rem'} placeholder={'search'}*/}
                {/*           _placeholder={{color: config.darkSubtext + "80"}}*/}
                {/*    />*/}
                {/*</Flex>*/}
                <Flex m={2} p={2} borderRadius={'md'}
                      alignItems={'center'} justifyContent={'center'} flexGrow={[1, 1, 0]}
                      border={`1px solid ${config.darkBorder}`}>
                    <CalendarSelect/> to <CalendarSelect/>
                </Flex>
            </Flex>
            <Gallery onDetails={img => setModalImage(img)}/>
            <ImageModal image={modalImage} clickOut={() => setModalImage(null)}/>
        </Box>
    )
}
