import '/@/styles/index.less'
import 'sanitize.css'

import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import './router/permission'
// import { setupComponents } from './plugin';

// vxe table
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import '/@/mixins/table'

const app = createApp(App)

app.use(router)
app.use(VXETable)

// Register global directive

// Register UI components
// setupComponents(app);

// 全局属性
// app.config.globalProperties.AuthEnum = AuthEnum;

app.mount('#app')
