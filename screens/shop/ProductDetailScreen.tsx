import React, { useEffect } from 'react';
import { View, StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/root';
import Product from '../../models/product';
import Colors from '../../constants/Colors';
import { FontNames } from '../../constants/Fonts';
import * as cartActions from '../../store/actions/cartActions';

type Props = DefaultGenericNavigationRouteProps<'ProductDetail'>;

export const ProductDetailScreen: React.FC<Props> = (props: Props) => {

    const productId = props.route.params.productId;
    const productTitle = props.route.params.productTitle;
    const selectedProduct = useSelector<RootState, Product | undefined>(state =>
        state.products.availableProducts.find(c => c.id === productId));

    if (!selectedProduct) {
        // todo: in components create error view and show it
        throw new Error('I dont know how, but non existing product was selected');
    }

    const dispatch = useDispatch();

    useEffect(() => {
        props.navigation.setOptions({ title: productTitle });
    }, [productTitle]);

    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct?.imageUrl }} />
            <View style={styles.actions}>
                <Button
                    color={Colors.primary}
                    title='Add to Cart'
                    onPress={() => dispatch(cartActions.addToCart(selectedProduct))} />
            </View>
            <Text style={styles.price}>{selectedProduct?.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct?.description}</Text>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
        marginVertical: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: FontNames.openSansBold,
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20,
        fontFamily: FontNames.openSans
    }
});

export default ProductDetailScreen;