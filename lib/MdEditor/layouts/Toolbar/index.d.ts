import { PropType } from 'vue';
import { SettingType } from '../../Editor';
declare const _default: import("vue").DefineComponent<{
    setting: {
        type: PropType<SettingType>;
        default: () => {};
    };
    updateSetting: {
        type: PropType<(v: boolean, k: keyof SettingType) => void>;
        default: () => () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    setting: SettingType;
    updateSetting: (v: boolean, k: keyof SettingType) => void;
} & {}>, {
    setting: SettingType;
    updateSetting: (v: boolean, k: keyof SettingType) => void;
}>;
export default _default;
