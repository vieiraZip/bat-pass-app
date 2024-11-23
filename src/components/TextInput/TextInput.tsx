import React from 'react';
import { TextInput} from 'react-native';

import { styles } from './TextInputStyle';

export function BatTextInput() {
  return (

    <TextInput
    placeholder='pass'
    style = {styles.imputer}
    multiline = {true}
    />
    
  );
}