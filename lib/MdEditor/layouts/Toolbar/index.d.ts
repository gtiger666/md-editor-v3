import { PropType } from 'vue';
import { SettingType } from '../../Editor';
declare const _default: import("vue").DefineComponent<{
    toolbars: {
        type: PropType<(keyof import("../../Editor").ToolbarTips)[]>;
        default: never[];
    };
    toolbarsExclude: {
        type: PropType<(keyof import("../../Editor").ToolbarTips)[]>;
        default: never[];
    };
    setting: {
        type: PropType<SettingType>;
        default: () => {};
    };
    updateSetting: {
        type: PropType<(v: boolean, k: keyof SettingType) => void>;
        default: () => () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    toolbars: (keyof import("../../Editor").ToolbarTips)[];
    toolbarsExclude: (keyof import("../../Editor").ToolbarTips)[];
    setting: SettingType;
    updateSetting: (v: boolean, k: keyof SettingType) => void;
} & {}>, {
    toolbars: (keyof import("../../Editor").ToolbarTips)[];
    toolbarsExclude: (keyof import("../../Editor").ToolbarTips)[];
    setting: SettingType;
    updateSetting: (v: boolean, k: keyof SettingType) => void;
}>;
export default _default;
