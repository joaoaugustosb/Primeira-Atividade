import React from "react";
import {Text, StyleSheet} from 'react-native';

const res = 2 + 2;

const Texto2 = () => {
    return <Text style={styles.textStyle}>Esse app é pra dizer que 2+2 pode ser
    igual a {res} (às vezes não é).</Text>;
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
});

export default Texto2