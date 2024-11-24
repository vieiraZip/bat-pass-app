import React from 'react';
import { Button, View, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyle';
import { BatTextInput } from '../TextInput/TextInput';

export function Batbutton() {
  return (
    <>
    <BatTextInput></BatTextInput>
      <Pressable
        style={styles.button}
        onPress={() => {console.log('fui pressionado!')}}
      >
        <Text style = {styles.text}>GENERATE</Text>
      </Pressable>


      <Pressable
        style={styles.button}
        onPress={() => {console.log('fui pressionado!')}}
      >
        <Text style = {styles.text}>⚡COPY</Text>
      </Pressable>
      
    </>
  );
}