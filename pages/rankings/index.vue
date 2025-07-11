<template>
    <div class="flex">
        <div class="flex-1 page-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 页面标题和筛选区域 -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                    <div>
                        <h1 class="text-3xl font-bold text-white">开发者工具排行榜</h1>
                        <p class="text-slate-400 mt-2">基于社区热度和专业评测的工具排名</p>
                    </div>

                    <div class="flex flex-wrap gap-4">
                        <!-- 时间筛选 -->
                        <div class="flex items-center bg-slate-800 border border-slate-700 rounded-lg overflow-hidden">
                            <button class="tab-button active">周榜</button>
                            <button class="tab-button">月榜</button>
                            <button class="tab-button">季度榜</button>
                        </div>

                        <!-- 分类筛选 -->
                        <div class="relative">
                            <select
                                class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                                <option>全部分类</option>
                                <option>前端工具</option>
                                <option>后端框架</option>
                                <option>数据库</option>
                                <option>DevOps</option>
                                <option>AI开发</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i class="fas fa-chevron-down text-slate-500"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 统计卡片 -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div class="glass-card rounded-2xl p-5 flex items-center">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mr-4">
                            <i class="fas fa-fire text-white"></i>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">2,156</div>
                            <div class="text-sm text-slate-400">收录工具总数</div>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl p-5 flex items-center">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mr-4">
                            <i class="fas fa-arrow-up text-white"></i>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">42</div>
                            <div class="text-sm text-slate-400">本周新增工具</div>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl p-5 flex items-center">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center mr-4">
                            <i class="fas fa-star text-white"></i>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">86,542</div>
                            <div class="text-sm text-slate-400">用户收藏总数</div>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl p-5 flex items-center">
                        <div
                            class="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center mr-4">
                            <i class="fas fa-users text-white"></i>
                        </div>
                        <div>
                            <div class="text-2xl font-bold text-white">12,458</div>
                            <div class="text-sm text-slate-400">本周活跃用户</div>
                        </div>
                    </div>
                </div>

                <!-- 排行榜主体 -->
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <!-- 主排行榜区域 -->
                    <div class="lg:col-span-2">
                        <div class="glass-card rounded-2xl overflow-hidden">
                            <div class="flex justify-between items-center p-6 border-b border-slate-700">
                                <div class="flex items-center">
                                    <i class="fas fa-trophy text-amber-400 text-xl mr-3"></i>
                                    <h2 class="text-xl font-bold text-white">综合排行榜</h2>
                                </div>
                                <div class="text-sm text-slate-400">更新于: 2023-11-15</div>
                            </div>

                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                    <tr class="text-left text-slate-400 border-b border-slate-700">
                                        <th class="py-4 pl-6 font-medium">排名</th>
                                        <th class="py-4 font-medium">工具</th>
                                        <th class="py-4 font-medium">分类</th>
                                        <th class="py-4 font-medium">热度</th>
                                        <th class="py-4 font-medium">趋势</th>
                                        <th class="py-4 pr-6 font-medium">评分</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <!-- 第1名 -->
                                    <tr class="border-b border-slate-800 hover:bg-slate-800/50 group">
                                        <td class="py-4 pl-6">
                                            <div
                                                class="rank-badge bg-gradient-to-r from-amber-500 to-yellow-300 text-white">
                                                1
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <div
                                                    class="w-12 h-12 rounded-lg bg-violet-600 flex items-center justify-center mr-4">
                                                    <i class="fas fa-bolt text-white text-lg"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-white flex items-center">
                                                        Vite
                                                        <span class="ranking-change bg-green-500 text-white ml-2 pulse">
                                                        <i class="fas fa-crown text-xs"></i>
                                                    </span>
                                                    </div>
                                                    <div class="text-sm text-slate-400">下一代前端工具</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">构建工具</span>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <i class="fas fa-fire text-orange-400 mr-1"></i>
                                                <span class="font-medium">9.8k</span>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center text-green-500">
                                                <i class="fas fa-arrow-up mr-1"></i>
                                                <span>12%</span>
                                            </div>
                                        </td>
                                        <td class="py-4 pr-6">
                                            <div class="flex items-center text-amber-500">
                                                <i class="fas fa-star"></i>
                                                <span class="ml-1 font-medium">4.9</span>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- 第2名 -->
                                    <tr class="border-b border-slate-800 hover:bg-slate-800/50 group">
                                        <td class="py-4 pl-6">
                                            <div
                                                class="rank-badge bg-gradient-to-r from-slate-500 to-slate-400 text-white">
                                                2
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <div
                                                    class="w-12 h-12 rounded-lg bg-cyan-600 flex items-center justify-center mr-4">
                                                    <i class="fab fa-js text-white text-lg"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-white flex items-center">
                                                        TypeScript
                                                        <span class="ranking-change bg-green-500 text-white">+1</span>
                                                    </div>
                                                    <div class="text-sm text-slate-400">JavaScript的超集</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">编程语言</span>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <i class="fas fa-fire text-orange-400 mr-1"></i>
                                                <span class="font-medium">8.7k</span>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center text-green-500">
                                                <i class="fas fa-arrow-up mr-1"></i>
                                                <span>5%</span>
                                            </div>
                                        </td>
                                        <td class="py-4 pr-6">
                                            <div class="flex items-center text-amber-500">
                                                <i class="fas fa-star"></i>
                                                <span class="ml-1 font-medium">4.8</span>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- 第3名 -->
                                    <tr class="border-b border-slate-800 hover:bg-slate-800/50 group">
                                        <td class="py-4 pl-6">
                                            <div
                                                class="rank-badge bg-gradient-to-r from-amber-700 to-amber-600 text-white">
                                                3
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <div
                                                    class="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-4">
                                                    <i class="fas fa-database text-white text-lg"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-white flex items-center">
                                                        Prisma
                                                        <span class="ranking-change bg-green-500 text-white">+3</span>
                                                    </div>
                                                    <div class="text-sm text-slate-400">下一代ORM</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <span
                                                class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">数据库</span>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <i class="fas fa-fire text-orange-400 mr-1"></i>
                                                <span class="font-medium">7.2k</span>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center text-green-500">
                                                <i class="fas fa-arrow-up mr-1"></i>
                                                <span>18%</span>
                                            </div>
                                        </td>
                                        <td class="py-4 pr-6">
                                            <div class="flex items-center text-amber-500">
                                                <i class="fas fa-star"></i>
                                                <span class="ml-1 font-medium">4.7</span>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- 第4名 -->
                                    <tr class="border-b border-slate-800 hover:bg-slate-800/50 group">
                                        <td class="py-4 pl-6">
                                            <div class="rank-badge bg-slate-700 text-slate-300">
                                                4
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <div
                                                    class="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center mr-4">
                                                    <i class="fab fa-node-js text-white text-lg"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-white">Express.js</div>
                                                    <div class="text-sm text-slate-400">Node.js Web框架</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">后端框架</span>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <i class="fas fa-fire text-orange-400 mr-1"></i>
                                                <span class="font-medium">6.5k</span>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center text-green-500">
                                                <i class="fas fa-arrow-up mr-1"></i>
                                                <span>3%</span>
                                            </div>
                                        </td>
                                        <td class="py-4 pr-6">
                                            <div class="flex items-center text-amber-500">
                                                <i class="fas fa-star"></i>
                                                <span class="ml-1 font-medium">4.6</span>
                                            </div>
                                        </td>
                                    </tr>

                                    <!-- 第5名 -->
                                    <tr class="border-b border-slate-800 hover:bg-slate-800/50 group">
                                        <td class="py-4 pl-6">
                                            <div class="rank-badge bg-slate-700 text-slate-300">
                                                5
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <div
                                                    class="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center mr-4">
                                                    <i class="fab fa-docker text-white text-lg"></i>
                                                </div>
                                                <div>
                                                    <div class="font-semibold text-white">Docker</div>
                                                    <div class="text-sm text-slate-400">容器化平台</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <span class="px-3 py-1 rounded-full bg-slate-800 text-sm text-slate-300">DevOps</span>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center">
                                                <i class="fas fa-fire text-orange-400 mr-1"></i>
                                                <span class="font-medium">5.9k</span>
                                            </div>
                                        </td>
                                        <td class="py-4">
                                            <div class="flex items-center text-slate-400">
                                                <i class="fas fa-minus mr-1"></i>
                                                <span>0%</span>
                                            </div>
                                        </td>
                                        <td class="py-4 pr-6">
                                            <div class="flex items-center text-amber-500">
                                                <i class="fas fa-star"></i>
                                                <span class="ml-1 font-medium">4.8</span>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="p-6 flex justify-center border-t border-slate-700">
                                <button
                                    class="nuxt-ui-btn px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90">
                                    查看完整榜单
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 侧边栏区域 -->
                    <div class="lg:col-span-1 space-y-8">
                        <!-- 上升最快卡片 -->
                        <div class="glass-card rounded-2xl p-6">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-xl font-bold text-white">上升最快</h2>
                                <span class="text-sm text-green-500 flex items-center">
                            <i class="fas fa-arrow-up mr-1"></i>
                            本周
                        </span>
                            </div>

                            <div class="space-y-5">
                                <div class="highlight-card glass-card rounded-xl p-4 border-l-green-500">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center text-white font-bold mr-4">
                                            +3
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">Prisma</div>
                                            <div class="text-sm text-slate-400">数据库ORM工具</div>
                                        </div>
                                    </div>
                                    <div class="mt-3 flex items-center text-green-500">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span>18% 热度增长</span>
                                    </div>
                                </div>

                                <div class="highlight-card glass-card rounded-xl p-4 border-l-purple-500">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-400 flex items-center justify-center text-white font-bold mr-4">
                                            +5
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">SvelteKit</div>
                                            <div class="text-sm text-slate-400">前端框架</div>
                                        </div>
                                    </div>
                                    <div class="mt-3 flex items-center text-green-500">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span>12% 热度增长</span>
                                    </div>
                                </div>

                                <div class="highlight-card glass-card rounded-xl p-4 border-l-blue-500">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center text-white font-bold mr-4">
                                            +8
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">Turbo</div>
                                            <div class="text-sm text-slate-400">构建系统</div>
                                        </div>
                                    </div>
                                    <div class="mt-3 flex items-center text-green-500">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span>22% 热度增长</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 新上榜卡片 -->
                        <div class="glass-card rounded-2xl p-6">
                            <div class="flex items-center justify-between mb-6">
                                <h2 class="text-xl font-bold text-white">新上榜</h2>
                                <span class="text-sm text-blue-500 flex items-center">
                            <i class="fas fa-bolt mr-1"></i>
                            近期新增
                        </span>
                            </div>

                            <div class="space-y-5">
                                <div class="tool-card glass-card rounded-xl p-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-sky-400 flex items-center justify-center mr-4">
                                            <i class="fas fa-database text-white"></i>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">Neon</div>
                                            <div class="text-sm text-slate-400">Serverless Postgres</div>
                                        </div>
                                    </div>
                                    <div class="mt-3 flex items-center text-amber-500">
                                        <i class="fas fa-star mr-1"></i>
                                        <span>4.6 评分</span>
                                    </div>
                                </div>

                                <div class="tool-card glass-card rounded-xl p-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-fuchsia-400 flex items-center justify-center mr-4">
                                            <i class="fas fa-robot text-white"></i>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">LlamaIndex</div>
                                            <div class="text-sm text-slate-400">LLM数据框架</div>
                                        </div>
                                    </div>
                                    <div class="mt-3 flex items-center text-amber-500">
                                        <i class="fas fa-star mr-1"></i>
                                        <span>4.5 评分</span>
                                    </div>
                                </div>

                                <div class="tool-card glass-card rounded-xl p-4">
                                    <div class="flex items-center">
                                        <div
                                            class="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center mr-4">
                                            <i class="fas fa-cloud text-white"></i>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-white">Fly.io</div>
                                            <div class="text-sm text-slate-400">应用部署平台</div>
                                        </div>
                                    </div>
                                    <div class="mt-3 flex items-center text-amber-500">
                                        <i class="fas fa-star mr-1"></i>
                                        <span>4.7 评分</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 类别热门 -->
                        <div class="glass-card rounded-2xl p-6">
                            <h2 class="text-xl font-bold text-white mb-6">分类热门</h2>

                            <div class="space-y-4">
                                <div class="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                                    <div class="flex items-center">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center mr-3">
                                            <i class="fab fa-js text-blue-400"></i>
                                        </div>
                                        <span class="font-medium">前端框架</span>
                                    </div>
                                    <div class="text-sm text-slate-300">React</div>
                                </div>

                                <div class="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                                    <div class="flex items-center">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center mr-3">
                                            <i class="fas fa-server text-green-400"></i>
                                        </div>
                                        <span class="font-medium">后端框架</span>
                                    </div>
                                    <div class="text-sm text-slate-300">Express.js</div>
                                </div>

                                <div class="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                                    <div class="flex items-center">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center mr-3">
                                            <i class="fas fa-database text-red-400"></i>
                                        </div>
                                        <span class="font-medium">数据库</span>
                                    </div>
                                    <div class="text-sm text-slate-300">PostgreSQL</div>
                                </div>

                                <div class="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                                    <div class="flex items-center">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center mr-3">
                                            <i class="fas fa-cloud text-purple-400"></i>
                                        </div>
                                        <span class="font-medium">DevOps</span>
                                    </div>
                                    <div class="text-sm text-slate-300">Docker</div>
                                </div>

                                <div class="flex items-center justify-between p-3 rounded-lg bg-slate-800">
                                    <div class="flex items-center">
                                        <div
                                            class="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center mr-3">
                                            <i class="fas fa-robot text-amber-400"></i>
                                        </div>
                                        <span class="font-medium">AI开发</span>
                                    </div>
                                    <div class="text-sm text-slate-300">LangChain</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 底部CTA -->
                <div class="glass-card rounded-2xl p-8 mt-12 text-center">
                    <div class="max-w-2xl mx-auto">
                        <div
                            class="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center mx-auto mb-6">
                            <i class="fas fa-rocket text-white text-2xl"></i>
                        </div>
                        <h2 class="text-2xl font-bold text-white mb-4">发现更多开发者工具</h2>
                        <p class="text-slate-400 mb-6">加入我们的社区，探索、分享和收藏最适合您项目的工具和框架</p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <button
                                class="nuxt-ui-btn px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90">
                                浏览完整工具库
                            </button>
                            <button
                                class="nuxt-ui-btn px-6 py-3 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700">
                                提交新工具
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
// tailwind.config = {
//     theme: {
//         extend: {
//             colors: {
//                 primary: '#8b5cf6',
//                 secondary: '#6366f1',
//                 slate: {
//                     800: '#1e293b',
//                     700: '#334155',
//                     600: '#475569',
//                     500: '#64748b',
//                     400: '#94a3b8',
//                     300: '#cbd5e1',
//                     200: '#e2e8f0',
//                 }
//             }
//         }
//     }
// }
</script>
<style lang="css" scoped>
.rank-badge {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
}

.trend-badge {
    padding: 2px 8px;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 500;
}

.tab-button {
    padding: 0.5rem 1.5rem;
    border-radius: 0.75rem;
    background: rgba(30, 41, 59, 0.5);
    cursor: pointer;
    transition: all 0.3s ease;
}

.tab-button.active {
    background: linear-gradient(to right, #8b5cf6, #6366f1);
}

.nuxt-ui-btn {
    transition: all 0.3s ease;
}

.nuxt-ui-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.highlight-card {
    border-left: 4px solid;
    transition: all 0.3s ease;
}

.highlight-card:hover {
    transform: translateX(5px);
}

.ranking-change {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-left: 8px;
    font-size: 0.75rem;
    font-weight: bold;
}

@keyframes pulse {
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
}

.pulse {
    animation: pulse 2s infinite;
}
</style>
