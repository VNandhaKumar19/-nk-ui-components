export enum variant {
    'outline' = 'outline',
    'primary' = 'primary',
    'secondary' = 'secondary',
    'tertiary' = 'tertiary',
    'danger' = 'danger',
    'none' = 'none',
    'success' = 'success',
};

export type variants = variant.outline | variant.primary | variant.tertiary | variant.secondary | variant.danger | variant.none | variant.success;

export type size = 'xs' | 's' | 'm' | 'l' | 'xl';


export interface config {
    variant: variant;
    size: size;
    loader: boolean;
}