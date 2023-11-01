<template>
    <slot>
        <div class="rotate-45">
            底部测试
            <time :datetime="$dayjs('2023-01-01').utc().toString()"> {{ $dayjs('2023-01-01').utc().toString() }}</time>
        </div>
    </slot>
</template>
<script setup lang="ts">
</script>
