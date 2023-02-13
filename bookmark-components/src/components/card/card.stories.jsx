import React from 'react'
import { CustomCard, CustomCardBody } from "./styles";
import CardComponent from './index'

/**
 * CardComponent UI component for user interaction
 */
export default {
  title: 'Example/CardComponent',
  component: CardComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    radius: {
      control: {
        type: "select",
        options: ["borderRadius0", "borderRadius1", "borderRadius2", "borderRadius3"],
      },
    },
  },
};

const Template = (args) => <CardComponent {...args} />;

export const Radius = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Radius.args = {
  radius: 'borderRadius0'
};

