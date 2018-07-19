import React from 'react';

import {StyleSheet,View,Text,TouchableOpacity} from 'react-native';
import {RenderPreview} from "./renderPreview";

export default class ListScreen extends React.Component {

    render(){
        const { navigation } = this.props;
        const images = navigation.getParam('images', []);
        const {container} = styles;
        return(
            <View style={container}>
                {RenderPreview(images)}}
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex: 1
   }
});