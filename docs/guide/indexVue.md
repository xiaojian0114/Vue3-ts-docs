## Vueuse

VueUse 是基于组合式 API 的实用函数集合

### 演示

VueUse 中的大多数函数都返回一个 refs 对象

```TypeScript
import { useMouse } from '@vueuse/core'
const { x, y } = useMouse()
console.log(x.value)

const mouse = useMouse()
console.log(mouse.x.value)
```

### 响应参数

在 Vue 中，我们使用函数来构建数据和逻辑之间的 “连接”。为了使其灵活，大多数 VueUse 函数也接受 refs 作为参数，因为 refs 是响应式的。setup()
