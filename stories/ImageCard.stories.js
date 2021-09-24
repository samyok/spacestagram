import ImageCard from "../components/ImageCard";

export default {
    title: 'ImageCard',
    component: ImageCard,
    argTypes: {
        src: {
            defaultValue: "https://apod.nasa.gov/apod/image/2109/LDN1251Gualco1024.jpg", control: {
                type: "text"
            }
        }
    }
};
const Template = args => (
    <ImageCard {...args}/>
)
export const imageCard = Template.bind({});
