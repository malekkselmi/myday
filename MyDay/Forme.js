import React  from 'react'
import {  View ,TextInput } from 'react-native';
import {Formik} from 'formik'
import { globalStyles } from './globalStyle';
import FlatButton from './FlatButton'

function Forme({addTask}){
return(
    <View style={globalStyles.container}>
        <Formik
        initialValues={{task:'' , time:''}}
        onSubmit={(values , actions) => {
        actions.resetForm()
        addTask(values)
        }}
        >
            {(props) => {
            return(
        <View>
            <TextInput
            style={globalStyles.input}
            placeholder='task'
            value={props.values.task}
            onChangeText={props.handleChange('task')}
            />
            <TextInput 
             style={globalStyles.input}
             placeholder='time'
             value={props.values.time}
             onChangeText={props.handleChange('time')}
             keyboardType='numeric'
            />
           <FlatButton text='submit' onPress={props.handleSubmit} />
        </View>

    )}}

        </Formik>
     
      
    </View>
)

}


export default Forme