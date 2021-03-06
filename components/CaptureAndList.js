import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Button,StatusBar} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {testAction} from '../redux/actions';
import CameraScreen from "./camera";

class CaptureAndList extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return {
            headerBackTitle: 'Cancel',
            headerTitle: 'U-List',
            headerTitleStyle:{
                color: 'white'
            },
            headerTintColor: 'white',
            headerStyle:{
                backgroundColor:'#2C2D32',
                shadowColor: 'transparent',
                borderBottomWidth: 0,
            },
        }
    };

    render() {
        const  {container,text} = styles;
        const {navigate} = this.props.navigation;
        return (
            <View style={container}>
                <StatusBar
                    barStyle="light-content"
                />
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

function mapStateToProps(state) {
    return {
        globalState: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        testAction,
        //stuffActions: bindActionCreators(stuffActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CaptureAndList);