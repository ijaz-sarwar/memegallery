import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Dimensions, TouchableNativeFeedback, ScrollView, Image } from 'react-native';
import firebase from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
import { InterstitialAd, TestIds, AdEventType } from '@react-native-firebase/admob';
const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';
const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  requestNonPersonalizedAdsOnly: true,
  keywords: ['games', 'gaming', 'casualgames', 'technology'],
});
const interstitialAd = InterstitialAd.createForAdRequest(adUnitId);
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default class Wall extends React.Component {



  static navigationOptions = {
    title: null,
    headerMode: 'none',
    headerShown: false,

  }
  constructor(props) {
    super(props);
    this.state = {
      qwer: [],
      loaded: false,
    }
  };





  componentDidMount() {

    interstitialAd.onAdEvent(type => {
      if (type === AdEventType.LOADED) {
        console.log('InterstitialAd adLoaded');
      } else if (type === AdEventType.ERROR) {
        console.warn('InterstitialAd => Error');
      } else if (type === AdEventType.OPENED) {
        console.log('InterstitialAd => adOpened');
      } else if (type === AdEventType.CLICKED) {
        console.log('InterstitialAd => adClicked');
      } else if (type === AdEventType.LEFT_APPLICATION) {
        console.log('InterstitialAd => adLeft_App');
      } else if (type === AdEventType.CLOSED) {
        console.log('InterstitialAd => adClosed');
        interstitialAd.load();
      }
    });

    interstitialAd.load();


    firebase.storage().ref().child('memes/').list().then(result => {
      // Loop over each item
      result.items.forEach(pics => {
        firebase.storage().ref().child(pics.fullPath).getDownloadURL()
          .then((url) =>


            this.setState({ qwer: this.state.qwer.concat(url) })

            // this.setState({qwer:.push(url)});


            //these url will be used to display images

            //   this.setState()
            // set.qwer.push(url);
            //   console.log(qwer);
            //want to push url here  in the array and make it global variable 

          )
        for (let i = this.state.qwer.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          this.setState.qwer({ qwer: [this.state.qwer[i], this.state.qwer[j]] = [this.state.qwer[j], this.state.qwer[i]] })
        }
      }

      );
    })

  }



  check = () => {
    console.log(this.state.qwer);

  }
  showAd() {
    if (interstitialAd.loaded) {
      interstitialAd.show().catch(error => console.warn(error));
    }
  }



  render() {



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


    return (


      <View style={styles.screen}>





        <ScrollView style={styles.scroll}>

          {/* <Button
      title="Show Interstitial"
      onPress={() => {
    
        this.showAd();



      }}
    /> */}

          {this.state.qwer.map((item) => (

            <View
              style={styles.wall}
              key={Math.random() * 10}
            >

              <Image
                style={styles.img}
                key={Math.random() * 10}
                source={{ uri: item }} />
            </View>
          )
          )}
        </ScrollView>
      </View>
    )


  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: 'black',



  },
  img: {
    //  flex: 1,
    //resizeMode: 'contain',
    //  resizeMode: 'contain',
    // width: null,
    // height: 220,

    width: deviceWidth,
    width: "100%",
    height: deviceHeight,
    height: 350,
    // resizeMode:"cover",
    borderWidth: 4,
    borderRadius: 10,
    borderColor: 'white',


  },
  wall: {
    padding: 30,
    marginLeft: 5,
    marginRight: 5,
    alignItems: 'center',
    paddingBottom: 25,

  },
  scroll: {
    paddingBottom: 30,


  }
})
