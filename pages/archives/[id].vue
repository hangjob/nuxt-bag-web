<template>
   <div>
       <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">
           {{ locale.name }} - {{ locale.code }}
       </a>
       <h1>{{ $t('title') }}</h1>
   </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => {
    return locales.value.filter(i => i.code !== locale.value)
})

console.log(locales)
</script>
