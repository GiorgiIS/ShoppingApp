import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export interface Props {

};

const CartScreen: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Cart screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default CartScreen;