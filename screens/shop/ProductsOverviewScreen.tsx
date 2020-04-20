import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../../store/root';

export interface Props {

};

const ProductsOverviewScreen: React.FC<Props> = (props: Props) => {

    const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

    const products = useSelector(state => state.products.availableProducts);

    return (
        <View style={styles.container}>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default ProductsOverviewScreen;