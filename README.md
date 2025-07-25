### nuxt-bag-web 构建一个响应式的SSR服务端渲染，采用Nuxt3、Naive UI、JavaScript、Pinia等前沿最新的技术栈开发，提供最基础的功能

### tailwindcss

`"@nuxt/ui`已安装tailwindcss，如果需要自定义tailwindcss，请删除`@nuxt/ui`，并自行安装tailwindcss

```vue
// nuxt/ui 使用
<UApp>
<NuxtPage/>
</UApp>
```

### 请求水和问题

```typescript
// 方式一
const {data: apiData} = useFetch("/api/pm-cities");
const items = computed(() => apiData.value?.data || []);
```

```typescript
// 方式二
const {data: items, refresh} = useAsyncData('pm-cities',
    async () => {
        const {data} = await useFetch("/api/pm-cities", {method: "POST"});
        return data.value?.data || []; // 确保返回数组
    },
    {
        transform: (res) => res || []
    }
);
```

### 动画

过度动画库，会让页面元素有一个平滑的过渡效果，而不是直接出现或消失`@formkit/auto-animate/nuxt`

```vue

<template>
    <div>
        <h5>Click emojis to remove them.</h5>
        <ul v-auto-animate>
            <li
                v-for="item in items"
                :key="item"
                @click="removeItem(item)"
            >
                {{ item }}
            </li>
        </ul>
    </div>
</template>
<script setup>
const items = ref(["😏", "😐", "😑", "😒", "😕"])

function removeItem(toRemove) {
    items.value = items.value.filter((item) => item !== toRemove)
}
</script>
```

### 状态管理

### 图标合集

[https://icones.js.org/](https://icones.js.org/)

### 提交规范

✨ feat 新增功能
🐞 fix 修复 bug
📃 docs 文档变更
🌈 style 代码格式（仅仅修改了空格、缩进、逗号等等，不改变代码逻辑）
🦄 refactor 代码重构，没有加新功能或修复 bug
🎈 perf 代码优化，比如提升性能、体验
🔧 build 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
🐳 chore 对构建过程或辅助工具和库的更改 (不影响源文件、测试用例)
⏳ workflow 工作流程改进

### 集成naiveui

```vue

<n-message-provider>
<content/>
</n-message-provider>
```

下面这两个需要安装

```js
import AutoImport from 'unplugin-auto-import/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
```


