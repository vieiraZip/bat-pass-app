import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyle';
import { BatTextInput } from '../TextInput/TextInput';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard'

export function Batbutton() {
  const [pass, setPass] = useState('')

  function handleGeneretareButton(){
    let generateToken = generatePass()
    setPass(generateToken)
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }

  return (
    <>
    <BatTextInput pass={pass}/>
      <Pressable
        style={styles.button}
        onPress={handleGeneretareButton}
      >
        <Text style = {styles.text}>GENERATE</Text>
      </Pressable>


      <Pressable
        style={styles.button}
        onPress={handleCopyButton}
      >
        <Text style = {styles.text}>⚡COPY</Text>
      </Pressable>
      
    </>
  );
}