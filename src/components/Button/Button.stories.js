import React from 'react';
import Button from './Button';
import { withKnobs } from '@storybook/addon-knobs';

export default { label: 'Button component', decorators: [withKnobs] };

export const _Button = () => {
    <Button
        label="test"
    ></Button>
};