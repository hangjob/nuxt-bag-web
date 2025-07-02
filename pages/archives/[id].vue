<template>
    <div id="detail-page">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- 返回按钮 -->
            <div class="mb-6">
                <button class="flex items-center text-slate-400 hover:text-slate-200">
                    <i class="fas fa-arrow-left mr-2"></i>
                    <span>返回首页</span>
                </button>
            </div>
            <!-- 工具头部信息 -->
            <div class="glass-card rounded-2xl p-8 mb-8">
                <div class="flex flex-col md:flex-row">
                    <div class="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                        <div
                            class="w-40 h-40 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-800 flex items-center justify-center">
                            <i class="fas fa-bolt text-white text-5xl"></i>
                        </div>
                    </div>
                    <div class="md:w-3/4 md:pl-8">
                        <div class="flex flex-wrap items-center mb-4">
                            <h1 class="text-3xl font-bold text-white mr-4">Vite</h1>
                            <div class="flex items-center bg-yellow-900/30 px-3 py-1 rounded-full mr-3">
                                <i class="fas fa-star text-yellow-400 mr-1"></i>
                                <span class="text-yellow-400 font-medium">4.8</span>
                            </div>
                            <div class="text-sm bg-slate-800 px-3 py-1 rounded-full text-slate-300">构建工具</div>
                        </div>

                        <p class="text-slate-300 mb-6">
                            下一代前端工具，提供极速的开发服务器启动和热模块替换。专为现代Web应用设计，支持Vue、React、Svelte等框架。</p>

                        <div class="flex flex-wrap gap-2 mb-6">
                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">JavaScript</span>
                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">TypeScript</span>
                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">构建工具</span>
                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">开发服务器</span>
                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">模块热替换</span>
                        </div>

                        <div class="flex flex-wrap items-center gap-4">
                            <button
                                class="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-white hover:opacity-90 flex items-center">
                                <i class="fas fa-globe mr-2"></i>
                                <span>访问官网</span>
                            </button>

                            <button
                                class="px-6 py-3 bg-slate-800 rounded-lg font-medium text-slate-200 border border-slate-700 hover:bg-slate-700 flex items-center">
                                <i class="fab fa-github mr-2"></i>
                                <span>GitHub</span>
                            </button>

                            <button
                                class="px-6 py-3 bg-slate-800 rounded-lg font-medium text-slate-200 border border-slate-700 hover:bg-slate-700 flex items-center">
                                <i class="fas fa-book mr-2"></i>
                                <span>文档</span>
                            </button>

                            <button
                                class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-yellow-600">
                                <i class="fas fa-star text-slate-300"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 详情页标签导航 -->
            <div class="flex border-b border-slate-800 mb-8">
                <button class="tab-button cursor-pointer text-slate-400 active">概述</button>
                <button class="tab-button cursor-pointer text-slate-400">集成指南</button>
                <button class="tab-button cursor-pointer text-slate-400">最佳实践</button>
                <button class="tab-button cursor-pointer text-slate-400">插件生态</button>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- 左侧内容 -->
                <div class="lg:col-span-2">
                    <div v-html="data?.components"></div>
                </div>
                <!-- 右侧边栏 -->
                <div>
                    <!-- 统计数据 -->
                    <div class="glass-card rounded-2xl p-6 mb-8">
                        <h2 class="text-xl font-bold text-white mb-4">统计数据</h2>

                        <div class="space-y-4">
                            <div class="stat-card glass-card p-4 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="text-slate-400">GitHub Stars</div>
                                    <div class="text-lg font-bold text-white">58.4k</div>
                                </div>
                                <div class="flex items-center text-green-500 text-sm mt-1">
                                    <i class="fas fa-arrow-up mr-1"></i>
                                    <span>1,240 this month</span>
                                </div>
                            </div>

                            <div class="stat-card glass-card p-4 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="text-slate-400">周下载量 (NPM)</div>
                                    <div class="text-lg font-bold text-white">4.2M</div>
                                </div>
                                <div class="flex items-center text-green-500 text-sm mt-1">
                                    <i class="fas fa-arrow-up mr-1"></i>
                                    <span>12% from last week</span>
                                </div>
                            </div>

                            <div class="stat-card glass-card p-4 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="text-slate-400">依赖数量</div>
                                    <div class="text-lg font-bold text-white">248k</div>
                                </div>
                            </div>

                            <div class="stat-card glass-card p-4 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="text-slate-400">首次发布</div>
                                    <div class="text-lg font-bold text-white">2020-04-20</div>
                                </div>
                            </div>

                            <div class="stat-card glass-card p-4 rounded-lg">
                                <div class="flex justify-between items-center">
                                    <div class="text-slate-400">许可证</div>
                                    <div class="text-lg font-bold text-white">MIT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 相似工具 -->
                    <div class="glass-card rounded-2xl p-6 mb-8">
                        <h2 class="text-xl font-bold text-white mb-4">相似工具</h2>

                        <div class="space-y-4">
                            <a href="#" class="flex items-center p-3 rounded-lg hover:bg-slate-800">
                                <div class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center mr-3">
                                    <i class="fas fa-cube text-white"></i>
                                </div>
                                <div>
                                    <div class="font-medium text-white">Webpack</div>
                                    <div class="text-sm text-slate-400">JavaScript 打包器</div>
                                </div>
                            </a>

                            <a href="#" class="flex items-center p-3 rounded-lg hover:bg-slate-800">
                                <div class="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center mr-3">
                                    <i class="fas fa-snowflake text-white"></i>
                                </div>
                                <div>
                                    <div class="font-medium text-white">Snowpack</div>
                                    <div class="text-sm text-slate-400">现代前端构建工具</div>
                                </div>
                            </a>

                            <a href="#" class="flex items-center p-3 rounded-lg hover:bg-slate-800">
                                <div class="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center mr-3">
                                    <i class="fas fa-parachute-box text-white"></i>
                                </div>
                                <div>
                                    <div class="font-medium text-white">Parcel</div>
                                    <div class="text-sm text-slate-400">零配置打包工具</div>
                                </div>
                            </a>

                            <a href="#" class="flex items-center p-3 rounded-lg hover:bg-slate-800">
                                <div class="w-10 h-10 rounded-lg bg-indigo-600 flex items-center justify-center mr-3">
                                    <i class="fas fa-utensils text-white"></i>
                                </div>
                                <div>
                                    <div class="font-medium text-white">Rollup</div>
                                    <div class="text-sm text-slate-400">JavaScript 模块打包器</div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- 新增：快速导航 -->
                    <div class="glass-card rounded-2xl p-6 mb-8 sticky top-[50px]">
                        <h2 class="text-xl font-bold text-white mb-4">快速导航</h2>
                        <ul class="space-y-3">
                            <li>
                                <a href="#"
                                   class="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors">
                                    <i class="fas fa-download text-indigo-400 mr-3"></i>
                                    <span class="text-slate-300">安装指南</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors">
                                    <i class="fas fa-cogs text-blue-400 mr-3"></i>
                                    <span class="text-slate-300">配置参考</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors">
                                    <i class="fas fa-plug text-purple-400 mr-3"></i>
                                    <span class="text-slate-300">插件列表</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors">
                                    <i class="fas fa-book text-green-400 mr-3"></i>
                                    <span class="text-slate-300">API文档</span>
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   class="flex items-center p-3 rounded-lg bg-slate-800/50 hover:bg-slate-700 transition-colors">
                                    <i class="fas fa-lightbulb text-yellow-400 mr-3"></i>
                                    <span class="text-slate-300">常见问题</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const {data} = useAsyncData('pm-articles',
    async () => {
        const {data} = await useFetch(`/api/articles/xhstopxrnkbaetc3w91f2bko`, {method: "GET"});
        return data.value?.data || {}
    }
);
</script>
<style lang="css" scoped>

.stat-card {
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
}
</style>
