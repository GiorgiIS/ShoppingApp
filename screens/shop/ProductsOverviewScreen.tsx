import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';
import ProductItem from '../../components/shop/ProductItem';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';
import * as cartActions from '../../store/actions/cartActions';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { chooseByPlatform } from '../../helper/PlatformHelper';

type Props = DefaultGenericNavigationRouteProps<'ProductsOverview'>;

export const ProductsOverviewScreen: React.FC<Props> = (props: Props) => {
    const products = useSelector<RootState, Product[]>(state => state.products.availableProducts);
    const dispatch = useDispatch();


    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Cart"
                        iconName={chooseByPlatform('md-cart', 'ios-cart')}
                        onPress={() => { props.navigation.navigate('Cart') }}
                    />
                </HeaderButtons>
            )
        });
    });

    return (
        <FlatList
            data={products}
            renderItem={itemData =>
                <ProductItem
                    title={itemData.item.title}
                    imageUri={itemData.item.imageUrl}
                    price={itemData.item.price}
                    onAddToCartClick={() => dispatch(cartActions.addToCart(itemData.item))}
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