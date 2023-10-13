import React from "react";
import {Text, StyleSheet} from 'react-native';

const Texto1 = () => {
    return <Text style={styles.textStyle}>Bem-Vindo ao Meu App!</Text>;
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
});

export default Texto1