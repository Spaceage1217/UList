import React from 'react';
import {StyleSheet,TouchableOpacity,View,Image} from 'react-native';

export const RenderPreview = (imagePreview,{width,height} = {width:50,height:50}) =>{
    const {Container,Preview} = styles;
    return (
        <View style={Container}>
            {imagePreview.map((uri)=>(
                <Image
                    key={uri}
                    style={[Preview,{width,height}]}
                    source={{uri}}
                />
            ))}
        </View>
    )
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
    },
    Preview:{
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 3,
        marginLeft: 10,
        top: '-5%'
    }
});