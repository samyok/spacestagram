import {ChakraProvider, extendTheme} from "@chakra-ui/react"
import '../styles/CalendarSelectOverrides.css';

const theme = extendTheme({
    fonts: {
        heading: "Catamaran",
        body: "Source Sans Pro",
    },
})


function MyApp({Component, pageProps}) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
