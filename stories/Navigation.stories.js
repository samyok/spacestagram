// import Navigation from "../components/Navigation";
// import {storiesOf} from "@storybook/react";
//
//
// storiesOf("Navigation", module).add("default", () => {
//     return <Navigation/>
// })
//
// storiesOf("Navigation", module).addParameters({
//     page: {
//         values: [
//             {name: "home", path: "/"},
//             {name: "about", path: "/about"},
//             {name: "my likes", path: "/likes"}
//         ]
//     }
// }).add("home", ({parameters}) => {
//     return <Navigation {...parameters}/>
// })
import Navigation from "../components/Navigation";

export default {
    title: 'Navigation',
    component: Navigation,
    argTypes: {
        page: {
            options: ['', '/', '/about', '/likes'],
            control: {type: 'radio'}
        }
    }
};
const Template = args => (
    <Navigation {...args}/>
)
export const navigation = Template.bind({});
