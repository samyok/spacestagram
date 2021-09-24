import Hashtag from "../components/Hashtag";

export default {
    title: 'Hashtag',
    component: Hashtag,
    argTypes: {
        label: {
            defaultValue: "galaxy", control: {
                type: "text"
            }
        }
    }
};
const Template = args => (
    <Hashtag {...args}/>
)
export const hashtag = Template.bind({});
