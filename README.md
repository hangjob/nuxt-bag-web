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
const { data: apiData } = useFetch("/api/pm-cities");
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
const items = ref(["😏","😐","😑","😒","😕"])
function removeItem(toRemove) {
    items.value = items.value.filter((item) => item !== toRemove)
}
</script>
```
### 状态管理


### 图标合集
[https://icones.js.org/](https://icones.js.org/)
