<template>
  <div id="editor"></div>
</template>

<script lang="ts" setup>
  import '@textbus/editor/bundles/textbus.min.css'
  import { createEditor } from '@textbus/editor'

  // computed

  // watch

  // life cycle

  onBeforeMount(async () => {})

  onMounted(async () => {
    const editor = createEditor()
    const editorNode = document.getElementById('editor')
    editor.mount(editorNode!)

    // 监听数据变化，并获取编辑结果
    editor.onChange.subscribe(() => {
      // const contents = editor.getContents()
      console.log(editor.getJSON())
    })
  })

  // methods
</script>

<style lang="less" scoped></style>
