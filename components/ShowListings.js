import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class ShowListings extends React.Component{
    render(){
        const {container,text} = styles;
        return (
            <View style={container}>
                <Text style={text}>Listings component is working </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        color: 'black'
    }
});