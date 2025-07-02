<template>
    <div class="flex">
        <div class="flex-1 page-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 页面标题和筛选 -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div class="mb-6 md:mb-0">
                        <h1 class="text-3xl font-bold text-white">开发文档中心</h1>
                        <p class="text-slate-400 mt-2">一站式访问所有主流开发技术的官方文档</p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <div class="relative">
                            <select class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                                <option>排序: 热门度</option>
                                <option>排序: 最近更新</option>
                                <option>排序: 字母顺序</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <i class="fas fa-chevron-down text-slate-400"></i>
                            </div>
                        </div>
                        <div class="relative">
                            <select class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                                <option>分类: 全部</option>
                                <option>前端开发</option>
                                <option>后端开发</option>
                                <option>移动开发</option>
                                <option>数据库</option>
                                <option>DevOps</option>
                                <option>云服务</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <i class="fas fa-chevron-down text-slate-400"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 分类导航 -->
                <div class="glass-card rounded-2xl p-6 mb-8">
                    <h2 class="text-xl font-bold text-white mb-4">文档分类</h2>
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fab fa-js"></i>
                            </div>
                            <span class="text-white font-medium">前端</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-server"></i>
                            </div>
                            <span class="text-white font-medium">后端</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <span class="text-white font-medium">移动端</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-database"></i>
                            </div>
                            <span class="text-white font-medium">数据库</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-cloud"></i>
                            </div>
                            <span class="text-white font-medium">DevOps</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-code"></i>
                            </div>
                            <span class="text-white font-medium">编程语言</span>
                        </button>
                    </div>
                </div>

                <!-- 文档列表 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <!-- 文档卡片 1 -->
                    <a href="#" class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-2xl mr-4">
                                <i class="fab fa-vuejs"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">Vue.js 文档</h3>
                                <div class="text-sm text-slate-400">版本 3.4</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">渐进式 JavaScript 框架，用于构建用户界面。从基础到高级概念，涵盖所有 API 和最佳实践。</p>

                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>学习进度</span>
                                <span>65%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 65%"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">前端框架</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">JavaScript</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">SPA</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.9</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于 2 周前</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="fas fa-bookmark"></i>
                            </button>
                        </div>
                    </a>

                    <!-- 文档卡片 2 -->
                    <a href="#" class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-2xl mr-4">
                                <i class="fab fa-react"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">React 文档</h3>
                                <div class="text-sm text-slate-400">版本 18.2</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">用于构建用户界面的 JavaScript 库。包含Hooks、组件、状态管理等核心概念及高级模式。</p>

                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>学习进度</span>
                                <span>80%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 80%"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">前端框架</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">JavaScript</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">UI库</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.8</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于 1 个月前</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="far fa-bookmark"></i>
                            </button>
                        </div>
                    </a>

                    <!-- 文档卡片 3 -->
                    <a href="#" class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-2xl mr-4">
                                <i class="fab fa-node-js"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">Node.js 文档</h3>
                                <div class="text-sm text-slate-400">版本 20.0</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">基于 Chrome V8 引擎的 JavaScript 运行时。包含API、模块系统、事件循环和性能优化等内容。</p>

                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>学习进度</span>
                                <span>45%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 45%"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">后端</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">JavaScript</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">运行时</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.7</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于 3 天前</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="far fa-bookmark"></i>
                            </button>
                        </div>
                    </a>

                    <!-- 文档卡片 4 -->
                    <a href="#" class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl mr-4">
                                <i class="fab fa-python"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">Python 文档</h3>
                                <div class="text-sm text-slate-400">版本 3.11</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">Python官方文档，包含语言参考、标准库、教程和安装指南，覆盖从入门到高级主题。</p>

                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>学习进度</span>
                                <span>90%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 90%"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">编程语言</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">后端</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">脚本</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.9</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于 1 周前</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="fas fa-bookmark"></i>
                            </button>
                        </div>
                    </a>

                    <!-- 文档卡片 5 -->
                    <a href="#" class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-red-500 to-rose-500 flex items-center justify-center text-white text-2xl mr-4">
                                <i class="fas fa-bolt"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">Vite 文档</h3>
                                <div class="text-sm text-slate-400">版本 5.0</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">下一代前端工具链，提供极速的开发服务器启动和热更新，支持多种框架开箱即用。</p>

                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>学习进度</span>
                                <span>70%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 70%"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">构建工具</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">前端</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">开发工具</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.8</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于 2 周前</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="far fa-bookmark"></i>
                            </button>
                        </div>
                    </a>

                    <!-- 文档卡片 6 -->
                    <a href="#" class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div class="w-14 h-14 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-2xl mr-4">
                                <i class="fas fa-database"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">MongoDB 文档</h3>
                                <div class="text-sm text-slate-400">版本 7.0</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">面向文档的NoSQL数据库，提供灵活的文档模型、水平扩展和高可用性。</p>

                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>学习进度</span>
                                <span>55%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 55%"></div>
                            </div>
                        </div>

                        <div class="flex flex-wrap gap-2 mb-4">
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">数据库</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">NoSQL</span>
                            <span class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">后端</span>
                        </div>

                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.6</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于 3 周前</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="far fa-bookmark"></i>
                            </button>
                        </div>
                    </a>
                </div>

                <!-- 分页 -->
                <div class="flex justify-center mt-8">
                    <div class="inline-flex rounded-xl bg-slate-800 p-1">
                        <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">上一页</button>
                        <button class="px-4 py-2 rounded-lg bg-primary text-white">1</button>
                        <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">2</button>
                        <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">3</button>
                        <button class="px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-700">下一页</button>
                    </div>
                </div>

                <!-- 热门文档 -->
                <div class="mt-16">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">热门文档</h2>
                        <a href="#" class="text-slate-400 hover:text-white flex items-center">
                            查看全部 <i class="fas fa-arrow-right ml-2"></i>
                        </a>
                    </div>

                    <div class="glass-card rounded-2xl p-6">
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <a href="#" class="flex items-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mr-3">
                                    <i class="fab fa-react"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">React Hooks 指南</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="far fa-eye mr-1"></i>
                                        <span>12.5K 浏览</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex items-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white mr-3">
                                    <i class="fab fa-python"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">Python 异步编程</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="far fa-eye mr-1"></i>
                                        <span>9.8K 浏览</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex items-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white mr-3">
                                    <i class="fab fa-docker"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">Docker 容器化</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="far fa-eye mr-1"></i>
                                        <span>8.3K 浏览</span>
                                    </div>
                                </div>
                            </a>

                            <a href="#" class="flex items-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mr-3">
                                    <i class="fab fa-aws"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">AWS Lambda 实践</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="far fa-eye mr-1"></i>
                                        <span>7.6K 浏览</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style lang="css" scoped>
.nav-link {
    position: relative;
    padding: 8px 0;
    transition: all 0.3s ease;
}

.nav-link::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.active::after {
    width: 100%;
}

.nav-link.active {
    color: white;
}

.doc-card {
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.doc-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.25);
    border-color: #6366f1;
}

.category-btn {
    transition: all 0.3s ease;
}

.category-btn:hover {
    transform: translateY(-2px);
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
}

.tag {
    transition: all 0.2s ease;
}

.tag:hover {
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    transform: translateY(-1px);
}

.progress-bar {
    position: relative;
    height: 6px;
    border-radius: 3px;
    overflow: hidden;
}

.progress-fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
}

.progress-value {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
}
</style>
