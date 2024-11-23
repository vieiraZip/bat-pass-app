import React from "react"
import { Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"
import { Batlogo } from "../../components/Batlogo/Batlogo"
import styles from "./HomeStyle"
import { BatTextInput } from "../../components/TextInput/TextInput"

export default function Home(){
    return(
        <View style = {styles.appContainer}>


            <View style = {styles.logoContainer}>
                <Batlogo></Batlogo>
            </View>

            <View style = {styles.inputContainer}>
                <BatTextInput></BatTextInput>
            </View>

            <StatusBar style = 'light'/>
        </View>
    )
}

