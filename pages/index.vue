<template>
    <div>
        主页
        <button @click="handleClick">测试</button>
        <p v-for="item in items" :key="item.documentId">{{ item.name }}</p>
    </div>
</template>
<script setup>
// import {useApi} from "~/composables/useApi.js";

// const { data: apiData } = useFetch("/api/pm-cities");
// const items = computed(() => apiData.value?.data || []);


const {data: items, refresh} = useAsyncData('pm-cities',
    async () => {
        const {data} = await useFetch("/api/pm-cities");
        return data.value?.data || []; // 确保返回数组
    },
    {
        transform: (res) => res || []
    }
);

const handleClick = () => {
    $fetch("/api/pm-classifies").then(res => {
        console.log(res)
        items.value = res.data;
    })
}
</script>
