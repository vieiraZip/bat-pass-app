import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatlogoStyle';
import batlogo from '../../../assets/Batman-Logo.png'

export function Batlogo() {
  return (
    <View style={styles.logotitle}>
        <Text style={styles.title}>BAT PASS GENERATOR</Text>
        <Image source={batlogo}style={styles.logo}></Image>
    </View>
   
    
  );
}