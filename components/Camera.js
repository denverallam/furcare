import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { Camera } from "expo-camera";


const CameraScreen = (props) => {

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [image, setImage] = useState('')

    const cameraRef = useRef()

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.7, base64: true };
            const data = await cameraRef.current.takePictureAsync(options);
            const source = data.base64;
            setImage(source)

            if (source) {
                await cameraRef.current.pausePreview();
                setIsPreview(true);
            }

        }

    };


    console.log(image)

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back
                            );
                        }}>
                        <Text style={styles.text}> Flip </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => takePicture()}>
                        <Text style={styles.text}>Capture</Text>
                    </TouchableOpacity>
                </View>
            </Camera>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    textInput: {
        flex: 1
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        width: '100%'
    }
});
export default CameraScreen
