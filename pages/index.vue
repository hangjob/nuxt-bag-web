<template>
    <div class="px-5 text-[22px] bg-gray-100">
        主页
        <UButton>Button{{ website.description }}</UButton>
        <button class="px-5" @click="handleClick">测试</button>
        <!--        <img src="~/assets/image/1.jpg" alt="">-->
        <p v-for="item in items" :key="item.documentId">{{ item.name }}</p>
    </div>
</template>
<script setup>
import {useWebsiteStore} from "~/stores/website.js";
const website = useWebsiteStore()


const {data: items, refresh} = useAsyncData('pm-cities',
    async () => {
        const {data} = await useFetch(`/api/admin/login-admin?a=${website.description}`, {
            method: "POST",
            headers: {
                abc: "88888" // 👈 客户端添加请求头
            }
        });
        return data.value?.data || []; // 确保返回数组
    },
    {
        transform: (res) => res || []
    }
);

const handleClick = () => {
    website.description = '2222'
    $fetch(`/api/admin/login-admin?a=${website.description}`, {
        method: "POST",
        headers: {
            abc: "6666" // 👈 客户端添加请求头
        }
    }).then(res => {
        console.log(res)
        items.value = res.data;
    })
}
</script>
