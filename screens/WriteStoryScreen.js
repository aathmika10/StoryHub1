import React from 'react';
import {  View,Text ,TextInput,StyleSheet,TouchableOpacity} from 'react-native';

import { Header } from 'react-native-elements';
export default class WriteStoryScreen extends React.Component {
    render() {
      return (
       <View>
        <Header
        backgroundColor={'#7e35a8'}
        centerComponent={{
          text: 'Story Hub',
          style: { color: '#fff', fontSize: 20 },
        }}
      />
       <TextInput 
          style ={styles. storyTitleTextInput}
          placeholder = "Story Title"/>
        <TextInput 
          style ={styles.authorTextInput}
          placeholder = "Author"/>
          <TextInput
          style={styles.writeYourStoryTextInput}
          placeholder = "Write Your Story"
          />
         <TouchableOpacity
            style = {styles.SubmitButton}
           >
            <Text>SUBMIT</Text>
          </TouchableOpacity>
     </View>
      );
    }
  }
  const styles = StyleSheet.create({
 
    storyTitleTextInput:{
      borderWidth:2,
      height:30,
      width:700,
      marginLeft:350,
      marginTop:30,
    },
    authorTextInput:{
        borderWidth:2,
        height:30,
        width:700,
        marginLeft:350,
        marginTop:30,
      }, 
    writeYourStoryTextInput:{
        borderWidth:2,
        height:300,
        width:700,
        marginLeft:350,
        marginTop:30,
      },
      SubmitButton:{
        borderWidth:1,
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink',
        marginLeft:650,
        marginTop:30
      }
})