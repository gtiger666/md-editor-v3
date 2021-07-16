import { PropType } from 'vue';
import { SettingType } from '../../Editor';
export declare type EditorContentProps = Readonly<{
    value: string;
    hljs: Record<string, any>;
    onChange: (v: string) => void;
}>;
declare const _default: import("vue").DefineComponent<{
    value: {
        type: PropType<string>;
        default: string;
    };
    hljs: {
        type: ObjectConstructor;
        default: null;
    };
    onChange: {
        type: PropType<(v: string) => void>;
        default: () => () => void;
    };
    setting: {
        type: PropType<SettingType>;
        default: () => {};
    };
    onHtmlChanged: {
        type: PropType<(h: string) => void>;
        default: () => () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    onChange: (v: string) => void;
    setting: SettingType;
    value: string;
    hljs: Record<string, any>;
    onHtmlChanged: (h: string) => void;
} & {}>, {
    onChange: (v: string) => void;
    setting: SettingType;
    value: string;
    hljs: Record<string, any>;
    onHtmlChanged: (h: string) => void;
}>;
export default _default;
