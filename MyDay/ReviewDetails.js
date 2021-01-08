import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import {globalStyles} from './globalStyle'
import Card from './Card'

function ReviewDetails({navigation}) {
 
    return (
        <View styles= {globalStyles.container} >
            <Card>
        <Text>{navigation.getParam('task')}</Text>
        <Text >{navigation.getParam('time')}</Text>
        </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 25
    },
  });
  

export default ReviewDetails
