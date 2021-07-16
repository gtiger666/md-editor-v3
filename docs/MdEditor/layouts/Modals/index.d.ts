import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"link" | "image" | "help">;
        default: string;
    };
    visible: {
        type: PropType<boolean>;
        default: boolean;
    };
    onCancel: {
        type: PropType<() => void>;
        default: () => () => void;
    };
    onOk: {
        type: PropType<(data?: any) => void>;
        default: () => () => void;
    };
    to: {
        type: PropType<HTMLElement>;
        default: () => HTMLElement;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type?: unknown;
    visible?: unknown;
    onCancel?: unknown;
    onOk?: unknown;
    to?: unknown;
} & {
    visible: boolean;
    to: HTMLElement;
    type: "link" | "image" | "help";
    onCancel: () => void;
    onOk: (data?: any) => void;
} & {}>, {
    visible: boolean;
    to: HTMLElement;
    type: "link" | "image" | "help";
    onCancel: () => void;
    onOk: (data?: any) => void;
}>;
export default _default;
