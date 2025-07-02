<template>
    <div class="glass-card rounded-2xl p-6 mb-12">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <div>
                <h2 class="text-2xl font-bold text-white">AI推荐工作流</h2>
                <p class="text-slate-400 mt-1">基于您的收藏和历史行为智能推荐</p>
            </div>

            <div class="flex flex-wrap gap-3">
                <div class="relative">
                    <select class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                        <option>按热度排序</option>
                        <option>按收藏数排序</option>
                        <option>按更新时间</option>
                    </select>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <i class="fas fa-chevron-down text-slate-500"></i>
                    </div>
                </div>

                <div class="flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2">
                    <i class="fas fa-filter text-slate-400"></i>
                    <span class="text-slate-300">筛选</span>
                </div>
            </div>
        </div>

        <!-- 工作流分类标签 -->
        <div class="flex flex-wrap gap-2 mb-6">
            <button class="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium">
                全部
            </button>
            <button class="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition">
                Vue生态
            </button>
            <button class="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition">
                React生态
            </button>
            <button class="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition">
                全栈开发
            </button>
            <button class="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition">
                AI应用
            </button>
            <button class="px-4 py-2 rounded-lg bg-slate-800 text-slate-300 font-medium hover:bg-slate-700 transition">
                移动开发
            </button>
        </div>

        <!-- 工作流网格 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- 工作流卡片 1 -->
            <div class="gradient-border rounded-2xl group">
                <div class="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    <!-- 封面图片 -->
                    <div class="relative h-40 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                             alt="Vue3工作流封面"
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <button class="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-yellow-400 hover:text-yellow-300">
                                <i class="fas fa-star"></i>
                            </button>
                        </div>
                        <div class="absolute bottom-4 left-4">
                            <span class="px-3 py-1 rounded-full bg-primary/80 backdrop-blur-sm text-sm font-medium">热门</span>
                        </div>
                    </div>

                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex items-start mb-4">
                            <div class="mr-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                    <i class="fab fa-vuejs text-white text-xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-bold text-white text-lg">Vue3 + Node.js 全栈开发</h3>
                                <p class="text-slate-400 mt-1">现代Web应用开发工作流</p>
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <div class="w-3 h-3 rounded-full bg-primary mr-2"></div>
                                <div class="font-medium text-white">技术栈</div>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Vue 3</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Pinia</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Vite</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Node.js</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Express</span>
                            </div>
                        </div>

                        <div class="mt-auto pt-4 flex justify-between items-center border-t border-slate-800">
                            <div class="flex items-center text-sm text-slate-500">
                                <i class="fas fa-heart text-rose-500 mr-1"></i>
                                <span class="mr-3">142</span>
                                <i class="fas fa-eye text-sky-500 mr-1"></i>
                                <span>2.4k</span>
                            </div>
                            <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm font-medium hover:opacity-90">
                                查看详情
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 工作流卡片 2 -->
            <div class="gradient-border rounded-2xl group">
                <div class="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    <div class="relative h-40 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1677442135722-5f8ea49cec8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
                             alt="AI应用工作流封面"
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <button class="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-yellow-400">
                                <i class="far fa-star"></i>
                            </button>
                        </div>
                        <div class="absolute bottom-4 left-4">
                            <span class="px-3 py-1 rounded-full bg-purple-600/80 backdrop-blur-sm text-sm font-medium">新发布</span>
                        </div>
                    </div>

                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex items-start mb-4">
                            <div class="mr-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center">
                                    <i class="fas fa-robot text-white text-xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-bold text-white text-lg">AI应用开发工作流</h3>
                                <p class="text-slate-400 mt-1">构建智能应用的全套工具</p>
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <div class="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                <div class="font-medium text-white">技术栈</div>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">LangChain</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">OpenAI</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Pinecone</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Next.js</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Vercel</span>
                            </div>
                        </div>

                        <div class="mt-auto pt-4 flex justify-between items-center border-t border-slate-800">
                            <div class="flex items-center text-sm text-slate-500">
                                <i class="fas fa-heart text-rose-500 mr-1"></i>
                                <span class="mr-3">86</span>
                                <i class="fas fa-eye text-sky-500 mr-1"></i>
                                <span>1.2k</span>
                            </div>
                            <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-sm font-medium hover:opacity-90">
                                查看详情
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 工作流卡片 3 -->
            <div class="gradient-border rounded-2xl group">
                <div class="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    <div class="relative h-40 overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                             alt="移动开发工作流封面"
                             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute top-4 right-4">
                            <button class="w-10 h-10 rounded-full bg-slate-900/80 backdrop-blur-sm flex items-center justify-center text-slate-300 hover:text-yellow-400">
                                <i class="far fa-star"></i>
                            </button>
                        </div>
                    </div>

                    <div class="p-5 flex-1 flex flex-col">
                        <div class="flex items-start mb-4">
                            <div class="mr-4">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 flex items-center justify-center">
                                    <i class="fas fa-mobile-alt text-white text-xl"></i>
                                </div>
                            </div>
                            <div class="flex-1">
                                <h3 class="font-bold text-white text-lg">跨平台移动应用开发</h3>
                                <p class="text-slate-400 mt-1">使用React Native构建iOS/Android应用</p>
                            </div>
                        </div>

                        <div class="mb-4">
                            <div class="flex items-center mb-2">
                                <div class="w-3 h-3 rounded-full bg-emerald-500 mr-2"></div>
                                <div class="font-medium text-white">技术栈</div>
                            </div>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">React Native</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Expo</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Redux</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">Firebase</span>
                                <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">TypeScript</span>
                            </div>
                        </div>

                        <div class="mt-auto pt-4 flex justify-between items-center border-t border-slate-800">
                            <div class="flex items-center text-sm text-slate-500">
                                <i class="fas fa-heart text-rose-500 mr-1"></i>
                                <span class="mr-3">64</span>
                                <i class="fas fa-eye text-sky-500 mr-1"></i>
                                <span>980</span>
                            </div>
                            <button class="px-3 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-sm font-medium hover:opacity-90">
                                查看详情
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 查看全部按钮 -->
        <div class="flex justify-center mt-8">
            <button class="px-6 py-3 bg-slate-800 rounded-lg font-medium text-slate-200 border border-slate-700 hover:bg-slate-700 transition flex items-center">
                <span>查看全部工作流</span>
                <i class="fas fa-arrow-right ml-2 text-sm"></i>
            </button>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
.gradient-border {
    position: relative;
    background: linear-gradient(to right, #7e22ce, #3b82f6, #0ea5e9);
    padding: 2px;
    border-radius: 1rem;
}

.glass-card {
    background: rgba(30, 41, 59, 0.7);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.category-tile:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
    transition: all 0.3s ease;
}

.animate-float {
    animation: float 6s ease-in-out infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0px);
    }
}

/* 工作流卡片悬停效果 */
.group:hover .gradient-border {
    background: linear-gradient(to right, #a855f7, #6366f1, #0ea5e9);
    box-shadow: 0 0 25px rgba(99, 102, 241, 0.5);
    transition: all 0.3s ease;
}
</style>
