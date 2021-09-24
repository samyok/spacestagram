import LikeButton from "../components/LikeButton";

export default {
    title: 'LikeButton',
    component: LikeButton,
    argTypes: {
        likes: {
            defaultValue: 4,
            control: {type: 'number'}
        },
        size: {
            defaultValue: "md",
            options: ["md", "lg"],
            control: {
                type: "select",
            }
        }
    }
};
const Template = args => (
    <LikeButton {...args}/>
)
export const likeButton = Template.bind({});
