import {Box, Text} from "@chakra-ui/react";
import config from "./_styles.config";

export default function Hashtag({label}) {
    return <Box
        bg={config.darkBkg}
        border={`1px solid ${config.darkBorder}`}
        borderRadius={'full'}
        display={"inline-block"}
        px={3}
    >
        <Text color={config.darkSubtext} fontWeight={500}>#{label}</Text>
    </Box>

}
