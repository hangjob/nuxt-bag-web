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
<!--                <div v-html="data?.components"></div>-->
                <div class="lg:col-span-2">
                    <!-- 概述 -->
                    <div class="glass-card hidden rounded-2xl p-6 mb-8">
                        <h2 class="text-xl font-bold text-white mb-4">工具介绍</h2>
                        <div class="prose prose-invert max-w-none">
                            <p class="text-slate-300 mb-4">
                                Vite（法语意为 "快速的"，发音 /vit/）是一种新型前端构建工具，能够显著提升前端开发体验。它由
                                Vue.js 作者尤雨溪开发，目前已成为现代Web开发的首选工具之一。
                            </p>
                            <p class="text-slate-300 mb-4">
                                Vite 通过利用浏览器原生 ES 模块支持和 esbuild
                                预构建依赖，实现了闪电般的冷启动和快速的热更新。无论项目规模如何，启动时间都能保持在毫秒级别，大幅提升开发效率。
                            </p>
                            <h3 class="text-lg font-semibold text-white mt-6 mb-3">主要特性</h3>
                            <ul class="text-slate-300 mb-4 pl-5 list-disc">
                                <li>极速的服务启动 - 使用原生 ESM 文件，无需打包</li>
                                <li>轻量快速的热重载 - 无论应用大小，都能保持极快的更新速度</li>
                                <li>丰富的功能 - 对 TypeScript、JSX、CSS 等支持开箱即用</li>
                                <li>优化的构建 - 使用 Rollup 进行生产构建，高度优化</li>
                                <li>通用插件 - 在开发和构建之间共享 Rollup 插件接口</li>
                                <li>完全类型化的API - 灵活的编程 API 和完整的 TypeScript 类型</li>
                            </ul>
                        </div>
                    </div>
                    <!-- 安装使用 -->
                    <div class="glass-card hidden rounded-2xl p-6 mb-8">
                        <h2 class="text-xl font-bold text-white mb-4">安装与使用</h2>
                        <div class="mb-6">
                            <h3 class="text-lg font-semibold text-white mb-3">创建 Vite 项目</h3>
                            <div class="bg-slate-900 rounded-xl p-4 mb-4">
                                <div class="text-sm font-mono text-slate-300">
                                    <div class="mb-1"># 使用 npm</div>
                                    <div class="mb-1 text-cyan-400">$ npm create vite@latest</div>
                                    <div class="mb-1"># 使用 yarn</div>
                                    <div class="text-cyan-400">$ yarn create vite</div>
                                </div>
                            </div>
                            <p class="text-slate-300">
                                按照提示输入项目名称，选择框架和变体（JavaScript/TypeScript）即可完成项目创建。</p>
                        </div>

                        <div class="mb-6">
                            <h3 class="text-lg font-semibold text-white mb-3">启动开发服务器</h3>
                            <div class="bg-slate-900 rounded-xl p-4 mb-4">
                                <div class="text-sm font-mono text-slate-300">
                                    <div class="mb-1">$ cd my-vite-project</div>
                                    <div class="mb-1">$ npm install</div>
                                    <div class="text-cyan-400">$ npm run dev</div>
                                </div>
                            </div>
                            <p class="text-slate-300">开发服务器启动后，访问控制台输出的 URL（通常是
                                http://localhost:5173）即可查看应用。</p>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-white mb-3">生产构建</h3>
                            <div class="bg-slate-900 rounded-xl p-4">
                                <div class="text-sm font-mono text-slate-300">
                                    <div class="text-cyan-400">$ npm run build</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 新增：插件生态系统 -->
                    <div class="glass-card hidden rounded-2xl p-6 mb-8">
                        <h2 class="text-xl font-bold text-white mb-4">插件生态系统</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                                <div class="flex items-center mb-2">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center mr-3">
                                        <i class="fab fa-vuejs text-white"></i>
                                    </div>
                                    <div class="font-medium text-white">@vitejs/plugin-vue</div>
                                </div>
                                <p class="text-slate-400 text-sm">提供 Vue 3 单文件组件支持，包括 HMR 和 JSX</p>
                            </div>

                            <div class="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                                <div class="flex items-center mb-2">
                                    <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                                        <i class="fab fa-react text-white"></i>
                                    </div>
                                    <div class="font-medium text-white">@vitejs/plugin-react</div>
                                </div>
                                <p class="text-slate-400 text-sm">支持 React 的快速刷新和 Babel 集成</p>
                            </div>

                            <div class="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                                <div class="flex items-center mb-2">
                                    <div
                                        class="w-10 h-10 rounded-lg bg-amber-600 flex items-center justify-center mr-3">
                                        <i class="fas fa-cogs text-white"></i>
                                    </div>
                                    <div class="font-medium text-white">vite-plugin-pwa</div>
                                </div>
                                <p class="text-slate-400 text-sm">零配置 PWA 支持，自动生成 service worker</p>
                            </div>

                            <div class="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 transition-colors">
                                <div class="flex items-center mb-2">
                                    <div class="w-10 h-10 rounded-lg bg-rose-600 flex items-center justify-center mr-3">
                                        <i class="fas fa-bolt text-white"></i>
                                    </div>
                                    <div class="font-medium text-white">unplugin-auto-import</div>
                                </div>
                                <p class="text-slate-400 text-sm">自动导入 API，减少重复导入语句</p>
                            </div>
                        </div>
                        <button class="w-full mt-4 py-2 bg-slate-800 rounded-lg text-slate-300 hover:bg-slate-700">
                            浏览全部插件
                        </button>
                    </div>
                    <!-- 新增：资源导航 -->
                    <div class="glass-card hidden rounded-2xl p-6 mb-8">
                        <h2 class="text-xl font-bold text-white mb-4">资源导航</h2>
                        <p class="text-slate-400 mb-6">精选Vite相关的高质量学习资源和工具</p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <!-- 官方资源 -->
                            <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <h3 class="font-bold text-white mb-3 flex items-center">
                                    <i class="fas fa-crown text-yellow-400 mr-2"></i>
                                    官方资源
                                </h3>
                                <ul class="space-y-2">
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-book text-indigo-400 mr-2 w-5"></i>
                                            <span>官方文档</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-github text-indigo-400 mr-2 w-5"></i>
                                            <span>GitHub仓库</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-blog text-indigo-400 mr-2 w-5"></i>
                                            <span>官方博客</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-comments text-indigo-400 mr-2 w-5"></i>
                                            <span>社区论坛</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <!-- 学习教程 -->
                            <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <h3 class="font-bold text-white mb-3 flex items-center">
                                    <i class="fas fa-graduation-cap text-blue-400 mr-2"></i>
                                    学习教程
                                </h3>
                                <ul class="space-y-2">
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-youtube text-red-500 mr-2 w-5"></i>
                                            <span>Vite入门视频教程</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-book-open text-green-500 mr-2 w-5"></i>
                                            <span>Vite实战指南</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-code text-amber-500 mr-2 w-5"></i>
                                            <span>Vite与框架集成教程</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-server text-cyan-500 mr-2 w-5"></i>
                                            <span>生产环境部署指南</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <!-- 工具集成 -->
                            <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <h3 class="font-bold text-white mb-3 flex items-center">
                                    <i class="fas fa-puzzle-piece text-purple-400 mr-2"></i>
                                    工具集成
                                </h3>
                                <ul class="space-y-2">
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-vuejs text-green-500 mr-2 w-5"></i>
                                            <span>Vite + Vue 3</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-react text-blue-400 mr-2 w-5"></i>
                                            <span>Vite + React</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-svelte text-orange-500 mr-2 w-5"></i>
                                            <span>Vite + Svelte</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-moon text-yellow-400 mr-2 w-5"></i>
                                            <span>Vite + Tailwind CSS</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <!-- 社区资源 -->
                            <div class="p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                                <h3 class="font-bold text-white mb-3 flex items-center">
                                    <i class="fas fa-users text-cyan-400 mr-2"></i>
                                    社区资源
                                </h3>
                                <ul class="space-y-2">
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-discord text-indigo-500 mr-2 w-5"></i>
                                            <span>Discord社区</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-stack-overflow text-orange-500 mr-2 w-5"></i>
                                            <span>Stack Overflow</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fab fa-dev text-gray-300 mr-2 w-5"></i>
                                            <span>开发者博客</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="flex items-center text-slate-300 hover:text-white">
                                            <i class="fas fa-bookmark text-red-500 mr-2 w-5"></i>
                                            <span>Awesome Vite资源</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
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
