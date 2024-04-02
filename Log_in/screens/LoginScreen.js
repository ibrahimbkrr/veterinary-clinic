import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const [Email, setEmail] = useState('');
    const [Şifre, setŞifre] = useState('');
    const navigation = useNavigation();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate('HomeScreen')
            }
        })
    }, [])

    const handleSignUp = () => {
        auth.createUserWithEmailAndPassword(Email, Şifre)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Kullanıcı ', user.email)
            })
            .catch((error) => alert(error.message));
    }

    const handleLogin = () => {
        auth.signInWithEmailAndPassword(Email, Şifre)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Kullanıcı Giriş Yaptı', user.email)
            })
            .catch((error) => alert(error.message));
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Veteriner Klinik Uygulaması</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder='Email'
                    value={Email}
                    onChangeText={text => setEmail(text)} />
                <TextInput style={styles.input} placeholder='Şifre'
                    value={Şifre}
                    onChangeText={text => setŞifre(text)}
                    secureTextEntry />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={styles.buttonText}> Giriş Yap</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.outlineButton]}>
                        <Text style={styles.outlineButtonText}> Kayıt Ol</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f6ef',  // Yumuşak yeşil tonu
    },
    titleContainer: {
        marginBottom: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2c3e50', // Mavi siyah tonu
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    buttonContainer: {
        width: '100%',
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '80%',
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    outlineButton: {
        backgroundColor: 'white',
        borderColor: '#0782F9',
        borderWidth: 1,
    },
    outlineButtonText: {
        color: '#0782F9',
        fontSize: 16,
    },
})
