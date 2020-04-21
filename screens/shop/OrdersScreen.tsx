import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';

type Props = DefaultGenericNavigationRouteProps<'Order'>;

const OrdersScreen: React.FC<Props> = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text>Orders screen</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default OrdersScreen;