import React from 'react';
import Button from './MyButton'


export default{
    title: 'components/Button',
    component: Button
}

export const Primary = ()=><Button variant="primary">Primary</Button>
export const Secondary = ()=><Button variant='secondary'>Secondary</Button>
export const Success = ()=><Button variant='success'>success</Button>