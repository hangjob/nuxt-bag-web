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
                                <p class="text-slate-300 mb-6 max-w-xl">发现、比较和收藏最适合您项目的工具和框架。超过
                                    2,000
                                    个精选开发资源。</p>
                                <div class="flex flex-col sm:flex-row gap-3">
                                    <button
                                        class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-medium text-white hover:opacity-90 transition flex items-center">
                                        <span>立即探索</span>
                                        <i class="fas fa-arrow-right ml-2 text-sm"></i>
                                    </button>
                                    <button
                                        class="px-6 py-3 bg-slate-800 rounded-lg font-medium text-slate-200 border border-slate-700 hover:bg-slate-700 transition flex items-center">
                                        <span>查看热门</span>
                                        <i class="fas fa-fire ml-2 text-sm"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="w-full md:w-2/5 flex justify-center">
                                <div class="relative">
                                    <div
                                        class="absolute -top-6 -left-6 w-32 h-32 bg-purple-500 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-float"></div>
                                    <div
                                        class="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full mix-blend-soft-light filter blur-2xl opacity-50 animate-float animation-delay-2000"></div>
                                    <div class="relative w-64 h-64 rounded-2xl overflow-hidden">
                                        <div
                                            class="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800"></div>
                                        <div class="absolute top-4 left-4 flex gap-2">
                                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div class="absolute inset-0 flex items-center justify-center p-4">
                                            <div class="grid grid-cols-3 gap-4">
                                                <div
                                                    class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center">
                                                    <i class="fab fa-vuejs text-white text-xl"></i>
                                                </div>
                                                <div
                                                    class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-sky-500 to-blue-500 flex items-center justify-center">
                                                    <i class="fab fa-react text-white text-xl"></i>
                                                </div>
                                                <div
                                                    class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-yellow-400 flex items-center justify-center">
                                                    <i class="fab fa-js text-white text-xl"></i>
                                                </div>
                                                <div
                                                    class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-500 flex items-center justify-center">
                                                    <i class="fab fa-node-js text-white text-xl"></i>
                                                </div>
                                                <div
                                                    class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-rose-500 to-pink-500 flex items-center justify-center">
                                                    <i class="fas fa-database text-white text-xl"></i>
                                                </div>
                                                <div
                                                    class="tech-icon w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
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

                <!-- 搜索和筛选区域 -->
                <div class="glass-card rounded-2xl p-6 mb-8">
                    <div class="relative">
                        <input type="text"
                               placeholder="搜索工具、框架或库..."
                               class="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600">

                        <div class="absolute right-3 top-3 flex gap-2">
                            <select class="bg-slate-800 text-slate-300 rounded-lg px-2 py-1 text-sm">
                                <option value="">所有分类</option>
                                <option>前端框架</option>
                                <option>构建工具</option>
                                <option>后端框架</option>
                                <option>数据库/ORM</option>
                                <option>AI工具</option>
                            </select>

                            <select class="bg-slate-800 text-slate-300 rounded-lg px-2 py-1 text-sm">
                                <option value="">所有难度</option>
                                <option>简单</option>
                                <option>中等</option>
                                <option>复杂</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- 分类磁贴 -->
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-white">热门分类</h2>
                    <NuxtLink to="/tools" class="text-indigo-400 hover:underline flex items-center">
                        <span>查看全部</span>
                        <i class="fas fa-chevron-right ml-1 text-sm"></i>
                    </NuxtLink>
                </div>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
                    <div class="category-tile glass-card rounded-xl overflow-hidden" v-for="item in categories">
                        <div class="p-5">
                            <div
                                :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-3',item.bg_color_class]">
                                <i :class="['text-xl',item.icon,item.text_color_class]"></i>
                            </div>
                            <h3 class="font-semibold text-white mb-1">{{ item.name }}</h3>
                            <p class="text-sm text-slate-400">126 个工具</p>
                        </div>
                    </div>
                </div>
                <!-- 热搜榜 -->
                <div class="glass-card rounded-2xl p-6 mb-12">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">开发者热搜榜</h2>
                        <div class="flex items-center">
                            <div class="text-sm text-slate-400 mr-4">更新于: {{dayjs().subtract(5, 'hour').subtract(40, 'minute').format('YYYY-MM-DD HH:mm')}}</div>
                            <button
                                class="px-3 py-1 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-slate-700 flex items-center">
                                <i class="fas fa-sync-alt mr-1 text-xs"></i>
                                <span>刷新</span>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(item,idx) in hotFrameworks"
                             class="trending-item glass-card rounded-xl p-4 transition-all">
                            <div class="flex items-start">
                                <div
                                    :class="['w-10 h-10 rounded-lg to-yellow-300 flex items-center justify-center text-white font-bold mr-4',item.bg_color_class]">
                                    {{ idx + 1 }}
                                </div>
                                <div class="flex-1">
                                    <div class="flex items-center justify-between">
                                        <div>
                                            <div class="font-semibold text-white">{{ item.name }}</div>
                                            <div class="text-sm pl-1 text-slate-400 line-clamp-1">
                                                {{ item.description }}
                                            </div>
                                        </div>
                                        <div
                                            :class="['w-10 h-10 flex-shrink-0 rounded-lg flex items-center justify-center',item.bg_color_class]">
                                            <i :class="['text-white',item.icon]"></i>
                                        </div>
                                    </div>
                                    <div class="flex items-center mt-4">
                                        <span v-for="todo in item.categories"
                                              class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300 mr-3">{{
                                                todo.name
                                            }}</span>
                                        <div class="flex items-center text-green-500 text-sm">
                                            <i class="fas fa-arrow-up mr-1"></i>
                                            <span>{{ item.attributes.changeValue }}%</span>
                                        </div>
                                    </div>
                                    <div class="flex justify-between items-center mt-4">
                                        <div class="heat-indicator flex items-center">
                                            <div class="relative mr-2">
                                                <div class="heat-pulse bg-orange-500"></div>
                                                <i class="fas fa-fire text-orange-400 text-sm"></i>
                                            </div>
                                            <span
                                                class="text-white font-medium text-sm">{{
                                                    item.attributes.heatValue
                                                }}</span>
                                            <span class="text-slate-500 ml-1 text-sm">热度</span>
                                        </div>
                                        <div class="flex gap-2">
                                            <button
                                                class="w-8 cursor-pointer h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600">
                                                <i class="far fa-star text-slate-300"></i>
                                            </button>
                                            <nuxt-link
                                                :to="linkPrefix(item.documentId)"
                                                class="px-3 cursor-pointer flex items-center justify-center py-1 rounded-lg bg-slate-800 text-xs text-slate-300 hover:bg-indigo-600">
                                                详情
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 精选开发工具 -->
                <div class="mb-12">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-2xl font-bold text-white">精选开发工具</h2>
                        <div class="flex flex-wrap gap-2">
                            <button @click="handleHandpickFrameworks(item,idx)" v-for="(item,idx) in handpickCategories"
                                    :class="['px-3 cursor-pointer py-1 rounded-lg text-white',compData.handpickCategoriesIndex === idx ? item.bg_color_class : null,`hover:bg-violet-600`]">
                                {{ item.name }}
                                <span :class="`hover:${item.bg_color_class}`"></span>
                            </button>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <!-- 工具卡片 1 -->
                        <div v-for="item in handpickFrameworks" class="tool-card glass-card rounded-xl p-5">
                            <div class="flex items-center mb-4">
                                <div
                                    :class="['w-12 h-12 rounded-lg from-indigo-600 flex items-center justify-center mr-3',item.bg_color_class]">
                                    <i :class="['text-white text-xl',item.icon,item.text_color_class,]"></i>
                                </div>
                                <div>
                                    <h3 class="font-bold text-white">{{ item.name }}</h3>
                                    <div class="flex items-center text-xs text-slate-400 mt-1">
                                        <businessStarRating :score="item.score"></businessStarRating>
                                        <span>{{ item.score }}</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-sm text-slate-400 mb-4 line-clamp-2">{{ item.description }}</p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span v-for="todo in item.alternatives"
                                      class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">{{
                                        todo
                                    }}</span>
                            </div>
                            <div class="flex justify-between items-center">
                                <nuxt-link :to="linkPrefix(item.documentId)"
                                    :class="['px-3 py-1 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm hover:opacity-90']">
                                    详情
                                </nuxt-link>
                                <button
                                    class="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600">
                                    <i class="far fa-star text-slate-300"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 工具详情模态框（静态展示） -->
                <div style="min-height: 550px" class="relative overflow-hidden">
                    <transition
                        enter-active-class="transition-all duration-500 ease-out"
                        leave-active-class="transition-all duration-500 ease-in absolute top-0 left-0 w-full"
                        enter-from-class="opacity-0 translate-x-full"
                        leave-to-class="opacity-0 -translate-x-full"
                        mode="out-in"
                    >
                        <div class="glass-card rounded-2xl p-8 mb-12" v-if="hotFrameworks?.length > 0"
                             :key="compData.currentToolIndex">
                            <div class="flex justify-between items-start mb-6">
                                <div class="flex items-start">
                                    <div
                                        class="w-16 h-16 rounded-lg flex items-center justify-center mr-4 bg-purple-500/20">
                                        <i class="fas fa-bolt text-2xl text-purple-400"></i>
                                    </div>
                                    <div>
                                        <h3 class="text-2xl font-bold text-white">{{ currentTool.name }}</h3>
                                        <div class="flex items-center mt-2">
                                            <businessStarRating :score="currentTool.score"></businessStarRating>
                                            <span class="text-slate-400">{{ currentTool.score }}</span>
                                        </div>
                                    </div>
                                </div>
                                <button @click="nextTool" class="text-slate-400 hover:text-white">
                                    <i class="fas fa-times text-xl"></i>
                                </button>
                            </div>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- 左侧信息 -->
                                <div>
                                    <p class="text-slate-300 mb-6 line-clamp-3">{{ currentTool.description }}</p>
                                    <div class="mb-6">
                                        <h4 class="text-slate-400 mb-2">分类</h4>
                                        <span v-for="todo in currentTool.categories"
                                              class="px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                                            {{ todo.name }}
                                        </span>
                                    </div>

                                    <div class="mb-6">
                                        <h4 class="text-slate-400 mb-2">标签</h4>
                                        <div class="flex flex-wrap gap-2">
                                        <span v-for="todo in currentTool.tags"
                                              class="px-3 py-1 rounded-full bg-slate-800 text-slate-300">{{
                                                todo
                                            }}</span>
                                        </div>
                                    </div>

                                    <div class="mb-6">
                                        <h4 class="text-slate-400 mb-2">学习曲线</h4>
                                        <div class="flex items-center">
                                            <span class="text-slate-300 mr-3">简单</span>
                                            <div class="flex">
                                                <i class="fas fa-star text-yellow-400"></i>
                                                <i class="fas fa-star text-yellow-400"></i>
                                                <i class="far fa-star text-slate-600"></i>
                                                <i class="far fa-star text-slate-600"></i>
                                                <i class="far fa-star text-slate-600"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 class="text-slate-400 mb-2">替代方案</h4>
                                        <div class="flex flex-wrap gap-2">
                                        <span v-for="todo in currentTool.alternatives"
                                              class="px-3 py-1 rounded-full bg-slate-800 text-slate-300">{{
                                                todo
                                            }}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- 右侧链接 -->
                                <div>
                                    <div class="link-section space-y-3">
                                        <a :href="currentTool.url" target="_blank" class="link-item">
                                            <i class="fas fa-globe"></i>
                                            <span>官方网站</span>
                                            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                        </a>

                                        <a :href="currentTool.zh_url" target="_blank" class="link-item">
                                            <i class="fas fa-globe-asia"></i>
                                            <span>中文网站</span>
                                            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                        </a>

                                        <a :href="currentTool.github" target="_blank" class="link-item">
                                            <i class="fab fa-github"></i>
                                            <span>GitHub 仓库</span>
                                            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                        </a>

                                        <a :href="currentTool.npm" target="_blank" class="link-item">
                                            <i class="fab fa-npm"></i>
                                            <span>npm 包</span>
                                            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                        </a>

                                        <a :href="currentTool.tutorial" target="_blank" class="link-item">
                                            <i class="fas fa-graduation-cap"></i>
                                            <span>教程文档</span>
                                            <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                                        </a>
                                    </div>

                                    <div class="mt-8">
                                        <h4 class="text-slate-400 mb-2">添加到收藏</h4>
                                        <button
                                            class="px-4 py-2 rounded-lg flex items-center bg-slate-800 text-slate-300 hover:bg-slate-700">
                                            <i class="far fa-star"></i>
                                            <span class="ml -2">收藏此工具</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
                <!-- 数据统计展示 -->
                <div class="glass-card rounded-2xl p-6 mt-12">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div class="stat-card">
                            <div class="text-3xl font-bold text-indigo-500">83</div>
                            <div class="text-slate-400">总工具数量</div>
                        </div>
                        <div class="stat-card">
                            <div class="text-3xl font-bold text-green-500">15</div>
                            <div class="text-slate-400">分类数量</div>
                        </div>
                        <div class="stat-card">
                            <div class="text-3xl font-bold text-yellow-400">4.5</div>
                            <div class="text-slate-400">平均评分</div>
                        </div>
                        <div class="stat-card">
                            <div class="text-3xl font-bold text-purple-500">12</div>
                            <div class="text-slate-400">我的收藏</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import {useWebsiteStore} from "~/stores/website.js";
import arrs from "~/assets/deepseek_json_20250703_42fdb1.js"
const dayjs = useDayjs();
const compData = reactive({
    isAnimating: false,
    currentToolIndex: 0,
    handpickCategoriesIndex: 0
})

const website = useWebsiteStore()
const {data: categories} = useAsyncData('categories',
    () => $fetch(`/api/categories`, {method: "GET", query: flattenObject({pagination: {pageSize: 5}, populate: "*"})}),
    {transform: (res) => res.data || []}
);

const {data: handpickCategories} = useAsyncData('handpickCategories',
    () => $fetch(`/api/categories`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 5}, populate: "*",
            filters: {handpick: {$eq: 1}}
        })
    }),
    {transform: (res) => res.data || []}
);

const {data: hotFrameworks} = useAsyncData('hotFrameworks',
    () => $fetch(`/api/frameworks`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 3},
            populate: "*",
            sort: {visit: 'desc'}
        })
    }),
    {transform: (res) => res.data || []}
)

const {data: handpickFrameworks} = useAsyncData('handpickFrameworks',
    () => $fetch(`/api/frameworks`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 8},
            populate: "*",
            filters: {handpick: {$eq: 1,}},
            sort: {visit: 'desc'}
        })
    }),
    {transform: (res) => res.data || []}
)

const handleHandpickFrameworks = (item, idx) => {
    $fetch(`/api/frameworks`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 4}, populate: "*",
            filters: {handpick: {$eq: 1}, categories: {documentId: item.documentId}},
            sort: {visit: 'desc'}
        })
    }).then((res) => {
        compData.handpickCategoriesIndex = idx;
        handpickFrameworks.value = res.data;
    })
}

// 计算当前显示的工具
const currentTool = computed(() => {
    return hotFrameworks.value[compData.currentToolIndex] || {};
});

const nextTool = () => {
    compData.isAnimating = true;
    compData.currentToolIndex = (compData.currentToolIndex + 1) % hotFrameworks.value.length;
    setTimeout(() => {
        compData.isAnimating = false;
    }, 120);
};

let count = 0;
const handleExpert = () => {
    const {category, ...data} = arrs[count]
    fetch(`/api/docs`, {
        method: "POST",
        body: JSON.stringify({
            data: data
        })
    }).then(res => {
        // items.value = res.data;
        count++;
        if (count > arrs.length) {
            return
        }
        setTimeout(() => {
            handleExpert()
        }, 200)
    }).catch((err) => {
        // console.log(err)
        count++;
        if (count > arrs.length) {
            return
        }
        setTimeout(() => {
            handleExpert()
        }, 200)
    })
}
</script>

<style lang="css" scoped>
/* 确保容器有相对定位 */
.tool-container {
    position: relative;
    min-height: 546px; /* 防止高度跳动 */
    overflow: hidden;
}

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
    background-size: 300% 300%;
    animation: gradient-x 8s ease infinite;
}

@keyframes gradient-x {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
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
    transition: all 0.3s ease;
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.2), 0 8px 10px -6px rgba(99, 102, 241, 0.2);
}

.trending-item {
    transition: all 0.3s ease;
}

.trending-item:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.2);
}

.link-item {
    display: flex;
    align-items: center;
    padding: 12px 16px;
    background: rgba(30, 41, 59, 0.5);
    border-radius: 12px;
    color: #94a3b8;
    transition: all 0.2s ease;
}

.link-item:hover {
    background: rgba(30, 41, 59, 0.8);
    color: #e2e8f0;
}

.link-item i:first-child {
    width: 24px;
    margin-right: 12px;
    color: #818cf8;
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

.trending-card {
    transition: all 0.3s ease;
    height: 100%;
}

.trending-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(99, 102, 241, 0.2);
}

.ranking-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 18px;
}

.heat-indicator {
    position: relative;
}

.heat-pulse {
    position: absolute;
    top: -3px;
    right: -3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    animation: heat-pulse 1.5s infinite;
}

@keyframes heat-pulse {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    70% {
        transform: scale(1.8);
        opacity: 0;
    }
    100% {
        transform: scale(1.8);
        opacity: 0;
    }
}

.trend-indicator {
    display: inline-flex;
    align-items: center;
    padding: 4px 8px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 500;
}

.heat-bar {
    height: 6px;
    border-radius: 3px;
    background: linear-gradient(to right, #ff9d00, #ff6600);
}

.heat-level-1 .heat-bar {
    width: 30%;
}

.heat-level-2 .heat-bar {
    width: 50%;
}

.heat-level-3 .heat-bar {
    width: 70%;
}

.heat-level-4 .heat-bar {
    width: 90%;
}

.tool-icon {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.action-button {
    transition: all 0.2s ease;
}

.action-button:hover {
    transform: scale(1.05);
}

.section-title {
    position: relative;
    display: inline-block;
    padding-bottom: 10px;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 3px;
    background: linear-gradient(to right, #6366f1, #8b5cf6);
    border-radius: 3px;
}

.grid-3-col {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

@media (max-width: 900px) {
    .grid-3-col {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 600px) {
    .grid-3-col {
        grid-template-columns: 1fr;
    }
}
</style>
