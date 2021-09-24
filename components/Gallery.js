import ImageCard from "./ImageCard";
import {Box, Flex} from "@chakra-ui/react";
import config from "./_styles.config";
import {useEffect, useState} from "react";
import {API} from "../includes/api";

const sortingFunctions = {
    newest: arr => arr.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1),
    oldest: arr => arr.sort((a, b) => new Date(a.date) < new Date(b.date) ? -1 : 1),
    likes: arr => arr.sort((a, b) => a.likes > b.likes ? 1 : -1),
    randomly: arr => arr
        .map(a => ({...a, _randomKey: Math.random()}))
        .sort((a, b) => a._randomKey > b._randomKey ? 1 : -1)
}

export default function Gallery({onDetails}) {
    const [images, setImages] = useState(null);
    useEffect(() => {
        API.apod({
            start_date: '2021-09-01',
            end_date: new Date()
        }).then(data => {
            setImages(sortingFunctions.newest(data));
        })
    }, [])
    return <Box px={config.pagePadding}>
        {/*<Flex flexWrap={'wrap'} alignItems={'flex-start'}>*/}
        {/*</Flex>*/}
        {images && images.map(image => <ImageCard key={JSON.stringify(image)} image={image} onDetails={img => onDetails(img)}/>)}
    </Box>


}
