import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';

export interface Props {

};

export const ProductsOverviewScreen: React.FC<Props> = () => {

    const products = useSelector<RootState, Product[]>(state => state.products.availableProducts);

    return (
        <View style={styles.container}>
            <FlatList data={products}
                renderItem={itemData => <Text>{itemData.item.title}</Text>}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default ProductsOverviewScreen;