import React,{useState} from 'react'; 
import {View,Text,Image,StyleSheet,FlatList, Button} from 'react-native'; 
import storage from '@react-native-firebase/storage';
import firebase from '@react-native-firebase/app';


export default function App (){


  var  [qwer,setqwer]= useState([]);



  componentDidMount(){
    firebase.storage().ref().child('memes').list().then(result => {
      // Loop over each item
      result.items.forEach(pics => {
          firebase.storage().ref().child(pics.fullPath).getDownloadURL().then((url) => {
              
              //these url will be used to display images
              set.qwer.push(url);
           //   console.log(qwer);
  
  
  
           })
       });
  })
    
}

  

check=()=>{
  console.log(qwer);
  
}

return(
  <View>
    <Text>
      NIBBA
    </Text>
  </View>


)

}