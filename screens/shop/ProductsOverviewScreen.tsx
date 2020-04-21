import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';
import ProductItem from '../../components/shop/ProductItem';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';

type Props = DefaultGenericNavigationRouteProps<'ProductsOverview'>;

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
                    onToCartClick={() =>{ props.navigation.navigate('Cart')}}
                    onViewDetailsClick={() => {
                        props.navigation.navigate("ProductDetail",
                            {
                                productId: itemData.item.id,
                                productTitle: itemData.item.title
                            })
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