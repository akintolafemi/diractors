import * as React from "react";
import { StyleProp, ViewStyle, TextStyle, ImageStyle } from "react-native";
import RNBounceable from "@freakycoder/react-native-bounceable";
declare type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
declare type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
declare type CustomImageStyleProp = StyleProp<ImageStyle> | Array<StyleProp<ImageStyle>>;
interface ICheckboxFlexProps {
    title: string;
    date?: string;
    imageSource: any;
    isActive?: boolean;
    description?: string;
    disableDate?: boolean;
    titleNumberOfLines?: number;
    checkboxBorderColor?: string;
    activeCardBackgroundColor?: string;
    inactiveCardBackgroundColor?: string;
    disableBuiltInActiveSystemForCheckbox?: boolean;
    disableBuiltInActiveSystemForCard?: boolean;
    activeCheckboxBackgroundColor?: string;
    inactiveCheckboxBackgroundColor?: string;
    style?: CustomStyleProp;
    iconContainerStyle?: CustomStyleProp;
    dateContainerStyle?: CustomStyleProp;
    titleContainerStyle?: CustomStyleProp;
    checkboxContainerStyle?: CustomStyleProp;
    descriptionContainerStyle?: CustomStyleProp;
    iconImageStyle?: CustomImageStyleProp;
    titleTextStyle?: CustomTextStyleProp;
    dateTextStyle?: CustomTextStyleProp;
    descriptionTextStyle?: CustomTextStyleProp;
    onPress?: (isActive?: boolean) => void;
    onCardPress?: (isActive?: boolean) => void;
}
interface IState {
    isActive: boolean;
}
export default class CheckboxFlex extends React.Component<ICheckboxFlexProps, IState> {
    cardRef: RNBounceable | null;
    constructor(props: ICheckboxFlexProps);
    handlePress: () => void;
    handleCardPress: () => void;
    renderIconContainer: () => JSX.Element;
    renderTitle: () => JSX.Element;
    renderDate: () => false | JSX.Element;
    renderCheckbox: () => JSX.Element;
    renderDescription: () => JSX.Element | null;
    renderCard: () => JSX.Element;
    render(): JSX.Element;
}
export {};
