import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { chooseByPlatform } from '../../helper/PlatformHelper';
import { FontNames } from '../../constants/Fonts';

export interface Props {
    id: string;
    quantity: number;
    productPrice: number;
    productTitle: string;
    sum: number;
    onRemove: () => void
};

const CartItemViewModel: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity} </Text>
                <Text style={styles.title}>{props.productTitle}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={styles.amount}>{props.sum.toFixed(2)}</Text>
                <TouchableOpacity style={styles.deleteButton} onPress={props.onRemove}>
                    <Ionicons name={chooseByPlatform('md-trash', 'ios-trash')}
                        size={23}
                        color='red'
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    quantity: {
        fontFamily: FontNames.openSans,
        color: '#888',
        fontSize: 16
    },
    title: {
        fontFamily: FontNames.openSansBold,
        fontSize: 16
    },
    amount: {
        fontFamily: FontNames.openSansBold,
        fontSize: 16
    },
    deleteButton: {
        marginLeft: 20
    }
});

export default CartItemViewModel;