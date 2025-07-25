<template>
    <div class="flex">
        <div v-if="pending" class="flex justify-center items-center h-screen">
            <p>加载中...</p>
        </div>
        <div v-else-if="docs" class="flex-1 page-content">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <!-- 页面标题和筛选 -->
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div class="mb-6 md:mb-0">
                        <h1 class="text-3xl font-bold text-white">开发文档中心</h1>
                        <p class="text-slate-400 mt-2">一站式访问所有主流开发技术的官方文档</p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <div class="relative">
                            <select
                                class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
                                <option>排序: 热门度</option>
                                <option>排序: 最近更新</option>
                                <option>排序: 字母顺序</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <i class="fas fa-chevron-down text-slate-400"></i>
                            </div>
                        </div>
                        <div class="relative">
                            <select
                                class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 focus:outline-none focus:ring-2 focus:ring-primary appearance-none">
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
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fab fa-js"></i>
                            </div>
                            <span class="text-white font-medium">前端</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-server"></i>
                            </div>
                            <span class="text-white font-medium">后端</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-mobile-alt"></i>
                            </div>
                            <span class="text-white font-medium">移动端</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-database"></i>
                            </div>
                            <span class="text-white font-medium">数据库</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-red-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-cloud"></i>
                            </div>
                            <span class="text-white font-medium">DevOps</span>
                        </button>
                        <button class="category-btn bg-slate-800 p-4 rounded-xl text-center hover:bg-slate-700">
                            <div
                                class="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center text-white text-xl mx-auto mb-3">
                                <i class="fas fa-code"></i>
                            </div>
                            <span class="text-white font-medium">编程语言</span>
                        </button>
                    </div>
                </div>

                <!-- 文档列表 -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    <nuxt-link v-for="item in docs.data" :to="linkPrefix(item.documentId)"
                               class="doc-card glass-card rounded-2xl p-5">
                        <div class="flex items-start mb-4">
                            <div
                                :class="['w-14 h-14 rounded-xl flex items-center justify-center text-white text-2xl mr-4',item.bg_color_class]">
                                <i :class="[item.icon]"></i>
                            </div>
                            <div>
                                <h3 class="font-bold text-white text-lg mb-1">{{ item.name }}</h3>
                                <div class="text-sm text-slate-400">版本 3.4</div>
                            </div>
                        </div>
                        <p class="text-slate-300 mb-4 text-sm">{{ item.description }}</p>
                        <div class="mb-4">
                            <div class="flex justify-between text-slate-400 text-xs mb-1">
                                <span>访问人数</span>
                                <span>65%</span>
                            </div>
                            <div class="progress-bar bg-slate-700 rounded-full">
                                <div class="progress-fill" style="width: 65%"></div>
                            </div>
                        </div>
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="todo in item.tags"
                                  class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 tag">{{ todo }}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="flex items-center text-slate-400 text-sm">
                                <i class="far fa-star text-yellow-400 mr-1"></i>
                                <span>4.9</span>
                                <span class="mx-2">|</span>
                                <i class="far fa-clock mr-1"></i>
                                <span>更新于{{ getWeeksAgo(item.createdAt) }}</span>
                            </div>
                            <button class="text-primary hover:text-indigo-300">
                                <i class="fas fa-bookmark"></i>
                            </button>
                        </div>
                    </nuxt-link>
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
                            <nuxt-link href="#"
                                       v-for="item in hotDocs"
                                       class="flex items-center p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors">
                                <div
                                    :class="['w-12 h-12 rounded-lg flex items-center justify-center text-white mr-3',item.bg_color_class]">
                                    <i :class="item.icon"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">{{item.name}}</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <i class="far fa-eye mr-1"></i>
                                        <span>{{formatToK(item.visit)}} 浏览</span>
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {formatToK} from "~/utils/index.js";

const dayjs = useDayjs();
const {data: docs, pending} = useAsyncData('docs',
    () => $fetch(`/api/docs`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 9},
            populate: "*",
            sort: {visit: 'desc'}
        })
    }),
    {transform: (res) => res || []}
)

const { data: hotDocs } = useAsyncData('hot-docs',
    () => $fetch(`/api/docs`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 4},
            populate: "*",
            filters: {
                handpick: {$eq: 1}
            },
            sort: {visit: 'desc'}
        })
    }),
    {transform: (res) => res.data || []}
)
console.log(hotDocs)
function getWeeksAgo(targetDate) {
    const now = dayjs();
    const inputDate = dayjs(targetDate);
    const weeksDiff = now.diff(inputDate, 'week');
    if (weeksDiff > 0) {
        return `${weeksDiff}周前`;
    } else {
        return inputDate.from(now);
    }
}
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
