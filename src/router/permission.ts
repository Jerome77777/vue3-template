/**
 * @name permission
 * @description 全局路由过滤、权限过滤
 */

import { router } from '.'

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to: any, _, next) => {
  const hasToken = true
  if (hasToken) {
    // 已登录
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      //是否获取过用户信息
      next()
    }
  } else {
    // 未登录
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
