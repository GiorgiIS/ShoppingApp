import { Platform } from "react-native";

export const chooseByPlatform = (androidParameter: any, iosParameter: any) => {
    return Platform.OS === 'android' ? androidParameter
        : Platform.OS === 'ios' ? iosParameter
            : undefined;
}