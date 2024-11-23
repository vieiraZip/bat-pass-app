import React from "react"
import { Text, View } from "react-native"
import { Batlogo } from "../../components/Batlogo/Batlogo"
import styles from "./HomeStyle"

export default function Home(){
    return(
        <View style = {styles.appContainer}>


            <View style = {styles.logoContainer}>
                <Batlogo></Batlogo>
            </View>


        </View>
    )
}

