# 白天黑夜模式切换

该组件实现了一个白天/黑夜模式切换功能，用户可以通过按钮切换主题。

## 模板部分

```Vue
<template>
  <div :class="{ dark: isDark }" class="container">
    <h1>白天/黑夜模式切换</h1>
    <button @click="toggleDarkMode">
      切换到 {{ isDark ? '白天' : '黑夜' }} 模式
    </button>
  </div>
</template>

```

点击按钮时切换当前模式，按钮文本会根据当前模式动态变化

## 脚本部分

```TypeScript
<script lang="ts">
import { defineComponent } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

export default defineComponent({
  setup() {
    const isDark = useDark();
    const toggleDarkMode = () => {
      useToggle(isDark)(); // 调用 toggle 方法
    };

    return {
      isDark,
      toggleDarkMode,
    };
  },
});
</script>

```

### 使用说明

用户点击按钮可以在白天和黑夜模式之间切换，页面背景和文本颜色会随之改变

### 效果实现

![白天黑夜](https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E7%99%BD%E5%A4%A9%E9%BB%91%E5%A4%9C.png "白天黑夜切换")
