import CalendarSelect from "../components/CalendarSelect";

export default {
    title: 'CalendarSelect',
    component: CalendarSelect,
    argTypes: {
        date: {
            defaultValue: new Date(),
            control: {type: 'date'}
        }
    }
};
const Template = args => (
    <CalendarSelect {...args}/>
)
export const calendarSelect = Template.bind({});
