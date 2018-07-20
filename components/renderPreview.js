import React from 'react';
import {StyleSheet,TouchableOpacity,View,Image,ScrollView} from 'react-native';

export const RenderPreview = (imagePreview,parentStyles = {width:50,height:50}, parentContainerStyles = {} ) =>{
    const {Container,Preview} = styles;
    return (
        <ScrollView horizontal={true}>
            <View style={[Container,{...parentContainerStyles}]}>
                {imagePreview.map((uri)=>(
                    <Image
                        key={uri}
                        style={[Preview,{...parentStyles}]}
                        source={{uri}}
                    />
                ))}
            </View>
        </ScrollView>

    )
};


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        flexDirection:'row',
        alignItems:'center',
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.38,
        shadowRadius: 10.00,

        elevation: 24,
    },
    Preview:{
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 10,
    }
});