import { defineComponent, reactive, PropType, onMounted, onUnmounted } from 'vue';
import Editor from '../../MdEditor';
import { mdText } from '../data';
import { Theme } from '../App';

import './index.less';

const SAVE_KEY = 'XHMPGLJIZTDB';

export default defineComponent({
  props: {
    theme: String as PropType<Theme>,
    onChange: {
      type: Function as PropType<(v: Theme) => void>,
      default: () => {}
    }
  },
  setup(props) {
    const storagedText = localStorage.getItem(SAVE_KEY) || '';
    const md = reactive({
      text: storagedText || mdText
    });

    // 自动保存
    let taskId = -1;
    onMounted(() => {
      taskId = window.setInterval(() => {
        localStorage.setItem(SAVE_KEY, md.text);
      }, 10_000);
    });

    onUnmounted(() => {
      clearInterval(taskId);
    });
    // -----end-----

    return () => (
      <div class="project-preview">
        <div class="container">
          <Editor
            theme={props.theme}
            modelValue={md.text}
            onSave={(v) => {
              localStorage.setItem(SAVE_KEY, v);
            }}
            onChange={(value) => (md.text = value)}
            onUploadImg={(files, callback) => {
              console.log(files);
              callback([
                'https://art-1252753142.cos.ap-chengdu.myqcloud.com/2021/06301522413082599421018280471.png',
                'https://art-1252753142.cos.ap-chengdu.myqcloud.com/2021/06301606102817061001806835437.gif'
              ]);
            }}
          />
          <br />
          <span class="tips-text">
            tips：本页上方的编辑器有localstorage保存功能，可手动点击保存触发，编辑器每10秒钟会自己保存一次，可用于一些文档的编辑。下方的文档内容也是使用该编辑器完成~
          </span>
        </div>
      </div>
    );
  }
});
