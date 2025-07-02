<template>
    <div class="flex">
        <div class="flex-1">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 头部横幅 -->
                <div class="gradient-border rounded-2xl mb-8">
                    <div class="glass-card rounded-2xl p-8">
                        <div class="flex flex-col md:flex-row items-center">
                            <div class="flex-1 mb-6 md:mb-0">
                                <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">探索开发者必备工具</h1>
                                <p class="text-slate-300 mb-6 max-w-xl">发现、比较和收藏最适合您项目的工具和框架。超过 2,000 个精选开发资源。</p>
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <button class="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-white hover:opacity-90 transition flex items-center">
                                        <span>立即探索</span>
                                        <i class="fas fa-arrow-right ml-2 text-sm"></i>
                                    </button>
                                    <button class="px-6 py-3 bg-slate-800 rounded-lg font-medium text-slate-200 border border-slate-700 hover:bg-slate-700 transition flex items-center">
                                        <span>查看热门</span>
                                        <i class="fas fa-fire ml-2 text-sm"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="w-full md:w-2/5 flex justify-center">
                                <div class="relative">
                                    <div class="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-float"></div>
                                    <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-float animation-delay-2000"></div>
                                    <div class="relative w-64 h-64 rounded-2xl overflow-hidden">
                                        <div class="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                                        <div class="absolute top-4 left-4 flex gap-2">
                                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div class="absolute inset-0 flex items-center justify-center p-4">
                                            <div class="grid grid-cols-3 gap-4">
                                                <div class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                                    <i class="fab fa-vuejs text-white text-xl"></i>
                                                </div>
                                                <div class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center">
                                                    <i class="fab fa-react text-white text-xl"></i>
                                                </div>
                                                <div class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center">
                                                    <i class="fab fa-js text-white text-xl"></i>
                                                </div>
                                                <div class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                                                    <i class="fab fa-node-js text-white text-xl"></i>
                                                </div>
                                                <div class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center">
                                                    <i class="fas fa-database text-white text-xl"></i>
                                                </div>
                                                <div class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                                                    <i class="fas fa-cloud text-white text-xl"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 分类磁贴 -->
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-white">热门分类</h2>
                    <a href="#" class="text-primary hover:underline flex items-center">
                        <span>查看全部</span>
                        <i class="fas fa-chevron-right ml-1 text-sm"></i>
                    </a>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
                    <div class="category-tile glass-card rounded-xl overflow-hidden">
                        <div class="p-5">
                            <div class="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-3">
                                <i class="fab fa-vuejs text-emerald-400 text-xl"></i>
                            </div>
                            <h3 class="font-semibold text-white mb-1">Vue 生态</h3>
                            <p class="text-sm text-slate-400">126 个工具</p>
                        </div>
                    </div>
                    <div class="category-tile glass-card rounded-xl overflow-hidden">
                        <div class="p-5">
                            <div class="w-12 h-12 rounded-lg bg-sky-500/20 flex items-center justify-center mb-3">
                                <i class="fab fa-react text-sky-400 text-xl"></i>
                            </div>
                            <h3 class="font-semibold text-white mb-1">React 生态</h3>
                            <p class="text-sm text-slate-400">98 个工具</p>
                        </div>
                    </div>
                    <div class="category-tile glass-card rounded-xl overflow-hidden">
                        <div class="p-5">
                            <div class="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-3">
                                <i class="fab fa-node-js text-green-400 text-xl"></i>
                            </div>
                            <h3 class="font-semibold text-white mb-1">Node.js 工具</h3>
                            <p class="text-sm text-slate-400">87 个工具</p>
                        </div>
                    </div>
                    <div class="category-tile glass-card rounded-xl overflow-hidden">
                        <div class="p-5">
                            <div class="w-12 h-12 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3">
                                <i class="fas fa-database text-amber-400 text-xl"></i>
                            </div>
                            <h3 class="font-semibold text-white mb-1">数据库工具</h3>
                            <p class="text-sm text-slate-400">64 个工具</p>
                        </div>
                    </div>
                    <div class="category-tile glass-card rounded-xl overflow-hidden">
                        <div class="p-5">
                            <div class="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-3">
                                <i class="fas fa-robot text-purple-400 text-xl"></i>
                            </div>
                            <h3 class="font-semibold text-white mb-1">AI 开发工具</h3>
                            <p class="text-sm text-slate-400">42 个工具</p>
                        </div>
                    </div>
                </div>
                <!-- 热搜榜 -->
                <div class="glass-card rounded-2xl p-6 mb-12">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">开发者热搜榜</h2>
                        <div class="flex items-center">
                            <div class="text-sm text-slate-400 mr-4">更新于: 2023-11-15</div>
                            <button class="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-700 flex items-center">
                                <i class="fas fa-sync-alt mr-1 text-xs"></i>
                                <span>刷新</span>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- 热搜项 1 -->
                        <div class="trending-item glass-card rounded-xl p-4 transition-all">
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-300 flex items-center justify-center text-white font-bold mr-4">
                                    1
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="font-semibold text-white">Vite</div>
                                            <div class="text-sm text-slate-400">下一代前端工具</div>
                                        </div>
                                        <div class="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center">
                                            <i class="fas fa-bolt text-white"></i>
                                        </div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 mr-3">构建工具</span>
                                        <div class="flex items-center text-green-500 text-sm">
                                            <i class="fas fa-arrow-up mr-1"></i>
                                            <span>12%</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-4">
                                        <div class="text-sm text-slate-400">
                                            <i class="fas fa-fire text-orange-400 mr-1"></i>
                                            <span>9.8k 热度</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                                <i class="far fa-star text-slate-300"></i>
                                            </button>
                                            <button class="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-primary">
                                                详情
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 热搜项 2 -->
                        <div class="trending-item glass-card rounded-xl p-4 transition-all">
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-slate-600 to-slate-400 flex items-center justify-center text-white font-bold mr-4">
                                    2
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="font-semibold text-white">TypeScript</div>
                                            <div class="text-sm text-slate-400">JavaScript的超集</div>
                                        </div>
                                        <div class="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center">
                                            <i class="fab fa-js text-white"></i>
                                        </div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 mr-3">编程语言</span>
                                        <div class="flex items-center text-green-500 text-sm">
                                            <i class="fas fa-arrow-up mr-1"></i>
                                            <span>5%</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-4">
                                        <div class="text-sm text-slate-400">
                                            <i class="fas fa-fire text-orange-400 mr-1"></i>
                                            <span>8.7k 热度</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                                <i class="fas fa-star text-yellow-400"></i>
                                            </button>
                                            <button class="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-primary">
                                                详情
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 热搜项 3 -->
                        <div class="trending-item glass-card rounded-xl p-4 transition-all">
                            <div class="flex items-start">
                                <div class="w-10 h-10 rounded-lg bg-gradient-to-r from-amber-700 to-amber-500 flex items-center justify-center text-white font-bold mr-4">
                                    3
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="font-semibold text-white">Prisma</div>
                                            <div class="text-sm text-slate-400">下一代ORM</div>
                                        </div>
                                        <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                                            <i class="fas fa-database text-white"></i>
                                        </div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 mr-3">数据库</span>
                                        <div class="flex items-center text-green-500 text-sm">
                                            <i class="fas fa-arrow-up mr-1"></i>
                                            <span>18%</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-4">
                                        <div class="text-sm text-slate-400">
                                            <i class="fas fa-fire text-orange-400 mr-1"></i>
                                            <span>7.2k 热度</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                                <i class="far fa-star text-slate-300"></i>
                                            </button>
                                            <button class="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-primary">
                                                详情
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- AI推荐工作流 -->
                <div class="mb-12">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">精选开发工具</h2>
                        <div class="flex">
                            <button class="px-3 py-1 bg-slate-800 rounded-l-lg text-sm text-slate-300 hover:bg-slate-700">
                                前端
                            </button>
                            <button class="px-3 py-1 bg-slate-700 border-l border-r border-slate-600 text-sm text-slate-300">
                                后端
                            </button>
                            <button class="px-3 py-1 bg-slate-800 rounded-r-lg text-sm text-slate-300 hover:bg-slate-700">
                                AI
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- 工具卡片 1 -->
                        <div class="tool-card glass-card rounded-xl p-5">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-violet-600 to-purple-500 flex items-center justify-center mr-3">
                                    <i class="fab fa-vuejs text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">Vue.js</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span>4.9/5.0</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-slate-400 mb-4">渐进式 JavaScript 框架，用于构建用户界面</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">前端</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">框架</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">响应式</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm hover:opacity-90">
                                    详情
                                </button>
                                <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                    <i class="far fa-star text-slate-300"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 工具卡片 2 -->
                        <div class="tool-card glass-card rounded-xl p-5">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 flex items-center justify-center mr-3">
                                    <i class="fab fa-react text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">React</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span>4.8/5.0</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-slate-400 mb-4">用于构建用户界面的 JavaScript 库</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">前端</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">UI</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">组件</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm hover:opacity-90">
                                    详情
                                </button>
                                <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600">
                                    <i class="fas fa-star text-yellow-400"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 工具卡片 3 -->
                        <div class="tool-card glass-card rounded-xl p-5">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 flex items-center justify-center mr-3">
                                    <i class="fab fa-node-js text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">Express.js</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span>4.7/5.0</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-slate-400 mb-4">快速、开放、极简的 Node.js Web 框架</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">后端</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">API</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">服务器</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm hover:opacity-90">
                                    详情
                                </button>
                                <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-600">
                                    <i class="far fa-star text-slate-300"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 工具卡片 4 -->
                        <div class="tool-card glass-card rounded-xl p-5">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center mr-3">
                                    <i class="fas fa-robot text-white text-xl"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">LangChain</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="fas fa-star text-yellow-400 mr-1"></i>
                                        <span>4.6/5.0</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-slate-400 mb-4">用于开发由语言模型驱动的应用程序的框架</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">AI</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">LLM</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">NLP</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-sm hover:opacity-90">
                                    详情
                                </button>
                                <button class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-purple-600">
                                    <i class="far fa-star text-slate-300"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <PagesWorkflow/>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useWebsiteStore} from "~/stores/website.js";

const website = useWebsiteStore()

</script>

<style lang="css"  scoped>


.gradient-border {
    position: relative;
    border-radius: 16px;
}

.gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #6366f1, #8b5cf6, #ec4899);
    border-radius: 18px;
    z-index: -1;
    animation: gradient-x 8s ease infinite;
    background-size: 300% 300%;
}

.category-tile {
    transition: all 0.3s ease;
    transform-origin: center;
}

.category-tile:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 8px 10px -6px rgba(99, 102, 241, 0.2);
}

.tool-card {
    transition: all 0.2s ease;
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2), 0 4px 6px -4px rgba(99, 102, 241, 0.2);
}

.tab-button {
    position: relative;
    padding: 12px 24px;
    transition: all 0.3s ease;
}

.tab-button.active {
    color: #e2e8f0;
}

.tab-button.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    border-radius: 4px 4px 0 0;
}
</style>
