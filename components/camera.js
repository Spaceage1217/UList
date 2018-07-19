import React from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Image,Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Camera, Permissions } from 'expo';
import {RenderPreview} from './renderPreview';

export default class CameraScreen extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            headerStyle:{
                backgroundColor:'#2C2D32',
                borderColor:'#2C2D32'
            },
            headerRight: (
                <Button
                    //the function that returns null on the onPress is just to get rid of warning.
                    //header is defined before componentDidMount so the param saveAndGoBack is not there yet.
                    //because of this it complains that the function is undefined. so I just defined a dummy function to hold its place until it is defined
                    onPress={navigation.getParam('saveAndGoBack') || (()=>null)}
                    title='Done'
                    color='white'
                />
            )
        }
    };


    state = {
        camera: null,
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
        flash: false,
        imagePreview: []
    };


    componentDidMount(){
        this.props.navigation.setParams({saveAndGoBack:this._saveAndGoBack})
    }

    _saveAndGoBack = ()=>{
        this.props.navigation.navigate('ListScreen',{images:this.state.imagePreview});
        console.log('save and go back is working');
    };

    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    };

    snap = async (options) => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            console.log('this is the photo',photo);
            this.setState({imagePreview:[...this.state.imagePreview,photo.uri]});
            console.log('image preview',this.state.imagePreview);
        }
    };

    render() {
        const { hasCameraPermission } = this.state;
        const { imagePreviewContainer, container, imagePreview} = styles;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
                        <View
                            style={{
                                flex: 9,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                        </View>
                        {RenderPreview(this.state.imagePreview)}
                        <View style={container}>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                onPress={() => {
                                    this.setState({
                                        type: this.state.type === Camera.Constants.Type.back
                                            ? Camera.Constants.Type.front
                                            : Camera.Constants.Type.back,
                                    });
                                }}>
                                <Ionicons style={{
                                    margin:5,
                                    color: 'white'
                                }} name={'ios-reverse-camera'} size={35}/>;
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    flex: 0.1,
                                    alignSelf: 'flex-end',
                                    alignItems: 'center',
                                }}
                                disabled={this.state.imagePreview.length === 6}
                                onPress={this.snap}>
                                <Ionicons style={{
                                    color: this.state.imagePreview.length===6? 'grey': 'white',
                                    width: '180%',
                                    height: '110%',
                                }} name={'ios-radio-button-on'} size={75}/>;
                            </TouchableOpacity>
                            <Text style={styles.text}>{this.state.imagePreview.length}/6</Text>
                        </View>
                    </Camera>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection:'row',
        marginBottom:50,
    },
    text: {
        fontSize:15,
        color: 'white'
    },
    imagePreviewContainer: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
    },
    imagePreview:{
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 3,
        width: 50,
        height: 50,
        marginLeft: 10,
        top: '-5%'
    }
});