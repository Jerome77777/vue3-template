import VXETable from 'vxe-table'
import XEUtils from 'xe-utils'

// 自定义全局的格式化处理函数
VXETable.formats.mixin({
  // 格式化下拉选项
  formatSelect({ cellValue }, list) {
    const item = list.find((item) => item.value === cellValue)
    return item ? item.label : ''
  },
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
  formatDateTime({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  },
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
  formatDate({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd')
  },
})
