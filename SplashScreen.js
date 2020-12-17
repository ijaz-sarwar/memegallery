import React from 'react'
import { View, Image, Text } from 'react-native'
import Wall from './Wall'

class SplashScreen extends React.Component {
    static navigationOptions = {
        title: null,
        headerMode: 'none',
        headerShown: false,

    }




    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('Wall')
        }, 2500)
    }


    render() {
        return (
            <View style={{ flex: 1, flexWrap: 'wrap' }}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                    source={require('./logo.png')}
                />
            </View>
        );
    }
}

export default SplashScreen
