import React from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';

type Props = DefaultGenericNavigationRouteProps<'ProductDetail'>;

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