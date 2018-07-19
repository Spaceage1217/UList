import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CameraScreen from "./camera";
export default class CaptureAndList extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return {
            header: null,
            headerBackTitle: 'Cancel',
            headerBackImage: null,
        }
    };

    render() {
        const  {container,text} = styles;
        const {navigate} = this.props.navigation;
        return (
            <View style={container}>
                <TouchableOpacity onPress={() => navigate('CameraScreen')}>
                    <Ionicons style={{
                        color: 'white',
                    }} name={'ios-add-circle'} size={75}/>;
                </TouchableOpacity>
                <Text style={text} >Take a picture to start listing!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2C2D32'
    },
    text: {
        fontSize:15,
        color: 'white'
    }
});