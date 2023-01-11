import React, { ReactNode, useEffect, useState } from 'react'
import { TouchableOpacityProps } from 'react-native';

import { TabBarContainer, TabIconButtonButton, TabIconText, } from './TabBottomBarAppStyles'
import { Ionicons, MaterialCommunityIcons, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { themes } from '@themes/index';

interface TabIconButtonProps extends TouchableOpacityProps {
    IconComponent: ReactNode;
    label: string;
    iconVariation: { actived: string, normal: string };
    theme: 'actived' | 'normal'
}

const LOCAL_THEME = {
    actived: {
        color: themes.colors.PRIMARY_500
    },
    normal: {
        color: themes.colors.DARK_200
    }
}

enum ICON_NAMES {
    HOME = 'HOME',
    WORKOUT = 'WORKOUT',
    INSIGHTS = 'INSIGHTS',
    ALIMENTATION = 'ALIMENTATION',
    PROFILE = 'PROFILE'
}

type IIconNames = keyof typeof ICON_NAMES

const TabIconButton = ({ IconComponent, label, iconVariation, theme, ...props }: TabIconButtonProps) => {
    const [variationIcon, setVariationIcon] = useState<string>(iconVariation.normal);
    const [localTheme, setLocalTheme] = useState<{ color: string }>({ color: LOCAL_THEME.normal.color });

    useEffect(() => {
        if (theme === 'actived') setVariationIcon(iconVariation.actived)
        else setVariationIcon(iconVariation.normal)
        setLocalTheme(() => LOCAL_THEME[theme])
    }, [theme])

    return <>
        <TabIconButtonButton {...props}>
            {React.cloneElement(IconComponent as any, { name: variationIcon, color: localTheme.color })}
            <TabIconText color={localTheme.color}>{label}</TabIconText>
        </TabIconButtonButton>
    </>
}

export function ComponentTabbarApp() {
    const [current, setCurrentIcon] = useState<IIconNames>(ICON_NAMES.HOME);
    const handleClickIcons = (destiny: IIconNames) => setCurrentIcon(destiny)
    const handleThemeIcons = (iconName: string) => current === iconName ? 'actived' : "normal"

    return <>
        <TabBarContainer>
            <TabIconButton
                iconVariation={{ actived: "md-home-sharp", normal: 'md-home-outline' }}
                onPress={() => handleClickIcons(ICON_NAMES.HOME)}
                theme={handleThemeIcons(ICON_NAMES.HOME)}
                IconComponent={<Ionicons size={25} />}
                label='Home'
            />

            <TabIconButton
                iconVariation={{ actived: "arm-flex", normal: 'arm-flex-outline' }}
                onPress={() => handleClickIcons(ICON_NAMES.WORKOUT)}
                IconComponent={<MaterialCommunityIcons size={25} />}
                theme={handleThemeIcons(ICON_NAMES.WORKOUT)}
                label='Ficha'
            />

            <TabIconButton
                iconVariation={{ actived: "insights", normal: 'insights' }}
                onPress={() => handleClickIcons(ICON_NAMES.INSIGHTS)}
                theme={handleThemeIcons(ICON_NAMES.INSIGHTS)}
                IconComponent={<MaterialIcons size={25} />}
                label='Gráficos'
            />

            <TabIconButton
                iconVariation={{ actived: "food-drumstick", normal: 'food-drumstick-outline' }}
                onPress={() => handleClickIcons(ICON_NAMES.ALIMENTATION)}
                IconComponent={<MaterialCommunityIcons size={25} />}
                theme={handleThemeIcons(ICON_NAMES.ALIMENTATION)}
                label='Dieta'
            />

            <TabIconButton
                iconVariation={{ actived: "user", normal: 'user-o' }}
                onPress={() => handleClickIcons(ICON_NAMES.PROFILE)}
                theme={handleThemeIcons(ICON_NAMES.PROFILE)}
                IconComponent={<FontAwesome size={25} />}
                label='Dieta'
            />
        </TabBarContainer>
    </>
}