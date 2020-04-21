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
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';

type SCREEN_NAME = 'ProductsOverview';

type Props = DefaultGenericNavigationRouteProps<SCREEN_NAME>;

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
                        props.navigation.navigate("ProductDetail", { id: itemData.item.id })
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