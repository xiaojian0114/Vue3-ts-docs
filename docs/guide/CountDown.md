## 倒计时功能

### 组件结构

该组件展示了一个倒计时器，用户可以开始或重置倒计时

使用了 Vue 3 的 Composition API 和 TypeScript

### 模板部分

```Vue
<template>
  <div>
    <p>目前时间: {{ formattedTime }}</p>
    <button @click="startCountdown">开始</button>
    <button @click="resetCountdown">重置</button>
  </div>
</template>

```

标签：显示格式化后的剩余时间

### 脚本部分

```TypeScript
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useCountdown } from '../composables/useCountdown';

export default defineComponent({
 setup() {
   // 从 10 秒开始倒计时
   const { remainingTime, startCountdown, resetCountdown } = useCountdown(10);

   // 格式化剩余时间为 MM:SS
   const formattedTime = computed(() => {
     const minutes = Math.floor(remainingTime.value / 60).toString().padStart(2, '0');
     const seconds = (remainingTime.value % 60).toString().padStart(2, '0');
     return `${minutes}:${seconds}`;
   });

   return {
     formattedTime,
     startCountdown,
     resetCountdown,
   };
 },
});
</script>

```

#### 关键点

computed: 创建一个计算属性，用于格式化剩余时间。

时间格式为 MM:SS

使用 padStart(2, '0') 确保分钟和秒数都是两位数

### 使用

按钮触发的事件将控制倒计时的开始和重置，剩余时间将实时更新并显示

### 效果图

![倒计时](https://my-bucket-wyj.oss-cn-shanghai.aliyuncs.com/images/%E5%80%92%E8%AE%A1%E6%97%B6.png "倒计时效果")
