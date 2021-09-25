import { ViewStyle, ImageStyle, TextStyle } from "react-native";
export declare const _checkboxContainer: (isActive: boolean, borderColor: string, activeBackgroundColor: string, inactiveBackgroundColor: string) => ViewStyle;
export declare const _cardContainer: (isActive: boolean, activeBackgroundColor: string, inactiveBackgroundColor: string) => ViewStyle;
export declare const _descriptionTextStyle: (isActive: boolean) => TextStyle;
interface Style {
    container: ViewStyle;
    iconContainer: ViewStyle;
    iconImageStyle: ImageStyle;
    titleContainer: ViewStyle;
    titleTextStyle: TextStyle;
    cardContainerGlue: ViewStyle;
    checkboxImageStyle: ImageStyle;
    descriptionContainer: ViewStyle;
    dateContainer: ViewStyle;
    dateTextStyle: TextStyle;
}
declare const _default: Style;
export default _default;
