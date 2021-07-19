import { PropType, EmitsOptions } from 'vue';
declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: PropType<"click" | "hover">;
        default: string;
    };
    overlay: {
        type: PropType<string | JSX.Element>;
        default: string;
    };
    visible: {
        type: PropType<boolean>;
        default: boolean;
    };
    onChange: {
        type: PropType<(v: boolean) => void>;
        default: () => () => void;
    };
    to: {
        type: PropType<HTMLElement>;
        default: () => HTMLElement;
    };
}, () => import("vue").VNode<unknown, unknown, {
    [key: string]: any;
}>[], unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger?: unknown;
    overlay?: unknown;
    visible?: unknown;
    onChange?: unknown;
    to?: unknown;
} & {
    onChange: (v: boolean) => void;
    trigger: "click" | "hover";
    overlay: string | JSX.Element;
    visible: boolean;
    to: HTMLElement;
} & {}>, {
    onChange: (v: boolean) => void;
    trigger: "click" | "hover";
    overlay: string | JSX.Element;
    visible: boolean;
    to: HTMLElement;
}>;
export default _default;
