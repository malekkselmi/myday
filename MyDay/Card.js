import React from 'react'
import {Text , View , StyleSheet} from  'react-native'

function Card(props){
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card : {
        borderRadius: 10,
        elevation:5,
        backgroundColor:'white',
        shadowColor:'#333',
        shadowOpacity:0.3,
        shadowRadius:2,
        marginHorizontal:5,
        marginVertical:5

    },
    cardContent : {
        marginHorizontal:20,
        marginVertical:10

    }
})

export default Card