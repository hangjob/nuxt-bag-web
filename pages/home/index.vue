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
