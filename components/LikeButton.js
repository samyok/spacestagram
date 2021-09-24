import {Button, Heading, HStack, Text} from "@chakra-ui/react";
import config from "./_styles.config";
import {motion} from "framer-motion";
import {useState} from "react";

export default function LikeButton({likes, size}) {
    let [liked, setLiked] = useState(false);
    const sizes = {
        'md': {
            svg: {width: 26, height: 23},
            text: '1.25rem'
        },
        'lg': {
            svg: {width: 26 * 1.5, height: 23 * 1.5},
            text: '1.75rem'
        }
    }
    if (!sizes[size]) size = 'md';

    const variants = {
        default: {
            opacity: 1,
            pathLength: 0,
            stroke: "url(#pinkGradient)",
            fill: "url(#pinkGradient)",
            fillOpacity: 0
        },
        liked: {
            opacity: 1,
            pathLength: 1,
            stroke: "url(#pinkGradient)",
            fill: "url(#pinkGradient)",
            fillOpacity: .3,
        }
    };
    return (
        <Button
            bg={'transparent'}
            borderRadius={'lg'}
            border={`2px solid transparent`}
            role="button"
            aria-pressed={liked ? "true" : "false"}
            height={"auto"}
            px={4}
            py={3}
            ml={2}
            userSelect={'none'}
            background={`${config.black}60`}
            onClick={() => {
                setLiked(pv => !pv);
            }}
            _hover={{
                background: `${config.purple}30`,
                cursor: "pointer"
            }}
            _focus={{
                border: `2px solid ${config.purple}80`
            }}
            _active={{
                background: `${config.purple}60`,
            }}
        >
            <HStack
                alignItems={'center'}
                spacing={3}
            >
                <motion.svg width={sizes[size].svg.width + 'px'} height={sizes[size].svg.height + 'px'} viewBox="0 0 26 23"
                            fill="none" xmlns="http://www.w3.org/2000/svg">

                    {/* default white heart */}
                    <path
                        d="M12.8062 21.429L13 21.5104L13.1938 21.429C17.9615 19.4245 21.4225 15.9992 23.2965 12.5107L23.2976 12.5086C25.1212 9.07509 25.4801 5.46722 23.696 3.21369L23.6947 3.21207C22.1458 1.27212 20.1137 0.528077 18.0673 0.588266C16.1884 0.643528 14.3748 1.39793 13 2.48243C11.6252 1.39793 9.81161 0.643528 7.93269 0.588266C5.88629 0.528077 3.85422 1.27212 2.30526 3.21207L2.30526 3.21207L2.30397 3.2137C0.519661 5.46756 0.878936 9.07524 2.73098 12.5097C4.5778 16.0002 8.03969 19.425 12.8062 21.429Z"
                        fill="black"
                        fillOpacity="0.3"
                        stroke={config.white}
                    />

                    {/* colored heart */}
                    <motion.path
                        d="M12.8062 21.429L13 21.5104L13.1938 21.429C17.9615 19.4245 21.4225 15.9992 23.2965 12.5107L23.2976 12.5086C25.1212 9.07509 25.4801 5.46722 23.696 3.21369L23.6947 3.21207C22.1458 1.27212 20.1137 0.528077 18.0673 0.588266C16.1884 0.643528 14.3748 1.39793 13 2.48243C11.6252 1.39793 9.81161 0.643528 7.93269 0.588266C5.88629 0.528077 3.85422 1.27212 2.30526 3.21207L2.30526 3.21207L2.30397 3.2137C0.519661 5.46756 0.878936 9.07524 2.73098 12.5097C4.5778 16.0002 8.03969 19.425 12.8062 21.429Z"
                        strokeWidth={1}
                        variants={variants}
                        initial="default"
                        animate={liked ? "liked" : "default"}
                        transition={{
                            default: {duration: 1, ease: "easeInOut"},
                        }}
                    />
                    <defs>
                        <linearGradient id="pinkGradient" x1="1.63848" y1="1.0849" x2="21.3455" y2="23.6091"
                                        gradientUnits="userSpaceOnUse">
                            <stop stopColor="#F01E9E"/>
                            <stop offset="1" stopColor="#9F1EEE"/>
                        </linearGradient>
                    </defs>
                </motion.svg>
                <Text
                    as={'span'}
                    fontWeight={'extrabold'}
                    fontSize={sizes[size].text}
                    bgGradient={config.pinkGrad}
                    bgClip="text"
                    color={liked ? `${config.white}00` : `${config.white}FF`}
                    transitionDuration={'1s'}
                    transitionTimingFunction={'easeInOut'}
                >{+likes + +liked}</Text>
            </HStack>
        </Button>
    )
}
