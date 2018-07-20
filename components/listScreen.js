import React from 'react';

import {StyleSheet,View,StatusBar} from 'react-native';
import {RenderPreview} from "./renderPreview";

export default class ListScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Create Listing',
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

    render(){
        const { navigation } = this.props;
        const images = navigation.getParam('images', []);
        const {container} = styles;
        return(
            <View style={container}>
                <StatusBar
                    barStyle="light-content"
                />
                {RenderPreview(images,{width:250,height:250},
                    {alignItems:'flex-start',marginTop:25,justifyContent:'center'}
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex: 1,
       backgroundColor: '#2C2D32'
   },
   renderPreviewStyles:{
       width:250,
       height:250,
   },
    renderPreviewStylesContainer:{
        alignItems:'flex-start',
        justifyContent:'center'
    }
});