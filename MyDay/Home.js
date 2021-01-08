import React , {useState} from 'react'
import { StyleSheet, Text, View , FlatList , TouchableOpacity , Modal , TouchableWithoutFeedback , Keyboard} from 'react-native';
import {globalStyles} from './globalStyle'
import Card from  './Card'
import {MaterialIcons} from  '@expo/vector-icons'
import Forme from './Forme'

function Home({navigation}) {
    const[tasks , setTasks] = useState([{task:'Wake up early' , time:6 , key:1} , {task:'Drink a coffee' , time:7 , key:2}])
    const [model , setModel] = useState(false)
    const addTask = (Task) => {
        Task.key = Math.random().toString()
        setTasks((currenTasks) => {
            return [...currenTasks , Task]
        })
        setModel(false)
    }

    return (
        <View style ={globalStyles.container} >
            <Modal  visible={model} animationType='slide' >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           <View style={styles.modelContent}>
            <MaterialIcons 
            name='close'
            size={25}
            onPress={ () => setModel(false)}
            style={{...styles.modelop , ...styles.modelclo}}
            />
            <Forme addTask={addTask}/>
            </View>
            </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons 
            name='add'
            size={25}
            onPress={() => setModel(true)}
            style={styles.modelop}
            
            />
            <FlatList 
            data={tasks}
            renderItem = {({item}) => (
                <TouchableOpacity  onPress={ () => navigation.navigate('ReviewDetails' , item) }>
                    <Card>
                <Text style={globalStyles.texttitle} > {item.task} </Text>
                </Card>
                </TouchableOpacity>
            ) }
            />
        </View>
      
    )
}

const styles = StyleSheet.create({
    modelop : {
     marginBottom:10,
     borderWidth:1,
     borderColor:'black',
     padding:10,
     borderRadius:10,
     alignSelf:'center'
    },
    modelclo : {
    marginTop:20,
    marginBottom:0
    },
    modelContent: {
    flex:1
    }
})

export default Home
