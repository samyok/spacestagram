import HeroImage from "../components/HeroImage";

export default {
    title: 'Heroimage',
    component: HeroImage,
    argTypes: null,
};
const Template = args => (
    <HeroImage {...args}/>
)
export const heroImage = Template.bind({});
