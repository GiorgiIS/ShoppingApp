import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';
import ProductItem from '../../components/shop/ProductItem';
import { State } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/ShopNavigator';
import { RouteProp } from '@react-navigation/native';
import { DefaultNavigationProps } from './DefaultNavigationProps';

type ProductsOverviewScreenRouteProp = RouteProp<RootStackParamList, 'ProductsOverview'>;

type Props = {
    route: ProductsOverviewScreenRouteProp;
    navigation: DefaultNavigationProps;
};

export const ProductsOverviewScreen: React.FC<Props> = (props: Props) => {
    const products = useSelector<RootState, Product[]>(state => state.products.availableProducts);

    return (
        <FlatList
            data={products}
            renderItem={itemData =>
                <ProductItem
                    title={itemData.item.title}
                    imageUri={itemData.item.imageUrl}
                    price={itemData.item.price}
                    onToCartClick={() => {
                        props.navigation.navigate('Cart')
                    }}
                    onViewDetailsClick={() => {
                        props.navigation.navigate("ProductsOverview")
                    }}
                />}
        />
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default ProductsOverviewScreen;