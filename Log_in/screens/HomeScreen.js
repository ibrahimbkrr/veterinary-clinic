import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

    const navigation = useNavigation();

    const handleSignOut = async () => {
        try {
            await auth.signOut();
            navigation.navigate('LoginScreen');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Veteriner Klinik Uygulaması</Text>
            <Text style={styles.emailText}>Hoş Geldiniz, {auth.currentUser?.email}</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.button}>
                <Text style={styles.buttonText}>Çıkış Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2c3e50',
    },
    emailText: {
        fontSize: 18,
        marginBottom: 30,
        color: '#2c3e50',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
        width: '60%',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8f6ef',
    },
}); 