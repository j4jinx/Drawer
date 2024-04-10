import React from 'react';
import { action } from '@storybook/addon-actions';

import Drawer from '../src/index.jsx';

export default {
	component: Drawer,
	title: 'Drawer',
	argTypes: {
		color: {
			options: ['#ffffff', '#9e9e9e', '#ff9800', '#4caf50', '#03a9f4', '#00bcd4'],
			control: { type: 'select' }
		},
		anchor: {
			options: ['left', 'right', 'top', 'bottom'],
			control: { type: 'select' }
		}
	},
	args: {
		onClose: action('onClose Called'),
	},
};

const Template = (args) => <Drawer {...args} />;

export const Demo = Template.bind({});
Demo.args = {
	opened: false,
	anchor: 'left',
	color: '#ffffff',
	width: 280
};