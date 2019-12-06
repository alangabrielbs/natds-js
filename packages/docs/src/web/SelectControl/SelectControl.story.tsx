import * as React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import { Switch } from '@naturacosmeticos/natds-web';
import { PropTypes } from '@material-ui/core';

import SelectControlDocs from './SelectControl.docs.mdx';

export default {
  title: 'Web|SelectControl',
  component: [Switch],
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['Switch'],
    theme: 'web',
    docs: {
      page: SelectControlDocs,
    },
  },
};

const primary: PropTypes.Color = 'primary';
const secondary: PropTypes.Color = 'secondary';
const _default: PropTypes.Color = 'default';

const colors: any = {
  primary,
  secondary,
  default: _default,
};

export const Interactive = () => (
  <>
    <Switch
      color={select('colors', colors, colors.secondary)}
      checked={boolean('checked', true)}
      disabled={boolean('disabled', false)}
    />
  </>
);

export const SwitchControl = () => (
  <>
    <Switch checked={false} />
    <Switch checked={true} />
    <Switch checked={true} color="primary" />
    <Switch checked={true} color="default" />
    <Switch checked={false} disabled />
    <Switch checked={true} disabled />
  </>
);
