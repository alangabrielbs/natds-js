import React, { useState } from 'react';
import withJest from '@decorators/jest/jest';
import withContainer from '@decorators/container/container';
import {
  boolean,
  select,
  optionsKnob as options,
} from '@storybook/addon-knobs';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers/MuiPickersUtilsProvider';
import { makeStyles } from '@material-ui/core/styles';
import { DatePicker, TextField } from '@naturacosmeticos/natds-web';

import DatePickerDocs from './DatePicker.docs.mdx';

export default {
  title: 'Components|Picker/DatePicker',
  component: DatePicker,
  decorators: [withJest(), withContainer],
  parameters: {
    jestImportPath: 'web',
    jest: ['DatePicker'],
    theme: {
      context: 'web',
    },
    docs: {
      page: DatePickerDocs,
    },
  },
};

const variants: any = {
  dialog: 'dialog',
  inline: 'inline',
};

const formats: any = {
  'dd/MM': 'dd/MM',
  'dd/MM/yyyy': 'dd/MM/yyyy',
  'dd/MM/yy': 'dd/MM/yy',
  'MM/yy': 'MM/yy',
};

const valuesInlineCheck = {
  Year: 'year',
  Date: 'date',
  Month: 'month',
};

const openTos: any = {
  date: 'date',
  year: 'year',
  month: 'month',
};

export const Interactive = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );

  const textField = (textFieldProps: any) => (
    <TextField {...textFieldProps} id="random-prop-id" type="text" />
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const useStyles = makeStyles(theme => ({
    wrapper: {
      display: 'flex',
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          value={selectedDate}
          label="Only calendar"
          TextFieldComponent={textField}
          variant={select('Variant', variants, variants.dialog)}
          openTo={select('OpenTo', openTos, openTos.date)}
          format={select('Formats', formats, formats['dd/MM/yyyy'])}
          disableToolbar={boolean('Disabled Toolbar', false)}
          disableFuture={boolean('Disabled Future', false)}
          disablePast={boolean('Disabled Past', false)}
          animateYearScrolling={boolean('Animate Year Scrolling', false)}
          autoOk={boolean('Auto Ok', false)}
          disabled={boolean('Disabled', false)}
          clearable={boolean('Clearable', false)}
          views={options('Views Check', valuesInlineCheck, ['year'], {
            display: 'inline-check',
          })}
          onChange={setSelectedDate}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
};
