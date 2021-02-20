<template>
  <button class='s-button' :class="{[`icon-${iconPosition}`]: true}"
    @click="$emit('click1')"
  >
    <s-icon class="icon" v-if="icon && !loading" :name="icon"></s-icon>
    <s-icon class="loading icon" v-if="loading" name="loading"></s-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  export default {
    // props: ['icon', 'iconPosition']
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false,
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator(value) {
          return value === 'left' || value === 'right';
        }
      }
    }
  }
</script>

<style lang="scss">
  .s-button {

    /*loading动画*/
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    .loading{
      animation: spin 2s infinite linear;  /* spin动画 2s 无限 线性 滚动*/
    }

    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 .7em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);

    display: inline-flex;
    justify-content: center;
    align-items: center;
    /* inline-flex 造成上下不对齐 所有inline元素都有此问题解决办法*/
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    /*用css控制顺序 默认排序 多属性反转*/
    > .icon {
      order: 1;
      margin-right: .3em;
    }

    > .content {
      order: 2;
    }

    &.icon-right {
      > .icon {
        order: 2;
        margin-left: .3em;
        margin-right: 0;
      }

      > .content {
        order: 1;
      }
    }
  }
</style>
