import React from 'react'
import { CustomCard, CustomCardBody } from "./styles";
import CardComponent from './index'

/**
 * CardComponent UI component for user interaction
 */
export default {
  title: 'CardComponent',
  component: CardComponent,
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
Radius.args = {
  radius: 'borderRadius0'
};

