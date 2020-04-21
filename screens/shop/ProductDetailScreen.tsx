import React from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/ShopNavigator';
import { StackNavigationProp } from '@react-navigation/stack';
import { DefaultNavigationProps, DefaultRouteProp } from './DefaultNavigationProps';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetail'>;

type Props = {
    route: ProductDetailScreenRouteProp;
    navigation: DefaultNavigationProps;
};

export const ProductDetailScreen: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>The product detail screen, id is {props.route.params.id}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default ProductDetailScreen;