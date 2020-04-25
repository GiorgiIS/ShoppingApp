import React from 'react';
import { View, StyleSheet, Text, Image, Button, Platform, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { FontNames, Fonts } from '../../constants/Fonts';

export interface Props {
    title: string
    price: number,
    imageUri: string,
    onViewDetailsClick: () => void,
    onToCartClick: () => void
};

const ProductItem: React.FC<Props> = (props: Props) => {

    const TouchableComponent: React.ReactType =
        (Platform.OS === 'android' && Platform.Version >= 21)
            ? TouchableNativeFeedback : TouchableOpacity;

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableComponent onPress={props.onViewDetailsClick} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: props.imageUri }} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button
                                color={Colors.primary}
                                title="View Details"
                                onPress={props.onViewDetailsClick}
                            />
                            <Button
                                color={Colors.primary}
                                title="To Cart"
                                onPress={props.onToCartClick}
                            />
                        </View>
                    </View>
                </TouchableComponent>
            </View>
        </View>
    )
};


const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    },
    title: {
        fontSize: 18,
        marginVertical: 2,
        fontFamily: FontNames.openSansBold
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: FontNames.openSans
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    }
});

export default ProductItem;
