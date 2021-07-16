import { PropType } from 'vue';
declare global {
    interface Window {
        hljs: any;
        prettier: any;
        prettierPlugins: any;
    }
}
export interface ToolbarTips {
    bold?: string;
    underline?: string;
    italic?: string;
    strikeThrough?: string;
    title?: string;
    sub?: string;
    sup?: string;
    quote?: string;
    unorderedList?: string;
    orderedList?: string;
    codeRow?: string;
    code?: string;
    link?: string;
    image?: string;
    table?: string;
    revoke?: string;
    next?: string;
    save?: string;
    prettier?: string;
    pageFullscreen?: string;
    fullscreen?: string;
    preview?: string;
    htmlPreview?: string;
    github?: string;
}
export interface StaticTextDefaultValue {
    toolbarTips?: ToolbarTips;
    titleItem?: {
        h1?: string;
        h2?: string;
        h3?: string;
        h4?: string;
        h5?: string;
        h6?: string;
    };
    linkModalTips?: {
        title?: string;
        descLable?: string;
        descLablePlaceHolder?: string;
        urlLable?: string;
        UrlLablePlaceHolder?: string;
        buttonOK?: string;
        buttonUpload?: string;
    };
}
export interface StaticTextDefault {
    'zh-CN': StaticTextDefaultValue;
    'en-US': StaticTextDefaultValue;
}
export declare type StaticTextDefaultKey = keyof StaticTextDefault;
export declare type ToolbarNames = keyof ToolbarTips;
export interface SettingType {
    pageFullScreen: boolean;
    fullscreen: boolean;
    preview: boolean;
    htmlPreview: boolean;
}
export declare const prefix = "md";
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: PropType<string>;
        default: string;
    };
    theme: {
        type: PropType<"dark" | "light">;
        default: string;
    };
    editorClass: {
        type: StringConstructor;
        default: string;
    };
    hljs: {
        type: ObjectConstructor;
        default: null;
    };
    highlightJs: {
        type: PropType<string>;
        default: string;
    };
    highlightCss: {
        type: PropType<string>;
        default: string;
    };
    historyLength: {
        type: PropType<number>;
        default: number;
    };
    onChange: {
        type: PropType<(v: string) => void>;
    };
    onSave: {
        type: PropType<(v: string) => void>;
        default: () => () => void;
    };
    onUploadImg: {
        type: PropType<(files: FileList, callBack: (urls: string[]) => void) => void>;
    };
    pageFullScreen: {
        type: PropType<boolean>;
        default: boolean;
    };
    preview: {
        type: PropType<boolean>;
        default: boolean;
    };
    htmlPreview: {
        type: PropType<boolean>;
        default: boolean;
    };
    language: {
        type: PropType<string>;
        default: string;
    };
    languageUserDefined: {
        type: PropType<{
            [key: string]: StaticTextDefaultValue;
        }[]>;
        default: () => never[];
    };
    toolbars: {
        type: PropType<(keyof ToolbarTips)[]>;
        default: string[];
    };
    prettier: {
        type: PropType<boolean>;
        default: boolean;
    };
    prettierCDN: {
        type: PropType<string>;
        default: string;
    };
    prettierMDCDN: {
        type: PropType<string>;
        default: string;
    };
    editorName: {
        type: PropType<string>;
        default: string;
    };
    onHtmlChanged: {
        type: PropType<(h: string) => void>;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    theme?: unknown;
    editorClass?: unknown;
    hljs?: unknown;
    highlightJs?: unknown;
    highlightCss?: unknown;
    historyLength?: unknown;
    onChange?: unknown;
    onSave?: unknown;
    onUploadImg?: unknown;
    pageFullScreen?: unknown;
    preview?: unknown;
    htmlPreview?: unknown;
    language?: unknown;
    languageUserDefined?: unknown;
    toolbars?: unknown;
    prettier?: unknown;
    prettierCDN?: unknown;
    prettierMDCDN?: unknown;
    editorName?: unknown;
    onHtmlChanged?: unknown;
} & {
    prettier: boolean;
    preview: boolean;
    onSave: (v: string) => void;
    editorName: string;
    pageFullScreen: boolean;
    htmlPreview: boolean;
    toolbars: (keyof ToolbarTips)[];
    historyLength: number;
    hljs: Record<string, any>;
    modelValue: string;
    theme: "dark" | "light";
    editorClass: string;
    highlightJs: string;
    highlightCss: string;
    language: string;
    languageUserDefined: {
        [key: string]: StaticTextDefaultValue;
    }[];
    prettierCDN: string;
    prettierMDCDN: string;
} & {
    onChange?: ((v: string) => void) | undefined;
    onHtmlChanged?: ((h: string) => void) | undefined;
    onUploadImg?: ((files: FileList, callBack: (urls: string[]) => void) => void) | undefined;
}>, {
    prettier: boolean;
    preview: boolean;
    onSave: (v: string) => void;
    editorName: string;
    pageFullScreen: boolean;
    htmlPreview: boolean;
    toolbars: (keyof ToolbarTips)[];
    historyLength: number;
    hljs: Record<string, any>;
    modelValue: string;
    theme: "dark" | "light";
    editorClass: string;
    highlightJs: string;
    highlightCss: string;
    language: string;
    languageUserDefined: {
        [key: string]: StaticTextDefaultValue;
    }[];
    prettierCDN: string;
    prettierMDCDN: string;
}>;
export default _default;
