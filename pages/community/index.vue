<template>
    <div class="flex">
        <div class="flex-1 page-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 顶部标题区域 -->
                <div class="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div class="text-center md:text-left">
                        <h1 class="text-3xl font-bold text-white">开发者社区</h1>
                        <p class="text-slate-400 mt-2">分享知识、解决问题、交流经验</p>
                    </div>
                    <button class="px-6 py-3 rounded-xl gradient-btn text-white font-medium flex items-center">
                        <i class="fas fa-plus mr-2"></i>发布帖子
                    </button>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <!-- 左侧边栏 -->
                    <div class="lg:col-span-1">
                        <div class="glass-card rounded-2xl p-6 sticky top-6">
                            <h2 class="text-xl font-bold text-white mb-4">社区分类</h2>

                            <div class="space-y-2">
                                <a href="#" class="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                                    <i class="fas fa-code mr-3 text-indigo-400"></i>
                                    <span>前端开发</span>
                                </a>
                                <a href="#" class="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                                    <i class="fas fa-server mr-3 text-amber-400"></i>
                                    <span>后端开发</span>
                                </a>
                                <a href="#" class="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                                    <i class="fas fa-database mr-3 text-emerald-400"></i>
                                    <span>数据库</span>
                                </a>
                                <a href="#" class="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                                    <i class="fas fa-cloud mr-3 text-sky-400"></i>
                                    <span>DevOps</span>
                                </a>
                                <a href="#" class="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                                    <i class="fas fa-robot mr-3 text-pink-400"></i>
                                    <span>AI开发</span>
                                </a>
                                <a href="#" class="flex items-center text-slate-300 hover:text-white p-3 rounded-xl hover:bg-slate-800 transition-colors">
                                    <i class="fas fa-question-circle mr-3 text-rose-400"></i>
                                    <span>问题求助</span>
                                </a>
                            </div>

                            <h2 class="text-xl font-bold text-white mt-8 mb-4">热门标签</h2>
                            <div class="flex flex-wrap gap-2">
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">JavaScript</span>
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">TypeScript</span>
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">Vue</span>
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">React</span>
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">Node.js</span>
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">Nuxt</span>
                                <span class="px-3 py-1 rounded-full bg-slate-800 text-slate-300 tag">Tailwind</span>
                            </div>
                        </div>
                    </div>

                    <!-- 主内容区域 -->
                    <div class="lg:col-span-3">
                        <!-- Nuxt UI 发帖卡片 -->
                        <div class="nuxt-card rounded-2xl p-6 mb-8">
                            <div class="flex items-center mb-4">
                                <div class="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
                                    U
                                </div>
                                <div class="flex-1">
                                    <textarea class="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary" placeholder="分享你的想法或问题..." rows="2"></textarea>
                                </div>
                            </div>
                            <div class="flex justify-between items-center">
                                <div class="flex gap-3">
                                    <button class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 action-btn">
                                        <i class="fas fa-image"></i>
                                    </button>
                                    <button class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 action-btn">
                                        <i class="fas fa-link"></i>
                                    </button>
                                    <button class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 action-btn">
                                        <i class="fas fa-code"></i>
                                    </button>
                                </div>
                                <button class="px-5 py-2.5 rounded-xl gradient-btn text-white font-medium">
                                    发布
                                </button>
                            </div>
                        </div>

                        <div class="space-y-6">
                            <!-- 帖子 1 - Nuxt UI风格 -->
                            <div class="community-post nuxt-card rounded-2xl p-6 transition-all">
                                <div class="flex items-start mb-4">
                                    <div class="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold">
                                        Z
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <div class="font-bold text-white">张开发</div>
                                                <div class="text-sm text-slate-400">前端工程师 · 2小时前</div>
                                            </div>
                                            <button class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 action-btn">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <h3 class="font-bold text-white text-xl mb-3">Vue3 组合式API的最佳实践有哪些？</h3>
                                    <p class="text-slate-300 mb-4">最近在重构项目，想全面采用组合式API，大家有什么好的实践建议吗？特别是关于状态管理和代码组织方面的经验。感觉Options API在大型项目中维护起来有点吃力，想听听大家在实际项目中的经验。</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">Vue3</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">组合式API</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">状态管理</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">前端架构</span>
                                    </div>
                                </div>

                                <div class="flex items-center text-slate-400">
                                    <button class="flex items-center mr-6 hover:text-rose-500 transition-colors">
                                        <i class="far fa-heart mr-2"></i>
                                        <span>42</span>
                                    </button>
                                    <button class="flex items-center mr-6 hover:text-blue-400 transition-colors">
                                        <i class="far fa-comment mr-2"></i>
                                        <span>12</span>
                                    </button>
                                    <button class="flex items-center hover:text-green-400 transition-colors">
                                        <i class="fas fa-share mr-2"></i>
                                        <span>分享</span>
                                    </button>
                                </div>
                            </div>

                            <!-- 帖子 2 - Nuxt UI风格 -->
                            <div class="community-post nuxt-card rounded-2xl p-6 transition-all">
                                <div class="flex items-start mb-4">
                                    <div class="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold">
                                        L
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <div class="font-bold text-white">李全栈</div>
                                                <div class="text-sm text-slate-400">全栈工程师 · 5小时前</div>
                                            </div>
                                            <button class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 action-btn">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <h3 class="font-bold text-white text-xl mb-3">Nuxt 3 + Tailwind CSS 的最佳实践分享</h3>
                                    <p class="text-slate-300 mb-4">经过几个Nuxt 3项目的实践，总结了一些与Tailwind CSS配合使用的技巧。包括如何配置主题、处理响应式、以及组件化开发的最佳方式。特别推荐使用@nuxt/ui库，能极大提升开发效率。</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">Nuxt3</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">Tailwind</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">UI组件</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">最佳实践</span>
                                    </div>
                                </div>

                                <div class="flex items-center text-slate-400">
                                    <button class="flex items-center mr-6 hover:text-rose-500 transition-colors">
                                        <i class="far fa-heart mr-2"></i>
                                        <span>28</span>
                                    </button>
                                    <button class="flex items-center mr-6 hover:text-blue-400 transition-colors">
                                        <i class="far fa-comment mr-2"></i>
                                        <span>7</span>
                                    </button>
                                    <button class="flex items-center hover:text-green-400 transition-colors">
                                        <i class="fas fa-share mr-2"></i>
                                        <span>分享</span>
                                    </button>
                                </div>
                            </div>

                            <!-- 帖子 3 - Nuxt UI风格 -->
                            <div class="community-post nuxt-card rounded-2xl p-6 transition-all">
                                <div class="flex items-start mb-4">
                                    <div class="w-12 h-12 rounded-full mr-4 bg-gradient-to-r from-cyan-500 to-sky-500 flex items-center justify-center text-white font-bold">
                                        W
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex justify-between items-center">
                                            <div>
                                                <div class="font-bold text-white">王后端</div>
                                                <div class="text-sm text-slate-400">后端工程师 · 昨天</div>
                                            </div>
                                            <button class="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 action-btn">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div class="mb-4">
                                    <h3 class="font-bold text-white text-xl mb-3">如何设计高并发的API限流系统？</h3>
                                    <p class="text-slate-300 mb-4">在我们的电商系统中遇到了高并发场景下的API限流问题。目前使用的是令牌桶算法，但在分布式环境下实现起来有些复杂。想请教大家在实际项目中都使用什么方案？特别是基于Redis的分布式限流实现。</p>
                                    <div class="flex flex-wrap gap-2 mb-4">
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">后端</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">高并发</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">Redis</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300 tag">系统设计</span>
                                    </div>
                                </div>

                                <div class="flex items-center text-slate-400">
                                    <button class="flex items-center mr-6 hover:text-rose-500 transition-colors">
                                        <i class="far fa-heart mr-2"></i>
                                        <span>35</span>
                                    </button>
                                    <button class="flex items-center mr-6 hover:text-blue-400 transition-colors">
                                        <i class="far fa-comment mr-2"></i>
                                        <span>15</span>
                                    </button>
                                    <button class="flex items-center hover:text-green-400 transition-colors">
                                        <i class="fas fa-share mr-2"></i>
                                        <span>分享</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <!-- 分页控件 - Nuxt UI风格 -->
                        <div class="mt-10 flex justify-center">
                            <div class="inline-flex rounded-xl bg-slate-800 p-1">
                                <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">上一页</button>
                                <button class="px-4 py-2 rounded-lg bg-primary text-white">1</button>
                                <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">2</button>
                                <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">3</button>
                                <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">下一页</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.community-post:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
}

.gradient-btn {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    transition: all 0.3s ease;
}

.gradient-btn:hover {
    opacity: 0.9;
    transform: translateY(-2px);
}

.tag {
    transition: all 0.2s ease;
}

.tag:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    transform: translateY(-1px);
}

.action-btn:hover {
    background: rgba(30, 41, 59, 0.9);
}

.nuxt-card {
    border-radius: 1rem;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.08);
}
</style>
