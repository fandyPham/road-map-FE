import { merge } from 'lodash';
import { Theme } from '@mui/material';

import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Autocomplete from './Autocomplete';
import TextField from './TextField';
import Switch from './Switch';
import Checkbox from './Checkbox';
import Radio from './Radio';
import FormControlLabel from './FormControlLabel';
import FormLabel from './FormLabel';
import Tab from './Tab';
import DatePicker from './DatePicker';
import Select from './Select';
import Link from './Link';
export default function ComponentsOverrides(theme: Theme) {
  return merge(
    Card(theme),
    Lists(theme),
    Paper(theme),
    Input(theme),
    Button(theme),
    Tooltip(theme),
    Backdrop(theme),
    Typography(theme),
    IconButton(theme),
    Autocomplete(theme),
    TextField(theme),
    Switch(theme),
    Checkbox(theme),
    Radio(theme),
    FormControlLabel(theme),
    FormLabel(theme),
    Tab(theme),
    DatePicker(theme),
    Select(theme),
    Link(theme),
  );
}
