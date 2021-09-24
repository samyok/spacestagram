import ImageModal from "../components/ImageModal";

export default {
    title: 'ImageModal',
    component: ImageModal,
    argTypes: {
        src: {
            defaultValue: "https://apod.nasa.gov/apod/image/2109/LDN1251Gualco1024.jpg", control: {
                type: "text"
            }
        }
    }
};
const Template = args => (
    <ImageModal {...args}/>
)
export const imageModal = Template.bind({});
