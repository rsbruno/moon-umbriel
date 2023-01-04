import { themes } from "../index";
import themez from 'styled-theming';

const ButtonTextDark = {
    color: themes.colors.LIGHT_500
};

const ButtonTextDisabled = {
    color: themes.colors.DARK_500
};

const ButtonTextSimple = {
    color: themes.colors.DARK_500
};

export const ButtonTextStyles = themez('buttonsmode', {
    dark: ButtonTextDark,
    disabled: ButtonTextDisabled,
    simple: ButtonTextSimple
});