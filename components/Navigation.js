import {Box, Flex, HStack, Link, Text} from '@chakra-ui/react';
import config from "./_styles.config";

export default function Navigation({page}) {
    return <Box bg={config.darkBkg} borderBottom={`1px solid ${config.darkBorder}`}>
        <Box width={'full'} height={1} bgGradient={config.redGrad}/>
        <Flex px={config.pagePadding} py={2} justifyContent={'space-between'} alignItems={"center"}>

            {/* LOGO */}
            <Box cursor={'pointer'}>
                <Text
                    color={'white'}
                    fontSize="2xl"
                    fontWeight="regular"
                    fontFamily="Fredoka One"
                    display={'inline-block'}
                >
                    space
                </Text>
                <Text
                    bgGradient={config.pinkGrad}
                    bgClip="text"
                    fontSize="2xl"
                    fontFamily="Fredoka One"
                    fontWeight="regular"
                    display={'inline-block'}
                >
                    stagram
                </Text>
            </Box>

            {/* Right Navigation Links */}
            <HStack spacing={8} fontSize={'md'} color={config.darkSubtext} textUnderlineOffset={2.5}>
                <Link href="/" color={page === '/' && "white"}>home</Link>
                <Link href="/about" color={page === '/about' && "white"}>about</Link>
                <Link href="https://github.com/samyok/spacetagram">github</Link>
                <Link href="/likes" color={page === '/likes' && "white"}>my likes</Link>
            </HStack>
        </Flex>
    </Box>

}
