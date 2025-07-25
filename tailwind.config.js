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
        './app.vue'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#6366f1',
                secondary: '#8b5cf6',
                dark: {
                    400: '#94a3b8',
                    300: '#cbd5e1',
                    500: '#64748b',
                    600: '#475569',
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                },
                slate: {
                    900: '#0f172a',
                    800: '#1e293b',
                    700: '#334155',
                    600: '#475569',
                    500: '#64748b',
                    400: '#94a3b8',
                    300: '#cbd5e1',
                }
            },
            boxShadow: {
                'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
                'inner-glass': 'inset 0 4px 30px rgba(0, 0, 0, 0.1)'
            },
            animation: {
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-5px)' },
                }
            }
        }
    }
}
