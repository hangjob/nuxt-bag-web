<template>
    <div class="flex">
        <div class="flex-1 page-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 顶部导航 -->
                <div class="flex justify-between items-center mb-8">
                    <div>
                        <h1 class="text-3xl font-bold text-white">开发工具库</h1>
                        <p class="text-slate-400 mt-2">探索 2,000+ 开发者工具，按技术栈和类别筛选</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <!-- Nuxt UI 选择框 -->
                        <div class="relative">
                            <select class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                                <option>按热度排序</option>
                                <option>按更新时间</option>
                                <option>按收藏数</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i class="fas fa-chevron-down text-slate-500"></i>
                            </div>
                        </div>

                        <!-- Nuxt UI 按钮 -->
                        <button class="nuxt-ui-btn px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 flex items-center">
                            <i class="fas fa-plus mr-2"></i>提交工具
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <!-- 筛选侧边栏 -->
                    <div class="lg:col-span-1">
                        <div class="glass-card rounded-2xl p-6">
                            <h2 class="text-xl font-bold text-white mb-4">筛选条件</h2>

                            <!-- 技术栈筛选 -->
                            <div class="mb-6">
                                <h3 class="font-semibold text-slate-300 mb-3">技术栈</h3>
                                <div class="space-y-2">
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">JavaScript</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">TypeScript</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">Python</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">Go</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">Rust</span>
                                    </label>
                                </div>
                            </div>

                            <!-- 类别筛选 -->
                            <div class="mb-6">
                                <h3 class="font-semibold text-slate-300 mb-3">类别</h3>
                                <div class="space-y-2">
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">前端框架</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">后端框架</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">数据库</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">DevOps</span>
                                    </label>
                                    <label class="flex items-center cursor-pointer p-2 rounded-lg hover:bg-slate-800">
                                        <input type="checkbox" class="form-checkbox rounded bg-slate-700 border-slate-600 text-primary focus:ring-primary">
                                        <span class="ml-2 text-slate-300">测试工具</span>
                                    </label>
                                </div>
                            </div>

                            <!-- Nuxt UI 应用筛选按钮 -->
                            <button class="nuxt-ui-btn w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90">
                                应用筛选
                            </button>

                            <!-- 重置按钮 -->
                            <button class="nuxt-ui-btn w-full py-2 rounded-lg bg-slate-800 text-slate-300 mt-3 hover:bg-slate-700">
                                重置筛选
                            </button>
                        </div>

                        <!-- 热门工具 -->
                        <div class="glass-card rounded-2xl p-6 mt-6">
                            <h2 class="text-xl font-bold text-white mb-4">热门工具</h2>
                            <div class="space-y-4">
                                <div class="flex items-center p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
                                    <div class="w-10 h-10 rounded-lg bg-violet-600 flex items-center justify-center mr-3">
                                        <i class="fas fa-bolt text-white"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-white">Vite</div>
                                        <div class="text-sm text-slate-400">下一代前端工具</div>
                                    </div>
                                </div>
                                <div class="flex items-center p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
                                    <div class="w-10 h-10 rounded-lg bg-cyan-600 flex items-center justify-center mr-3">
                                        <i class="fab fa-js text-white"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-white">TypeScript</div>
                                        <div class="text-sm text-slate-400">JavaScript的超集</div>
                                    </div>
                                </div>
                                <div class="flex items-center p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
                                    <div class="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mr-3">
                                        <i class="fas fa-database text-white"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-white">Prisma</div>
                                        <div class="text-sm text-slate-400">下一代ORM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 工具卡片区域 -->
                    <div class="lg:col-span-3">
                        <!-- 搜索和过滤 -->
                        <div class="glass-card rounded-2xl p-4 mb-6 flex items-center">
                            <div class="relative flex-1 mr-4">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i class="fas fa-search text-slate-400"></i>
                                </div>
                                <input
                                    type="text"
                                    class="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="搜索工具名称、描述或标签..."
                                >
                            </div>
                            <div class="flex gap-2">
                                <button class="nuxt-ui-btn px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center">
                                    <i class="fas fa-filter mr-1"></i>
                                    <span>高级筛选</span>
                                </button>
                                <button class="nuxt-ui-btn px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center">
                                    <i class="fas fa-sync-alt mr-1"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 工具卡片网格 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <!-- 工具卡片 1 - 使用 Nuxt UI 样式 -->
                            <div class="tool-card glass-card rounded-2xl p-5 flex flex-col">
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
                                <p class="text-sm text-slate-400 mb-4 flex-grow">渐进式 JavaScript 框架，用于构建用户界面。提供声明式渲染、组件系统、客户端路由等功能。</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">前端</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">框架</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">响应式</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <button class="nuxt-ui-btn px-3 py-1 rounded-lg bg-gradient-to-r from-primary to-secondary text-white text-sm hover:opacity-90">
                                        详情
                                    </button>
                                    <div class="flex gap-2">
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary" title="添加到收藏">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500" title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 工具卡片 2 -->
                            <div class="tool-card glass-card rounded-2xl p-5 flex flex-col">
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
                                <p class="text-sm text-slate-400 mb-4 flex-grow">用于构建用户界面的 JavaScript 库。基于组件化开发，拥有强大的生态系统和社区支持。</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">前端</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">UI</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">组件</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <button class="nuxt-ui-btn px-3 py-1 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-500 text-white text-sm hover:opacity-90">
                                        详情
                                    </button>
                                    <div class="flex gap-2">
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary" title="添加到收藏">
                                            <i class="fas fa-star text-yellow-400"></i>
                                        </button>
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500" title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 工具卡片 3 -->
                            <div class="tool-card glass-card rounded-2xl p-5 flex flex-col">
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
                                <p class="text-sm text-slate-400 mb-4 flex-grow">快速、开放、极简的 Node.js Web 框架。用于构建 API 和 Web 应用程序，拥有丰富的中间件生态系统。</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">后端</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">API</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">服务器</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <button class="nuxt-ui-btn px-3 py-1 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm hover:opacity-90">
                                        详情
                                    </button>
                                    <div class="flex gap-2">
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary" title="添加到收藏">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500" title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 工具卡片 4 -->
                            <div class="tool-card glass-card rounded-2xl p-5 flex flex-col">
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
                                <p class="text-sm text-slate-400 mb-4 flex-grow">用于开发由语言模型驱动的应用程序的框架。简化了构建AI应用的过程，支持多种语言模型。</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">AI</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">LLM</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">NLP</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <button class="nuxt-ui-btn px-3 py-1 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-500 text-white text-sm hover:opacity-90">
                                        详情
                                    </button>
                                    <div class="flex gap-2">
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary" title="添加到收藏">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500" title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 工具卡片 5 -->
                            <div class="tool-card glass-card rounded-2xl p-5 flex flex-col">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center mr-3">
                                        <i class="fab fa-js text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white">TypeScript</h3>
                                        <div class="flex items-center text-xs text-slate-400 mt-1">
                                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                                            <span>4.9/5.0</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm text-slate-400 mb-4 flex-grow">JavaScript 的超集，添加了静态类型定义。增强了代码质量和可维护性，适合大型项目开发。</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">语言</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">类型安全</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">编译</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <button class="nuxt-ui-btn px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 text-white text-sm hover:opacity-90">
                                        详情
                                    </button>
                                    <div class="flex gap-2">
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary" title="添加到收藏">
                                            <i class="fas fa-star text-yellow-400"></i>
                                        </button>
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500" title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <!-- 工具卡片 6 -->
                            <div class="tool-card glass-card rounded-2xl p-5 flex flex-col">
                                <div class="flex items-center mb-4">
                                    <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-400 flex items-center justify-center mr-3">
                                        <i class="fas fa-fire text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white">Vite</h3>
                                        <div class="flex items-center text-xs text-slate-400 mt-1">
                                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                                            <span>4.8/5.0</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm text-slate-400 mb-4 flex-grow">下一代前端构建工具。极速的服务启动和热更新，支持多种框架，开发体验优秀。</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">构建工具</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">开发服务器</span>
                                    <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">ESM</span>
                                </div>
                                <div class="flex justify-between items-center">
                                    <button class="nuxt-ui-btn px-3 py-1 rounded-lg bg-gradient-to-r from-red-500 to-orange-400 text-white text-sm hover:opacity-90">
                                        详情
                                    </button>
                                    <div class="flex gap-2">
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary" title="添加到收藏">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500" title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Nuxt UI 分页 -->
                        <div class="mt-8 flex justify-center">
                            <nav class="glass-card rounded-lg p-2 inline-flex">
                                <a href="#" class="nuxt-ui-btn px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white">1</a>
                                <a href="#" class="nuxt-ui-btn px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 mx-1">2</a>
                                <a href="#" class="nuxt-ui-btn px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 mx-1">3</a>
                                <a href="#" class="nuxt-ui-btn px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 mx-1">4</a>
                                <a href="#" class="nuxt-ui-btn px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800">下一页</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <!-- 统计信息 -->
                <div class="glass-card rounded-2xl p-6 mt-12">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div class="text-center">
                            <div class="text-3xl font-bold text-primary">2,156</div>
                            <div class="text-sm text-slate-400">工具总数</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-green-500">1,248</div>
                            <div class="text-sm text-slate-400">开源工具</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-amber-500">42</div>
                            <div class="text-sm text-slate-400">新增本周</div>
                        </div>
                        <div class="text-center">
                            <div class="text-3xl font-bold text-rose-500">86,542</div>
                            <div class="text-sm text-slate-400">用户收藏</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
