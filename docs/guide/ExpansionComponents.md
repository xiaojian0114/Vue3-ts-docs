# 拓展组合函数

## Vue组件: 电池状态

这个 Vue 组件用于显示设备的电池状态，包括电池电量和充电状态
它利用了 VueUse 的 useBattery 来获取电池信息

### 组件结构

#### 模块部分

```Vue

<template>
  <div class="battery-status">
    <p v-if="isSupported" class="battery-level">电池电量: {{ (level * 100).toFixed(0) }}%</p>
    <p v-if="isSupported" class="battery-charging">电池状态: {{ charging ? '正在充电' : '未充电' }}</p>
    <p v-else class="unsupported">此浏览器不支持电池 API。</p>
  </div>
</template>

```

#### 脚本部分

```TypeScript

<script lang="ts">
import { defineComponent } from 'vue';
import { useBattery } from '@vueuse/core';

export default defineComponent({
  setup() {
    const { isSupported, charging, level } = useBattery();

    return {
      isSupported,
      charging,
      level
    };
  }
});
</script>

```

### 总结

这个组件提供了简单直观的用户界面，能够实时反映电池状态，并在不支持的情况下给出友好的提示

## Vue组件: 图片上传与预览

这个 Vue 组件允许用户选择并预览图片，并提供删除功能

### 组件结构

#### 模板部分

```Vue

<template>
  <div class="upload-container">
    <label class="custom-file-upload">
      选择图片
      <input type="file" accept="image/*" @change="previewImage" />
    </label>
    <div v-if="imageUrl" class="image-preview">
      <img :src="imageUrl" alt="预览图" />
      <button @click="removeImage" class="remove-button">删除照片</button>
    </div>
  </div>
</template>

```

#### 脚本部分

```TypeScript

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const imageUrl = ref<string | null>(null);

    const previewImage = (event: Event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          imageUrl.value = e.target?.result as string;
        };
        reader.readAsDataURL(file);
      }
    };

    const removeImage = () => {
      imageUrl.value = null;
    };

    return {
      imageUrl,
      previewImage,
      removeImage,
    };
  },
});
</script>

```

### 总结

该组件提供了简单而直观的用户界面，允许用户轻松上传和预览图片，同时提供删除功能
