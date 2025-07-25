<template>
    <div class="flex flex-col">
        <!-- 添加加载状态 -->
        <div v-if="pending" class="flex justify-center items-center h-screen">
            <p>加载中...</p>
        </div>
        <div v-else-if="frameworks" class="flex-1 page-content">
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
                            <select
                                class="bg-slate-800 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-slate-300 appearance-none focus:ring-2 focus:ring-primary focus:outline-none">
                                <option>按热度排序</option>
                                <option>按更新时间</option>
                                <option>按收藏数</option>
                            </select>
                            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <i class="fas fa-chevron-down text-slate-500"></i>
                            </div>
                        </div>

                        <!-- Nuxt UI 按钮 -->
                        <button
                            class="nuxt-ui-btn px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 flex items-center">
                            <i class="fas fa-plus mr-2"></i>提交工具
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <!-- 筛选侧边栏 -->
                    <div class="lg:col-span-1">
                        <div class="glass-card rounded-2xl p-6">
                            <h2 class="text-xl font-bold text-white mb-4">筛选条件</h2>

                            <!-- 搜索筛选 -->
                            <div class="mb-6">
                                <div class="relative">
                                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i class="fas fa-search text-slate-400"></i>
                                    </div>
                                    <input
                                        type="text"
                                        class="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary"
                                        placeholder="搜索筛选条件..."
                                    >
                                </div>
                            </div>

                            <!-- 技术栈筛选 - 分组折叠 -->
                            <div class="filter-group mb-6">
                                <div class="accordion-header flex justify-between items-center mb-3">
                                    <h3 class="font-semibold text-slate-300">技术栈</h3>
                                    <i class="fas fa-chevron-down text-slate-400 accordion-icon"></i>
                                </div>

                                <div class="scroll-container">
                                    <div class="grid grid-cols-2 gap-2 mb-2">
                                        <div v-for="(item,idx) in stacks"
                                             @click="handleStacks(item)"
                                             :class="['category-chip rounded-lg py-2 px-3 text-center text-sm text-slate-300',compData.stacksIndex === idx ? 'active': null]">
                                            {{ item.name }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- 类别筛选 - 分组折叠 -->
                            <div class="filter-group mb-6">
                                <div class="accordion-header flex justify-between items-center mb-3">
                                    <h3 class="font-semibold text-slate-300">类别</h3>
                                    <i class="fas fa-chevron-down text-slate-400 accordion-icon"></i>
                                </div>
                                <div class="scroll-container">
                                    <!-- 单个类别项 -->
                                    <div @click="toggleCategory(item)"
                                         :class="['category-item',compData.categoriesCheckboxValues.includes(item.documentId) ? 'selected' :null]"
                                         v-for="item in categories">
                                        <div class="category-checkbox">
                                            <i :class="['fas fa-check text-xs text-white',compData.categoriesCheckboxValues.includes(item.documentId) ? null :'hidden']"></i>
                                        </div>
                                        <div class="flex-1 flex justify-between items-center">
                                            <span class="font-medium">{{ item.name }}</span>
                                            <span class="text-xs bg-slate-800/70 px-2 py-1 rounded-full">0</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 标签筛选 -->
                            <div class="filter-group mb-6 hidden">
                                <div class="accordion-header flex justify-between items-center mb-3">
                                    <h3 class="font-semibold text-slate-300">热门标签</h3>
                                    <i class="fas fa-chevron-down text-slate-400 accordion-icon"></i>
                                </div>

                                <div class="scroll-container">
                                    <div class="flex flex-wrap gap-2">
                                        <span
                                            class="tag px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">开源</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Nuxt UI 应用筛选按钮 -->
                            <button
                                @click="commonRequest"
                                class="nuxt-ui-btn cursor-pointer w-full py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90">
                                应用筛选
                            </button>

                            <!-- 重置按钮 -->
                            <button
                                class="nuxt-ui-btn w-full py-2 rounded-lg bg-slate-800 text-slate-300 mt-3 hover:bg-slate-700">
                                重置筛选
                            </button>
                        </div>

                        <!-- 热门工具 -->
                        <div class="glass-card rounded-2xl p-6 mt-6">
                            <h2 class="text-xl font-bold text-white mb-4">热门工具</h2>
                            <div class="space-y-4">
                                <nuxt-link :to="linkPrefix(item.documentId)" v-for="item in hotFrameworks"
                                           class="flex items-center p-2 rounded-lg hover:bg-slate-800 cursor-pointer">
                                    <div
                                        :class="['w-10 flex-shrink-0 h-10 rounded-lg flex items-center justify-center mr-3',item.bg_color_class]">
                                        <i :class="['text-white',item.icon]"></i>
                                    </div>
                                    <div>
                                        <div class="font-semibold text-white">{{ item.name }}</div>
                                        <div class="text-sm text-slate-400 line-clamp-1">{{ item.description }}</div>
                                    </div>
                                </nuxt-link>
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
                                <button
                                    class="nuxt-ui-btn px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center">
                                    <i class="fas fa-filter mr-1"></i>
                                    <span>高级筛选</span>
                                </button>
                                <button
                                    class="nuxt-ui-btn px-3 py-2 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 flex items-center">
                                    <i class="fas fa-sync-alt mr-1"></i>
                                </button>
                            </div>
                        </div>

                        <!-- 工具卡片网格 -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div v-for="item in frameworks.data"
                                 class="tool-card glass-card rounded-2xl p-5 flex flex-col">
                                <div class="flex items-center mb-4">
                                    <div
                                        :class="['w-12 h-12 rounded-lg to-purple-500 flex items-center justify-center mr-3',item.bg_color_class]">
                                        <i :class="['text-white',item.text_color_class,item.icon]"></i>
                                    </div>
                                    <div>
                                        <h3 class="font-bold text-white">{{ item.name }}</h3>
                                        <div class="flex items-center text-xs text-slate-400 mt-1">
                                            <i class="fas fa-star text-yellow-400 mr-1"></i>
                                            <span>{{ item.score }}/5.0</span>
                                        </div>
                                    </div>
                                </div>
                                <p class="text-sm text-slate-400 mb-4 flex-grow line-clamp-3">{{ item.description }}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <template v-for="(todo,idx) in item.tags">
                                        <span v-if="idx<=2"
                                              class="px-2 py-1 rounded-full bg-slate-800 text-xs text-slate-300">{{
                                                todo
                                            }}</span>
                                    </template>
                                </div>
                                <div class="flex justify-between items-center">
                                    <nuxt-link :to="linkPrefix(item.documentId)"
                                               :class="['nuxt-ui-btn px-3 py-1 rounded-lg text-white text-sm hover:opacity-90',item.bg_color_class]">
                                        详情
                                    </nuxt-link>
                                    <div class="flex gap-2">
                                        <button
                                            class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary"
                                            title="添加到收藏">
                                            <i class="far fa-star text-slate-300"></i>
                                        </button>
                                        <button
                                            @click="handleCopy(item.url)"
                                            class="nuxt-ui-btn w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-green-500"
                                            title="复制链接">
                                            <i class="fas fa-link text-slate-300"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Nuxt UI 分页 -->
                        <div class="mt-8 flex justify-center">
                            <nav class="glass-card rounded-lg p-2 inline-flex">
                                <a href="#"
                                   v-for="item in frameworks.meta.pagination.page"
                                   class="nuxt-ui-btn px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-secondary text-white">{{
                                        item
                                    }}</a>
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
<script setup>
import {useClipboard} from '@vueuse/core'
const message = useMessage()
const {text, copy, copied, isSupported} = useClipboard()
const compData = reactive({
    stacksIndex: 0,
    page: 0,
    categoriesCheckboxValues: [],
    stackDocumentId: ""
})
const {data: stacks} = useAsyncData('toolsStacks',
    () => $fetch(`/api/stacks`, {
        method: "GET",
        query:
            flattenObject({
                pagination: {pageSize: 100}
            })
    }),
    {transform: (res) => res.data || []}
);
const {data: categories} = useAsyncData('toolsCategories',
    () => $fetch(`/api/categories`, {
        method: "GET", query:
            flattenObject({
                pagination: {pageSize: 200}
            })
    }),
    {transform: (res) => res.data || []}
);

const {data: frameworks, pending} = useAsyncData('toolsFrameworks',
    () => $fetch(`/api/frameworks`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 10},
            populate: "*",
            sort: {visit: 'desc'}
        })
    }),
    {transform: (res) => res || []}
)

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

const commonRequest = () => {
    $fetch(`/api/frameworks`, {
        method: "GET", query: flattenObject({
            pagination: {pageSize: 10},
            populate: "*",
            filters: {
                stack: {documentId: compData.stackDocumentId},
                categories: {documentId: {$in: compData.categoriesCheckboxValues}}
            },
            sort: {visit: 'desc'}
        })
    }).then((res) => {
        frameworks.value = res;
    })
}
const handleStacks = (item) => {
    compData.stackDocumentId = item.documentId
    commonRequest()
}

const toggleCategory = (item) => {
    if (compData.categoriesCheckboxValues.includes(item.documentId)) {
        compData.categoriesCheckboxValues = compData.categoriesCheckboxValues.filter(id => id !== item.documentId);
    } else {
        compData.categoriesCheckboxValues.push(item.documentId);
    }
};

const handleCopy = (url) => {
    copy(url).then(() => {
        message.success('复制成功')
    }).catch((err) => {
        console.log(err)
    })
}
</script>
<style lang="css">
.nuxt-ui-btn {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.nuxt-ui-btn:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.1);
    transform: rotate(30deg);
    transition: all 0.6s ease;
}

.nuxt-ui-btn:hover:after {
    transform: rotate(30deg) translate(20%, 20%);
}

.scroll-container {
    max-height: 250px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #4b5563 #1e293b;
}

.scroll-container::-webkit-scrollbar {
    width: 6px;
}

.scroll-container::-webkit-scrollbar-track {
    background: rgba(15, 23, 42, 0.5);
    border-radius: 3px;
}

.scroll-container::-webkit-scrollbar-thumb {
    background-color: #4b5563;
    border-radius: 3px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
    background-color: #64748b;
}

.filter-group {
    transition: all 0.3s ease;
}

.tool-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tool-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
}

.tag {
    transition: all 0.2s ease;
}

.tag:hover {
    background-color: #475569;
    transform: translateY(-2px);
}

.accordion-header {
    cursor: pointer;
    user-select: none;
}

.accordion-icon {
    transition: transform 0.3s ease;
}

.accordion-open .accordion-icon {
    transform: rotate(180deg);
}

.category-chip {
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.2);
    transition: all 0.2s ease;
}

.category-chip:hover {
    background: rgba(56, 70, 93, 0.7);
    border-color: rgba(199, 210, 254, 0.5);
}

.category-chip.active {
    background: rgba(139, 92, 246, 0.2);
    border-color: rgba(167, 139, 250, 0.5);
}
</style>
