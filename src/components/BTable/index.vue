<template>
  <vxe-grid ref="xGrid" v-bind="gridOptions">
    <template #pager>
      <vxe-pager
        :layouts="[
          'Sizes',
          'PrevJump',
          'PrevPage',
          'Number',
          'NextPage',
          'NextJump',
          'FullJump',
          'Total',
        ]"
        v-model:current-page="tablePage.currentPage"
        v-model:page-size="tablePage.pageSize"
        :total="tableTotal"
        @page-change="handlePageChange"
      >
      </vxe-pager>
    </template>
  </vxe-grid>
</template>

<script lang="ts" setup>
  import { VxeGridProps, VxePagerEvents } from 'vxe-table'
  import { TableChange } from './table'
  import { cloneDeep } from 'lodash-es'
  import { useEventbus } from '/@/hooks/useEventBus'

  const eventbus = useEventbus()

  // import { TableReactiveData } from './table'
  const props = defineProps<{
    gridOptions: VxeGridProps
    tablePage: TableChange
  }>()

  const { gridOptions, tablePage } = toRefs(props)

  const emits = defineEmits(['update:tablePage'])

  // computed
  const tableTotal = computed(() => gridOptions.value.data?.length || 0)

  // watch

  // life cycle

  onBeforeMount(async () => {})

  // methods
  const handlePageChange: VxePagerEvents.PageChange = ({
    currentPage,
    pageSize,
  }) => {
    const tmpTablePage = cloneDeep(tablePage.value)
    tmpTablePage.currentPage = currentPage
    tmpTablePage.pageSize = pageSize
    emits('update:tablePage', tmpTablePage)
    eventbus.toRefreshTable()
  }
</script>

<style lang="less" scoped></style>
