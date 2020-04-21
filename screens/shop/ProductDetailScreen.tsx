import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';

type Props = DefaultGenericNavigationRouteProps<'ProductDetail'>;

export const ProductDetailScreen: React.FC<Props> = (props: Props) => {

    const productId = props.route.params.productId;
    const productTitle = props.route.params.productTitle;
    const selectedProduct = useSelector<RootState, Product | undefined>(state =>
        state.products.availableProducts.find(c => c.id === productId));

    useEffect(() => {
        props.navigation.setOptions({ title: productTitle });
    }, [productTitle]);

    return (
        <View style={styles.container}>
            <Text>{selectedProduct?.title}</Text>
            <Text>{selectedProduct?.description}</Text>
            <Text>{selectedProduct?.price}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {

    }
});

export default ProductDetailScreen;