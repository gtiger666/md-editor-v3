import {
  computed,
  defineComponent,
  PropType,
  provide,
  reactive,
  Teleport,
  watch
} from 'vue';
import {
  allToolbar,
  highlightUrl,
  iconfontUrl,
  prettierUrl,
  staticTextDefault
} from './config';
import { useKeyBoard } from './capi';
import ToolBar from './layouts/Toolbar';
import Content from './layouts/Content';
import bus from './utils/event-bus';

import './styles/index.less';

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
  copyCode?: {
    text?: string;
    tips?: string;
  };
}

export interface StaticTextDefault {
  'zh-CN': StaticTextDefaultValue;
  'en-US': StaticTextDefaultValue;
}

export type StaticTextDefaultKey = keyof StaticTextDefault;

export type ToolbarNames = keyof ToolbarTips;

export interface SettingType {
  pageFullScreen: boolean;
  fullscreen: boolean;
  preview: boolean;
  htmlPreview: boolean;
}

export const prefix = 'md';

const props = {
  modelValue: {
    type: String as PropType<string>,
    default: ''
  },
  // 主题，支持light和dark
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light'
  },
  // 外层扩展类名
  editorClass: {
    type: String,
    default: ''
  },
  // 如果项目中有使用highlight.js或者没有外网访问权限，可以直接传递实例hljs并且手动导入css
  hljs: {
    type: Object,
    default: null
  },
  // 可以手动提供highlight.js的cdn链接
  highlightJs: {
    type: String as PropType<string>,
    default: highlightUrl.js
  },
  highlightCss: {
    type: String as PropType<string>,
    default: highlightUrl.css
  },
  historyLength: {
    type: Number as PropType<number>,
    default: 10
  },
  onChange: {
    type: Function as PropType<(v: string) => void>
  },
  onSave: {
    type: Function as PropType<(v: string) => void>,
    default: () => () => {}
  },
  onUploadImg: {
    type: Function as PropType<
      (files: FileList, callBack: (urls: string[]) => void) => void
    >
  },
  pageFullScreen: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  preview: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  htmlPreview: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  language: {
    type: String as PropType<StaticTextDefaultKey | string>,
    default: 'zh-CN'
  },
  // 语言扩展，以标准的形式定义内容，设置language为key值即可替换
  languageUserDefined: {
    type: Array as PropType<Array<{ [key: string]: StaticTextDefaultValue }>>,
    default: () => []
  },
  // 工具栏选择显示
  toolbars: {
    type: Array as PropType<Array<ToolbarNames>>,
    default: allToolbar
  },
  // 工具栏选择不显示
  toolbarsExclude: {
    type: Array as PropType<Array<ToolbarNames>>,
    default: []
  },
  prettier: {
    type: Boolean as PropType<boolean>,
    default: true
  },
  prettierCDN: {
    type: String as PropType<string>,
    default: prettierUrl.main
  },
  prettierMDCDN: {
    type: String as PropType<string>,
    default: prettierUrl.markdown
  },
  editorName: {
    type: String as PropType<string>,
    default: 'editor'
  },
  // html变化事件
  onHtmlChanged: {
    type: Function as PropType<(h: string) => void>
  }
};

export default defineComponent({
  name: 'MdEditorV3',
  props,
  setup(props, context) {
    useKeyBoard(props, context);

    // 注入高亮src
    provide('highlight', {
      js: props.highlightJs,
      css: props.highlightCss
    });

    // 注入历史设置
    provide('historyLength', props.historyLength);

    // 注入语言设置
    const usedLanguageText = computed(() => {
      const allText: any = {
        ...staticTextDefault,
        ...props.languageUserDefined
      };

      if (allText[props.language]) {
        return allText[props.language];
      } else {
        return staticTextDefault['zh-CN'];
      }
    });

    provide('usedLanguageText', usedLanguageText.value);
    // -end-

    // 注入名称
    provide('editorName', props.editorName);

    bus.on({
      name: 'uploadImage',
      callback(files: FileList, cb: () => void) {
        const insertHanlder = (urls: Array<string>) => {
          urls.forEach((url) => {
            // 利用事件循环机制，保证两次插入分开进行
            setTimeout(() => {
              bus.emit('replace', 'image', {
                desc: '',
                url
              });
            }, 0);
          });

          cb && cb();
        };

        if (props.onUploadImg) {
          props.onUploadImg(files, insertHanlder);
        } else {
          context.emit('onUploadImg', files, insertHanlder);
        }
      }
    });

    // ----编辑器设置----
    const setting = reactive<SettingType>({
      pageFullScreen: props.pageFullScreen,
      fullscreen: false,
      preview: props.preview,
      htmlPreview: props.preview ? false : props.htmlPreview
    });

    const updateSetting = (v: any, k: keyof typeof setting) => {
      setting[k] = v;
      if (k === 'preview' && setting.preview) {
        setting.htmlPreview = false;
      } else if (k === 'htmlPreview' && setting.htmlPreview) {
        setting.preview = false;
      }
    };

    let bodyOverflowHistory = document.body.style.overflow;
    const adjustBody = () => {
      if (setting.pageFullScreen || setting.fullscreen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = bodyOverflowHistory;
      }
    };

    // 变化是调整一次
    watch(() => [setting.pageFullScreen, setting.fullscreen], adjustBody);
    // 进入时若默认全屏，调整一次
    adjustBody();
    // ----end----

    return () => (
      <div
        id={`${prefix}-${props.editorName}`}
        class={[
          prefix,
          props.editorClass,
          props.theme === 'dark' && `${prefix}-dark`,
          setting.fullscreen || setting.pageFullScreen ? `${prefix}-fullscreen` : ''
        ]}
      >
        <ToolBar
          toolbars={props.toolbars}
          toolbarsExclude={props.toolbarsExclude}
          setting={setting}
          updateSetting={updateSetting}
        />
        <Content
          hljs={props.hljs}
          value={props.modelValue}
          onChange={(value: string) => {
            if (props.onChange) {
              props.onChange(value);
            } else {
              context.emit('update:modelValue', value);
            }
          }}
          setting={setting}
          onHtmlChanged={(html: string) => {
            if (props.onHtmlChanged) {
              props.onHtmlChanged(html);
            } else {
              context.emit('onHtmlChanged', html);
            }
          }}
        />
        <Teleport to={document.head}>
          <script src={iconfontUrl} />
        </Teleport>
        {props.prettier && (
          <Teleport to={document.head}>
            <script src={props.prettierCDN} />
            <script src={props.prettierMDCDN} />
          </Teleport>
        )}
      </div>
    );
  }
});
