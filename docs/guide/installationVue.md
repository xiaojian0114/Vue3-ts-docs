# Vueuse快速入门

这些显示了 VueUse 中大多数函数的一般配置。

## 事件筛选器

从 v4.0 开始，提供了 Event Filters 系统，以灵活地控制何时触发事件

### 控制事件触发速率：throttleFilterdebounceFilter

```TypeScript
import { debounceFilter, throttleFilter, useLocalStorage, useMouse } from '@vueuse/core'

// changes will write to localStorage with a throttled 1s
const storage = useLocalStorage('my-key', { foo: 'bar' }, { eventFilter: throttleFilter(1000) })

// mouse position will be updated after mouse idle for 100ms
const { x, y } = useMouse({ eventFilter: debounceFilter(100) })
```

### 利用暂时暂停某些事件。pausableFilter

```TypeScript
import { pausableFilter, useDeviceMotion } from '@vueuse/core'

const motionControl = pausableFilter()

const motion = useDeviceMotion({ eventFilter: motionControl.eventFilter })

motionControl.pause()
// motion updates paused

motionControl.resume()
// motion updates resumed
```

## 可配置的全局依赖项

从 v4.0 开始，访问浏览器 API 的函数将提供一个选项字段，指定全局依赖项。
默认情况下，它将使用全局实例

```TypeScript

import { useMouse } from '@vueuse/core'

// accessing parent context
const parentMousePos = useMouse({ window: window.parent })

const iframe = document.querySelector('#my-iframe')

// accessing child context
const childMousePos = useMouse({ window: iframe.contentWindow })


// testing
const mockWindow = { /* ... */ }

const { x, y } = useMouse({ window: mockWindow })
```
