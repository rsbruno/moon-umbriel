import styled from 'styled-components'
import themez from 'styled-theming'

const IconInLeft = {
    position: 'absolute',
    left: 0,
};

const IconInRight = {
    position: 'absolute',
    right: 0,
};

const IconNormal = {
    position: 'relative',
};

const IconModeStyle = themez('iconPosition', {
    left: IconInLeft,
    right: IconInRight,
    normal: IconNormal
});


export const IconContainer = styled.View`
    ${IconModeStyle}
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
`