"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
const react_native_bounceable_1 = tslib_1.__importDefault(require("@freakycoder/react-native-bounceable"));
/**
 * ? Local Imports
 */
const CheckboxFlex_style_1 = tslib_1.__importStar(require("./CheckboxFlex.style"));
class CheckboxFlex extends React.Component {
    constructor(props) {
        super(props);
        this.cardRef = null;
        this.handlePress = () => {
            this.cardRef?.animate();
            if (!this.props.disableBuiltInActiveSystemForCheckbox) {
                this.setState({ isActive: !this.state.isActive }, () => {
                    this.props.onPress && this.props.onPress(this.state.isActive);
                });
            }
            else {
                this.props.onPress && this.props.onPress();
            }
        };
        this.handleCardPress = () => {
            if (!this.props.disableBuiltInActiveSystemForCard) {
                this.setState({ isActive: !this.state.isActive }, () => {
                    this.props.onCardPress && this.props.onCardPress(this.state.isActive);
                });
            }
            else {
                this.props.onCardPress && this.props.onCardPress();
            }
        };
        /* -------------------------------------------------------------------------- */
        /*                               Render Methods                               */
        /* -------------------------------------------------------------------------- */
        this.renderIconContainer = () => (<react_native_1.View style={[CheckboxFlex_style_1.default.iconContainer, this.props.iconContainerStyle]}>
      <react_native_1.Image source={this.props.imageSource} style={[CheckboxFlex_style_1.default.iconImageStyle, this.props.iconImageStyle]}/>
    </react_native_1.View>);
        this.renderTitle = () => (<react_native_1.View style={[CheckboxFlex_style_1.default.titleContainer, this.props.titleContainerStyle]}>
      <react_native_1.Text style={[CheckboxFlex_style_1.default.titleTextStyle, this.props.titleTextStyle]} numberOfLines={this.props.titleNumberOfLines || 2}>
        {this.props.title}
      </react_native_1.Text>
    </react_native_1.View>);
        this.renderDate = () => !this.props.disableDate && (<react_native_1.View style={[CheckboxFlex_style_1.default.dateContainer, this.props.dateContainerStyle]}>
        <react_native_1.Text style={[CheckboxFlex_style_1.default.dateTextStyle, this.props.dateTextStyle]}>
          {this.props.date}
        </react_native_1.Text>
      </react_native_1.View>);
        this.renderCheckbox = () => {
            const { checkboxBorderColor = "rgba(100,100,100,0.9)", activeCheckboxBackgroundColor = "#63eead", inactiveCheckboxBackgroundColor = "transparent", } = this.props;
            return (<react_native_1.View style={[
                CheckboxFlex_style_1._checkboxContainer(this.state.isActive, checkboxBorderColor, activeCheckboxBackgroundColor, inactiveCheckboxBackgroundColor),
                this.props.checkboxContainerStyle,
            ]}>
        {this.state.isActive && (<react_native_1.Image style={CheckboxFlex_style_1.default.checkboxImageStyle} source={require("./check.png")}/>)}
      </react_native_1.View>);
        };
        this.renderDescription = () => {
            if (!this.props.description)
                return null;
            else
                return (<react_native_1.View style={[
                    CheckboxFlex_style_1.default.descriptionContainer,
                    this.props.descriptionContainerStyle,
                ]}>
          <react_native_1.Text numberOfLines={4} style={[
                    CheckboxFlex_style_1._descriptionTextStyle(this.state.isActive),
                    this.props.descriptionTextStyle,
                ]}>
            {this.props.description}
          </react_native_1.Text>
        </react_native_1.View>);
        };
        this.renderCard = () => {
            const { activeCardBackgroundColor = "#2173FF", inactiveCardBackgroundColor = "#343c4d", } = this.props;
            return (<react_native_1.View style={CheckboxFlex_style_1._cardContainer(this.state.isActive, activeCardBackgroundColor, inactiveCardBackgroundColor)}>
        <react_native_1.View style={CheckboxFlex_style_1.default.cardContainerGlue}>
          {this.renderIconContainer()}
          {this.renderTitle()}
          {this.renderDate()}
        </react_native_1.View>
        {this.renderDescription()}
      </react_native_1.View>);
        };
        this.state = {
            isActive: props.isActive || false,
        };
    }
    render() {
        const { style } = this.props;
        return (<react_native_1.View style={[CheckboxFlex_style_1.default.container, style]}>
        <react_native_bounceable_1.default ref={(ref) => (this.cardRef = ref)} bounceEffect={0.93} onPress={this.handleCardPress}>
          {this.renderCard()}
        </react_native_bounceable_1.default>
      </react_native_1.View>);
    }
}
exports.default = CheckboxFlex;
//# sourceMappingURL=CheckboxFlex.js.map
