import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';
import ProductItem from '../../components/shop/ProductItem';
import { State } from 'react-native-gesture-handler';

export interface Props {

};

export const ProductsOverviewScreen: React.FC<Props> = () => {

    const products = useSelector<RootState, Product[]>(state => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            renderItem={itemData =>
                <ProductItem
                    title={itemData.item.title}
                    imageUri={itemData.item.imageUrl}
                    price={itemData.item.price}
                    onToCartClick={() => { }}
                    onViewDetailsClick={() => { }}
                />}
        />
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default ProductsOverviewScreen;