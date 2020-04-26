import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';
import { FlatList } from 'react-native-gesture-handler';
import { RootState } from '../../store/root';
import { useSelector, useDispatch } from 'react-redux';
import { FontNames } from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import CartItem from '../../models/cart-item';
import CartItemViewComponent from '../../components/shop/CartItemViewComponent';
import * as cartActions from '../../store/actions/cartActions';
import Product from '../../models/product';

type Props = DefaultGenericNavigationRouteProps<'Cart'>;

const CartScreen: React.FC<Props> = (props: Props) => {
    const dispatch = useDispatch();
    const totalSum = useSelector<RootState, number>(state => state.cart.totalAmoaunt);
    const cartItems = useSelector<RootState, CartItem[]>
        (state => {
            const transofrmedCartItems: CartItem[] = [];
            for (const key in state.cart.items) {
                transofrmedCartItems.push(state.cart.items[key]);
            }
            return transofrmedCartItems.sort((a, b) => a.productTitle > b.productTitle ? 1 : -1);
        });

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total <Text style={styles.amount}> ${totalSum.toFixed(2)}</Text>
                </Text>
                <Button title='Order Now'
                    color={Colors.accent}
                    onPress={() => { }}
                    disabled={cartItems.length === 0}
                />
            </View>
            <FlatList
                data={cartItems}
                renderItem={itemData => <CartItemViewComponent
                    id={itemData.item.id}
                    productTitle={itemData.item.productTitle}
                    productPrice={itemData.item.productPrice}
                    quantity={itemData.item.quantity}
                    sum={itemData.item.sum}
                    onRemove={() => {
                        dispatch(cartActions.removeFromCart(Product.JustId(itemData.item.id)));
                    }}
                />}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: FontNames.openSansBold,
        fontSize: 20
    },
    amount: {
        color: Colors.primary
    }
});

export default CartScreen;