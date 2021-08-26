import React from 'react';
import { Button, ButtonProps as mButtonPorps } from '@material-ui/core';

export interface ButtonProps extends mButtonPorps {}

const Btns: React.FC<ButtonProps> = (props) => <Button {...props} />;

export default Btns;
