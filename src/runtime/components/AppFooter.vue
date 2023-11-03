<template>
        <div class="text-2xl flex h-[20px]">
            底部测试
            <time :datetime="$dayjs('2023-01-01').utc().toString()"> {{ $dayjs('2023-01-01').utc().toString() }}</time>
        </div>
</template>
<script setup lang="ts">
</script>
