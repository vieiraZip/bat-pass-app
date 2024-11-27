import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './TextInputStyle';

interface BatTextInputProps{
  pass: string,

}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput
    placeholder='pass'
    style = {styles.imputer}
    value = {props.pass}
    />
  );
}