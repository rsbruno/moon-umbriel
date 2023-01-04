import { themes } from "../index";
import themez from 'styled-theming';

const ButtonDark = {
    border: `solid 1px ${themes.colors.DARK_500}`,
    background: themes.colors.DARK_500
};

const ButtonDisabled = {
    border: `solid 1px ${themes.colors.DARK_200}`,
    background: themes.colors.DARK_200
};

const ButtonSimple = {
    border: `solid 1px ${themes.colors.DARK_200}`,
    background: 'transparent'
};

export const ButtonComponentStyles = themez('buttonsmode', {
    dark: ButtonDark,
    disabled: ButtonDisabled,
    simple: ButtonSimple
});