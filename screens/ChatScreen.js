import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ChatScreen = props => {

    const [isHidden, setIsHidden] = useState(true)

    return (
        <View style={styles.screen}>
                {
                    !isHidden && <Text>SHEEEEESH</Text>
                }
                <Button
                    title={isHidden ? 'Show' : 'Hide'}
                    onPress={() => {
                        setIsHidden(!isHidden)
                    }}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatScreen
