import React from "react";
import {Text, StyleSheet} from 'react-native';

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Texto3 = () => {
    return <Text style={styles.textStyle}>{vetor}</Text>;
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize: 30
    }
});

export default Texto3