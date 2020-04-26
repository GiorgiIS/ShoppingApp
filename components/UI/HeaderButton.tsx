import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { chooseByPlatform } from '../../helper/PlatformHelper';

export interface Props {

};

const CustomHeaderButton: React.FC<Props> = (props: Props) => {
    return (
        <HeaderButton {...props}
            iconSize={23}
            color={chooseByPlatform('white', Colors.primary)}
            IconComponent={Ionicons}
            title={'Cart'}
        />
    )
};

const styles = StyleSheet.create({
    container: {

    }
});

export default CustomHeaderButton;