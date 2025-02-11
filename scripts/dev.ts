import path from 'path';
import { createServer } from 'vite';
import { fileURLToPath } from 'url';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import markdown from '@vavt/vite-plugin-import-markdown';

import nodeService from './plugins/nodeService';

const __dirname = fileURLToPath(new URL('..', import.meta.url));
const resolvePath = (p: string) => path.resolve(__dirname, p);

// vue3.3.x兼容
const __defProp = Object.defineProperty;
const __name = (target, value) =>
  __defProp(target, 'name', { value, configurable: true });
globalThis.__name = __name;

!(async () => {
  const server = await createServer({
    base: '/',
    publicDir: resolvePath('dev/public'),
    resolve: {
      alias: {
        '@': resolvePath('dev'),
        '~~': resolvePath('packages'),
        '~': resolvePath('packages/MdEditor')
      }
    },
    plugins: [vue(), vueJsx(), nodeService(), markdown()],
    css: {
      modules: {
        localsConvention: 'camelCase' // 默认只支持驼峰，修改为同事支持横线和驼峰
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  });

  await server.listen();

  server.printUrls();
})();
