import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DefaultGenericNavigationRouteProps } from '../../navigation/DefaultNavigationProps';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/root';

type Props = DefaultGenericNavigationRouteProps<'Order'>;

const OrdersScreen: React.FC<Props> = (props: Props) => {
   

    return (
        <View style={styles.container}>
       
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
     
    }
});

export default OrdersScreen;