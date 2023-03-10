import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImageButton from '../components/ImageButton.js';
import { colors } from '../styles.js';

import { AuthContext } from '../AuthContext.js';

import AsyncStorage from '@react-native-async-storage/async-storage';


const serverIP = '192.168.7.149';

const SignInScreen = ({ navigation }) => {
    const [code, setCode] = useState('');
    const [password, setPassword] = useState('');

    const { checkIfLoggedIn } = React.useContext(AuthContext);

    useEffect(() => {
        checkIfLoggedIn();
        AsyncStorage.getItem('userToken').then((value) => {
            setCode(value);
        });
    }, []);

    function handleSubmit() {
        fetch(`http://${serverIP}:8000/authentication/login/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                token: code,
                password: password,
            }),
        }).then((response) => {
            if (response.status === 200) {
                const authCookie = response.headers.get('set-cookie');
                response.json().then((data) => {
                    console.log(data);
                    AsyncStorage.setItem("authCookie", authCookie).then(() => {
                        AsyncStorage.setItem("userToken", data.token).then(() => {
                            checkIfLoggedIn();
                        });
                    });
                });
            } else {
                console.log('Error');
            }
        });
    }
    return (
        <>
            <StatusBar style="auto" />
            <View style={styles.islandHider} />
            <View style={styles.container}>
                <View style={styles.signUp__header} >
                    <Text style={styles.signUp__header_title}>Link account</Text>
                </View>
                <View style={styles.main}>
                    <View style={styles.signUp__inputcontainer}>
                        <TextInput
                            style={styles.input__field}
                            value={code}
                            placeholder="Your Code"
                            placeholderTextColor="#525252"
                            onChangeText={(value) => setCode(value)}
                        />
                        <TextInput
                            style={styles.input__field}
                            value={password}
                            placeholder="Password"
                            onChangeText={(value) => setPassword(value)}
                            maxLength={32}
                            secureTextEntry={true}
                            placeholderTextColor="#525252"
                        />
                        <TouchableOpacity style={styles.signUp__logInButton} onPress={() => { navigation.navigate('SignUp'); }}>
                            <Text style={styles.signUp__logInButton_text}>Don't have an account?</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.signUp__createAccountButton} onPress={handleSubmit}>
                        <Text style={styles.signUp__createAccountButton_text}>Link Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    islandHider: {
        backgroundColor: colors.primary,
        height: 50,
        width: '100%',
    },
    main: {
        flex: 1,
        height: '100%',
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundColor,
        marginBottom: 40
    },
    container: {
        flex: 1,
        backgroundColor: colors.primary,
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
    },
    signUp__header: {
        backgroundColor: colors.primary,
        height: 60,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
    },
    signUp__header_title: {
        color: "#fff",
        fontSize: 40,
    },
    input__field: {
        padding: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        fontSize: 30,
        color: '#fff',
        borderBottomColor: colors.secondary,
        borderBottomWidth: 2,
        marginTop: 20,
    },
    signUp__inputcontainer: {
        margin: 40,
        marginTop: 70,
        height: '24%',
        justifyContent: 'flex-start',
        flex: 1
    },
    signUp__logInButton: {
        marginTop: 30,
    },
    signUp__logInButton_text: {
        color: '#fff',
        textDecorationLine: 'underline',
        fontSize: 20,
        padding: 10
    },
    signUp__createAccountButton: {
        backgroundColor: colors.accent,
        color: colors.primary,
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        marginBottom: 20,
        width: '80%',
        margin: 40,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUp__createAccountButton_text: {
        fontSize: 30
    }

});

export default SignInScreen;