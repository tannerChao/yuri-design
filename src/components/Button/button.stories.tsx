/*
 * @Description:
 * @Autor: botter
 * @Date: 2021-08-22 21:29:58
 * @LastEditTime: 2021-08-23 00:52:40
 */
import React from 'react';
import { storiesOf, addParameters } from '@storybook/react';

import Button, { ButtonProps } from './index';

// export default {
//   title: 'Material-Ui/Button',
//   component: Button,
// } as ComponentMeta<typeof Button>

// const Template: ComponentStory<typeof Button> = (args) => <Button {...args} > Default </Button>

// export const Default = Template.bind({});

// Default.args = {
//   color: 'primary',
//   variant: "contained",
// }

storiesOf('Button', module).add('baseBtn', () => <Button>Hello Button</Button>, {
  color: 'red',
});
