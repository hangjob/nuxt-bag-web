module.exports = {
    safelist: [
        'bg-purple-500/20',
        'bg-green-500/20',
        'bg-sky-500/20',
        'bg-emerald-500/20',
        'bg-amber-500/20',
        'text-purple-400',
        'text-amber-400',
        'text-green-400',
        'text-sky-400',
        'text-emerald-400',
        {pattern: /bg-(red|blue|green|yellow|purple|emerald)-(400|500)/},
    ],
    // 内容配置（重要！）
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './app.vue',
        // 添加 @nuxt/ui 组件路径
        './node_modules/@nuxt/ui/**/*.{vue,js,ts,jsx,tsx}',
    ],
}
