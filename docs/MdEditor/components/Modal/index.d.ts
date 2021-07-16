import { PropType } from 'vue';
export declare type ModalProps = Readonly<{
    title?: string;
    visible?: boolean;
    width?: number;
    onClosed?: (visible: boolean) => void;
    to?: HTMLElement;
}>;
declare const _default: import("vue").DefineComponent<{
    title: {
        type: PropType<string>;
        default: string;
    };
    visible: {
        type: PropType<boolean>;
        default: boolean;
    };
    width: {
        type: PropType<string | number>;
        default: string;
    };
    onClosed: {
        type: PropType<() => void>;
        default: () => () => void;
    };
    to: {
        type: PropType<HTMLElement>;
        default: () => HTMLElement;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    visible?: unknown;
    width?: unknown;
    onClosed?: unknown;
    to?: unknown;
} & {
    title: string;
    visible: boolean;
    to: HTMLElement;
    width: string | number;
    onClosed: () => void;
} & {}>, {
    title: string;
    visible: boolean;
    to: HTMLElement;
    width: string | number;
    onClosed: () => void;
}>;
export default _default;
