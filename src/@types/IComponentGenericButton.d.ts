declare type IComponentGenericButton = {
    theme: 'dark' | 'disabled' | 'simple' | 'light' | 'gray';
    size?: number;
    sizeUnity?: string;
    isLoading?: boolean;
    visibility?: "hidden" | 'visible',
    bdRadius?: number
}