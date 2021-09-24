import HeroText from "../components/HeroText";

export default {
    title: 'Herotext',
    component: HeroText,
    argTypes: {
        line1: {
            defaultValue: "astronomy picture", control: {
                type: "text"
            }
        },
        line2: {
            defaultValue: "of the day", control: {
                type: "text"
            }
        }
    }
};
const Template = args => (
    <HeroText {...args}/>
)
export const herotext = Template.bind({});
