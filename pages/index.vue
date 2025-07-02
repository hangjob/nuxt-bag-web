<template>
    <div class="flex">
        <div id="home-page" class="flex-1">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 头部横幅 -->
                <div class="gradient-border rounded-2xl mb-8">
                    <div class="glass-card rounded-2xl p-8">
                        <div class="flex flex-col md:flex-row items-center">
                            <div class="flex-1 mb-6 md:mb-0">
                                <h1 class="text-3xl md:text-4xl font-bold text-white mb-4">探索开发者必备工具</h1>
                                <p class="text-slate-300 mb-6 max-w-xl">发现、比较和收藏最适合您项目的工具和框架。超过
                                    2,000 个精选开发资源。</p>
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <button
                                        class="px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-medium text-white hover:opacity-90 transition">
                                        立即探索
                                    </button>
                                    <button
                                        class="px-6 py-3 bg-slate-800 rounded-lg font-medium text-slate-200 border border-slate-700 hover:bg-slate-700 transition">
                                        查看热门
                                    </button>
                                </div>
                            </div>
                            <div class="w-full md:w-1/3 flex justify-center">
                                <div class="relative">
                                    <div
                                        class="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-float"></div>
                                    <div
                                        class="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-float animation-delay-2000"></div>
                                    <div
                                        class="relative w-64 h-64 rounded-2xl overflow-hidden border-2 border-slate-700">
                                        <div
                                            class="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                                        <div class="absolute top-4 left-4 flex gap-2">
                                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div class="absolute inset-0 flex items-center justify-center">
                                            <div class="grid grid-cols-3 gap-4">
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                                                    <i class="fab fa-vuejs text-white"></i>
                                                </div>
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-sky-500 flex items-center justify-center">
                                                    <i class="fab fa-react text-white"></i>
                                                </div>
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-amber-500 flex items-center justify-center">
                                                    <i class="fab fa-js text-white"></i>
                                                </div>
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center">
                                                    <i class="fab fa-node-js text-white"></i>
                                                </div>
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-rose-500 flex items-center justify-center">
                                                    <i class="fas fa-database text-white"></i>
                                                </div>
                                                <div
                                                    class="w-10 h-10 rounded-lg bg-indigo-500 flex items-center justify-center">
                                                    <i class="fas fa-cloud text-white"></i>
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
                <h2 class="text-xl font-bold text-white mb-6">热门分类</h2>
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
                        <h2 class="text-xl font-bold text-white">开发者热搜榜</h2>
                        <div class="text-sm text-slate-400">更新于: 2023-11-15</div>
                    </div>

                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                            <tr class="text-left text-slate-400 border-b border-slate-700">
                                <th class="pb-3 font-medium">排名</th>
                                <th class="pb-3 font-medium">工具名称</th>
                                <th class="pb-3 font-medium">分类</th>
                                <th class="pb-3 font-medium">周热度</th>
                                <th class="pb-3 font-medium">趋势</th>
                                <th class="pb-3 font-medium">操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr class="border-b border-slate-800 hover:bg-slate-800/50">
                                <td class="py-4">
                                    <div
                                        class="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-yellow-300 flex items-center justify-center text-white font-bold">
                                        1
                                    </div>
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center mr-3">
                                            <i class="fas fa-bolt text-white"></i>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">Vite</div>
                                            <div class="text-sm text-slate-400">下一代前端工具</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4">
                                    <span
                                        class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">构建工具</span>
                                </td>
                                <td class="py-4">
                                    <div class="font-medium">9.8k</div>
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center text-green-500">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span>12%</span>
                                    </div>
                                </td>
                                <td class="py-4">
                                    <div class="flex gap-2">
                                        <button
                                            class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button
                                            class="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300 hover:bg-primary">
                                            详情
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr class="border-b border-slate-800 hover:bg-slate-800/50">
                                <td class="py-4">
                                    <div
                                        class="w-8 h-8 rounded-full bg-gradient-to-r from-slate-600 to-slate-400 flex items-center justify-center text-white font-bold">
                                        2
                                    </div>
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center mr-3">
                                            <i class="fab fa-js text-white"></i>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">TypeScript</div>
                                            <div class="text-sm text-slate-400">JavaScript的超集</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4">
                                    <span
                                        class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">编程语言</span>
                                </td>
                                <td class="py-4">
                                    <div class="font-medium">8.7k</div>
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center text-green-500">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span>5%</span>
                                    </div>
                                </td>
                                <td class="py-4">
                                    <div class="flex gap-2">
                                        <button
                                            class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                            <i class="fas fa-star text-yellow-400"></i>
                                        </button>
                                        <button
                                            class="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300 hover:bg-primary">
                                            详情
                                        </button>
                                    </div>
                                </td>
                            </tr>

                            <tr class="border-b border-slate-800 hover:bg-slate-800/50">
                                <td class="py-4">
                                    <div
                                        class="w-8 h-8 rounded-full bg-gradient-to-r from-amber-700 to-amber-500 flex items-center justify-center text-white font-bold">
                                        3
                                    </div>
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                                            <i class="fas fa-database text-white"></i>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">Prisma</div>
                                            <div class="text-sm text-slate-400">下一代ORM</div>
                                        </div>
                                    </div>
                                </td>
                                <td class="py-4">
                                    <span
                                        class="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300">数据库</span>
                                </td>
                                <td class="py-4">
                                    <div class="font-medium">7.2k</div>
                                </td>
                                <td class="py-4">
                                    <div class="flex items-center text-green-500">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span>18%</span>
                                    </div>
                                </td>
                                <td class="py-4">
                                    <div class="flex gap-2">
                                        <button
                                            class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button
                                            class="px-3 py-1 rounded-lg bg-slate-800 text-sm text-slate-300 hover:bg-primary">
                                            详情
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- AI推荐工作流 -->
                <div class="glass-card rounded-2xl p-6 mb-12">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-bold text-white">AI推荐工作流</h2>
                        <div class="text-sm text-slate-400">基于您的收藏</div>
                    </div>

                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div class="gradient-border rounded-2xl">
                            <div class="glass-card rounded-2xl p-6">
                                <div class="flex items-start mb-4">
                                    <div class="mr-4">
                                        <div
                                            class="w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                                            <i class="fab fa-vuejs text-white text-xl"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white text-lg">Vue3 + Node.js 全栈开发</h3>
                                        <p class="text-slate-400">现代Web应用开发工作流</p>
                                    </div>
                                </div>

                                <div class="mb-6">
                                    <div class="flex items-center mb-3">
                                        <div class="w-3 h-3 rounded-full bg-primary mr-2"></div>
                                        <div class="font-medium text-white">技术栈</div>
                                    </div>
                                    <div class="flex flex-wrap gap-2">
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Vue 3</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Pinia</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Vite</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Node.js</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Express</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">MySQL</span>
                                    </div>
                                </div>

                                <div class="mb-6">
                                    <div class="flex items-center mb-3">
                                        <div class="w-3 h-3 rounded-full bg-primary mr-2"></div>
                                        <div class="font-medium text-white">工作流</div>
                                    </div>
                                    <div class="bg-slate-900 rounded-xl p-4">
                                        <div class="flex items-center mb-3">
                                            <div class="text-slate-400 mr-3">1</div>
                                            <div class="text-slate-300">使用Vite创建Vue3项目</div>
                                        </div>
                                        <div class="flex items-center mb-3">
                                            <div class="text-slate-400 mr-3">2</div>
                                            <div class="text-slate-300">集成Pinia进行状态管理</div>
                                        </div>
                                        <div class="flex items-center mb-3">
                                            <div class="text-slate-400 mr-3">3</div>
                                            <div class="text-slate-300">创建Express API服务</div>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="text-slate-400 mr-3">4</div>
                                            <div class="text-slate-300">使用Prisma连接MySQL数据库</div>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-between items-center">
                                    <div class="text-sm text-slate-400">32个工具 • 15个收藏</div>
                                    <button
                                        class="px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90">
                                        克隆此工作流
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="gradient-border rounded-2xl">
                            <div class="glass-card rounded-2xl p-6">
                                <div class="flex items-start mb-4">
                                    <div class="mr-4">
                                        <div
                                            class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 flex items-center justify-center">
                                            <i class="fas fa-robot text-white text-xl"></i>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white text-lg">AI应用开发工作流</h3>
                                        <p class="text-slate-400">构建智能应用的全套工具</p>
                                    </div>
                                </div>

                                <div class="mb-6">
                                    <div class="flex items-center mb-3">
                                        <div class="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                        <div class="font-medium text-white">技术栈</div>
                                    </div>
                                    <div class="flex flex-wrap gap-2">
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">LangChain</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">OpenAI</span>
                                        <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Pinecone</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Next.js</span>
                                        <span
                                            class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">Vercel</span>
                                    </div>
                                </div>

                                <div class="mb-6">
                                    <div class="flex items-center mb-3">
                                        <div class="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
                                        <div class="font-medium text-white">工作流</div>
                                    </div>
                                    <div class="bg-slate-900 rounded-xl p-4">
                                        <div class="flex items-center mb-3">
                                            <div class="text-slate-400 mr-3">1</div>
                                            <div class="text-slate-300">使用Next.js创建应用框架</div>
                                        </div>
                                        <div class="flex items-center mb-3">
                                            <div class="text-slate-400 mr-3">2</div>
                                            <div class="text-slate-300">集成LangChain处理AI逻辑</div>
                                        </div>
                                        <div class="flex items-center mb-3">
                                            <div class="text-slate-400 mr-3">3</div>
                                            <div class="text-slate-300">使用Pinecone存储向量数据</div>
                                        </div>
                                        <div class="flex items-center">
                                            <div class="text-slate-400 mr-3">4</div>
                                            <div class="text-slate-300">部署到Vercel实现AI应用上线</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-between items-center">
                                    <div class="text-sm text-slate-400">28个工具 • 9个收藏</div>
                                    <button
                                        class="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white font-medium hover:opacity-90">
                                        克隆此工作流
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useWebsiteStore} from "~/stores/website.js";

const website = useWebsiteStore()

</script>
