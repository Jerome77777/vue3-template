import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { AutoImportDeps } from './autoImport'
import { autoRegistryComponents } from './component'
import {
  createStyleImportPlugin,
  VxeTableResolve,
} from 'vite-plugin-style-import'

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // 自动按需引入组件
    autoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
    createStyleImportPlugin({
      resolves: [VxeTableResolve()],
    }),
  ]
  return vitePlugins
}
