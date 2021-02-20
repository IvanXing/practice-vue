<template>
  <div class="s-button-group">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    mounted() {
      for (let node of this.$el.children) {
        let name = node.nodeName.toLowerCase()
        if (name !== 'button') {
          console.warn(`g-button-group 的子元素应该全是 g-button，但是你写的是 ${name}`)
        }
      }
    }
  }
</script>

<style lang="scss">
  .s-button-group {
    display: inline-flex;
    vertical-align: middle;

    > .s-button {
      border-radius: 0;
      /* 处理重合 除了第一个元素 都向前 */
      &:not(:first-child) {
        margin-left: -1px;
      }

      /* 处理中间button border-radius */
      &:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }

      &:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }

      /* 鼠标hover z-index变1  hover border颜色bug解决 相当于浮起*/
      &:hover {
        position: relative;
        z-index: 1;
      }
    }
  }
</style>
