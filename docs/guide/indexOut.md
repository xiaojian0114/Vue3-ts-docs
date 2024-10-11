# Vueuse课外学习

## 用法

### 脚本部分

无持久化（存储在内存中）

```TypeScript
import { createGlobalState } from '@vueuse/core'
// store.js
import { ref } from 'vue'

export const useGlobalState = createGlobalState(
  () => {
    const count = ref(0)
    return { count }
  }
)
```

#### 使用Persistence

使用 useStorage 存储localStorage

```TypeScript

// store.js
import { createGlobalState, useStorage } from '@vueuse/core'

export const useGlobalState = createGlobalState(
  () => useStorage('vueuse-local-storage', 'initialValue'),
)

// component.js
import { useGlobalState } from './store'

export default defineComponent({
  setup() {
    const state = useGlobalState()
    return { state }
  },
})

```

### 效果实现
