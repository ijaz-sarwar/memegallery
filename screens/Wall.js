import React,{useState,useEffect} from 'react'; 
import {View,Text,StyleSheet,FlatList, Button, TouchableNativeFeedback, ScrollView, Image} from 'react-native'; 
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import { InterstitialAd, TestIds, AdEventType } from '@react-native-firebase/admob';
const adUnitId =  'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['fashion', 'clothing'],
});


export default class Wall extends React.Component{
   

 
   
constructor(props){
  super(props);
  this.state={
    qwer:[],
    loaded:false, 
  }
};







 componentDidMount(){

  ()=>{
   
  },

  firebase.storage().ref().child('memes/').list().then(result => {
    // Loop over each item
    result.items.forEach(pics => {
        firebase.storage().ref().child(pics.fullPath).getDownloadURL()
        .then((url ) => 
        
         
        this.setState({qwer : this.state.qwer.concat(url)})

        // this.setState({qwer:.push(url)});


            //these url will be used to display images
          
        //   this.setState()
            // set.qwer.push(url);
         //   console.log(qwer);
         //want to push url here  in the array and make it global variable 
         
     )
     for (let i =this.state.qwer.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      this.setState.qwer({qwer:[this.state.qwer[i],this.state.qwer[j]] = [this.state.qwer[j], this.state.qwer[i]] })
  } 
    }
     
     );
})
 
 }

 

check=()=>{
  console.log(this.state.qwer);
  
}



  render(){


    
  /*  firebase.storage().ref().child('memes').list().then(result => {
        // Loop over each item
        result.items.forEach(pics => {
            firebase.storage().ref().child(pics.fullPath).getDownloadURL().then((url) => {
                
                //these url will be used to display images
                this.state.qwer.push(url);
             //   console.log(qwer);



             })
         });
    })
    <Image
               style={styles.img}
               key={Math.random() *10 }
               source={{uri:item}}/>
               </View>


               
   /* function shuffleArray() {
      for (let i = qwer.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [qwer[i], qwer[j]] = [qwer[j], qwer[i]];
      }
      console.log(qwer);
      <Button 
title= "click here"
onPress= {this.check}/>
{ this.state.qwer.map((item)=>(
         <Text key={Math.random() *10 }   > { item } </Text>)
         )}

  }
     */
   

return(
    
  
  <View style={styles.screen}>
  
  


    <Text> 
      NIBBBA
    </Text>
  <ScrollView style={styles.scroll}>
     


{ this.state.qwer.map((item)=>(

             <View
             style={styles.wall}
             key={Math.random() *10 }
             >

              <Image
               style={styles.img}
               key={Math.random() *10 }
               source={{uri:item}}/>
               </View>
           )
         )}
         </ScrollView>
         </View>
)


}}


const styles = StyleSheet.create({
  screen:{
    flex:1,
    paddingBottom:30,
    backgroundColor:'#32CD32',

    
     
  },
  img:{
  //  flex: 1,
    //resizeMode: 'contain',
  //  resizeMode: 'contain',
   // width: null,
   // height: 220,
 
  
  width:350,
  height:350,
  // resizeMode:"cover",
  borderWidth:4,
  borderColor:'#8B0000',

    
  },
  wall:{
    padding:30,
    marginLeft:30,
    marginRight:30,
    alignItems:'center',
   paddingBottom:25,

  },
  scroll:{
    paddingBottom:30,


  }
})
  