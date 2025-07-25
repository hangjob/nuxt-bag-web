<template>
    <div id="detail-page">
        <!-- 添加加载状态 -->
        <div v-if="pending" class="flex justify-center items-center h-screen">
            <p>加载中...</p>
        </div>
        <div v-else-if="archivesDetail" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <!-- 返回按钮 -->
            <div class="mb-6">
                <button @click="goBack" class="flex items-center cursor-pointer text-slate-400 hover:text-slate-200">
                    <i class="fas fa-arrow-left mr-2"></i>
                    <span>返回上级页面</span>
                </button>
            </div>
            <!-- 头部横幅 -->
            <div class="gradient-border rounded-2xl mb-8">
                <div class="glass-card rounded-2xl p-8">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="flex-1 mb-6 md:mb-0">
                            <div class="flex items-center mb-6">
                                <div
                                    class="w-16 h-16 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center mr-4">
                                    <i class="fas fa-recycle text-white text-3xl"></i>
                                </div>
                                <div>
                                    <h1 class="text-3xl md:text-4xl font-bold text-white mb-1">
                                        {{ archivesDetail.name }}</h1>
                                    <div class="flex items-center">
                                        <businessStarRating :score="archivesDetail.score"></businessStarRating>
                                        <span class="text-slate-300">{{ archivesDetail.score }} 评分</span>
                                    </div>
                                </div>
                            </div>
                            <p class="text-slate-300 mb-6 max-w-2xl">
                                {{ archivesDetail.description }}
                            </p>
                            <div class="flex flex-wrap gap-2 mb-4">
                                <span v-for="todo in archivesDetail.tags"
                                      class="tag px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">{{
                                        todo
                                    }}</span>
                            </div>
                        </div>
                        <div class="w-full md:w-2/5 flex justify-center">
                            <div class="grid grid-cols-3 gap-4">
                                <div class="tech-icon bg-gradient-to-r from-indigo-600 to-purple-600">
                                    <i class="fab fa-js text-white"></i>
                                </div>
                                <div class="tech-icon bg-gradient-to-r from-sky-500 to-blue-500">
                                    <i class="fas fa-code text-white"></i>
                                </div>
                                <div class="tech-icon bg-gradient-to-r from-amber-500 to-yellow-400">
                                    <i class="fas fa-bolt text-white"></i>
                                </div>
                                <div class="tech-icon bg-gradient-to-r from-emerald-500 to-green-500">
                                    <i class="fas fa-project-diagram text-white"></i>
                                </div>
                                <div class="tech-icon bg-gradient-to-r from-rose-500 to-pink-500">
                                    <i class="fas fa-sync-alt text-white"></i>
                                </div>
                                <div class="tech-icon bg-gradient-to-r from-indigo-500 to-purple-500">
                                    <i class="fas fa-infinity text-white"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 主体内容 -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- 左侧信息 -->
                <div class="lg:col-span-2">
                    <div class="glass-card rounded-2xl p-6 mb-8">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-info-circle text-indigo-400 mr-2"></i>
                            框架详情
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div>
                                <h3 class="text-lg font-semibold text-slate-300 mb-3">核心概念</h3>
                                <p class="text-slate-400">
                                    Cycle.js
                                    是一个函数式和响应式的JavaScript框架，用于构建用户界面。它使用响应式编程范例，将应用程序建模为纯函数，将用户交互作为输入流，将DOM更新作为输出流。
                                </p>
                            </div>

                            <div>
                                <h3 class="text-lg font-semibold text-slate-300 mb-3">适用场景</h3>
                                <ul class="text-slate-400 list-disc pl-5 space-y-2">
                                    <li>复杂事件流处理应用</li>
                                    <li>实时数据可视化项目</li>
                                    <li>需要高度可测试性的应用</li>
                                    <li>数据驱动型用户界面</li>
                                </ul>
                            </div>
                        </div>

                        <div class="mb-8">
                            <h3 class="text-lg font-semibold text-slate-300 mb-4">技术特性</h3>
                            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                                    <div
                                        class="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <i class="fas fa-sync-alt text-indigo-400"></i>
                                    </div>
                                    <div class="font-medium">响应式</div>
                                </div>
                                <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                                    <div
                                        class="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <i class="fas fa-function text-indigo-400"></i>
                                    </div>
                                    <div class="font-medium">函数式</div>
                                </div>
                                <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                                    <div
                                        class="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <i class="fas fa-project-diagram text-indigo-400"></i>
                                    </div>
                                    <div class="font-medium">单向数据流</div>
                                </div>
                                <div class="bg-slate-800/50 rounded-xl p-4 text-center">
                                    <div
                                        class="w-10 h-10 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <i class="fas fa-plug text-indigo-400"></i>
                                    </div>
                                    <div class="font-medium">可组合性</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 class="text-lg font-semibold text-slate-300 mb-4">学习曲线</h3>
                            <div class="flex items-center mb-2">
                                <span class="text-slate-400 mr-3">复杂度:</span>
                                <div class="flex-1">
                                    <div class="progress-bar">
                                        <div class="progress-fill bg-red-500"
                                             :style="`width: ${getComplexityPercentage(archivesDetail.learning_curve)}%`"></div>
                                    </div>
                                </div>
                                <span class="ml-3 text-red-400 font-medium">{{ archivesDetail.learning_curve }}</span>
                            </div>

                            <div class="flex items-center">
                                <span class="text-slate-400 mr-3">社区资源:</span>
                                <div class="flex-1">
                                    <div class="progress-bar">
                                        <div class="progress-fill bg-yellow-500"
                                             :style="`width: ${getCommunityResourceLevel(archivesDetail.attributes.activityValue).score}%`"></div>
                                    </div>
                                </div>
                                <span
                                    class="ml-3 text-yellow-400 font-medium">{{
                                        getCommunityResourceLevel(archivesDetail.attributes.activityValue).levelName
                                    }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl p-6">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-exchange-alt text-indigo-400 mr-2"></i>
                            替代方案
                        </h2>

                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <div v-for="todo in archivesDetail.frameworksList" class="bg-slate-800/50 rounded-xl p-4">
                                <div class="flex items-center mb-3">
                                    <div
                                        :class="['w-10 h-10 rounded-lg flex items-center justify-center mr-3',todo.bg_color_class]">
                                        <i :class="[todo.icon,todo.text_color_class]"></i>
                                    </div>
                                    <h3 class="font-semibold text-white">{{ todo.name }}todo</h3>
                                </div>
                                <p class="text-slate-400 text-sm mb-3 line-clamp-2">{{ todo.description }}</p>
                                <div class="flex justify-between items-center">
                                    <template v-for="(stod,sidx) in todo.tags">
                                        <span class="text-xs px-2 py-1 bg-slate-700 rounded" v-if="sidx === 0">{{
                                                stod
                                            }}</span>
                                    </template>
                                    <div class="flex items-center text-red-400">
                                        <i class="fas fa-arrow-up mr-1 text-xs"></i>
                                        <span class="text-sm">+{{ todo.attributes.changeValue }}%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 右侧信息 -->
                <div>
                    <div class="glass-card rounded-2xl p-6 mb-8">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-link text-indigo-400 mr-2"></i>
                            相关链接
                        </h2>

                        <div class="space-y-3">
                            <nuxt-link :to="archivesDetail.url" target="_blank" class="link-item">
                                <i class="fas fa-globe"></i>
                                <span>官方网站</span>
                                <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                            </nuxt-link>

                            <nuxt-link :to="archivesDetail.github" target="_blank" class="link-item">
                                <i class="fab fa-github"></i>
                                <span>GitHub 仓库</span>
                                <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                            </nuxt-link>

                            <nuxt-link :to="archivesDetail.npm" target="_blank" class="link-item">
                                <i class="fab fa-npm"></i>
                                <span>npm 包</span>
                                <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                            </nuxt-link>

                            <nuxt-link :to="archivesDetail.tutorial" target="_blank" class="link-item">
                                <i class="fas fa-graduation-cap"></i>
                                <span>教程文档</span>
                                <i class="fas fa-external-link-alt ml-2 text-xs"></i>
                            </nuxt-link>
                        </div>

                        <div class="mt-8">
                            <h3 class="text-lg font-semibold text-slate-300 mb-4">添加到收藏</h3>
                            <button
                                class="w-full py-3 rounded-xl flex items-center justify-center bg-slate-800 text-slate-300 hover:bg-indigo-600 transition-colors">
                                <i class="far fa-star mr-2"></i>
                                <span>收藏此工具</span>
                            </button>
                        </div>
                    </div>

                    <div class="glass-card rounded-2xl p-6">
                        <h2 class="text-2xl font-bold text-white mb-6 flex items-center">
                            <i class="fas fa-chart-line text-indigo-400 mr-2"></i>
                            数据统计
                        </h2>

                        <div class="space-y-4">
                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-400">访问热度</span>
                                    <div class="flex items-center">
                                        <div class="relative mr-2">
                                            <div class="heat-pulse"></div>
                                            <i class="fas fa-fire text-orange-400"></i>
                                        </div>
                                        <span class="font-medium">{{ archivesDetail.attributes.heatValue }}</span>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-orange-500" style="width: 40%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-400">增长趋势</span>
                                    <div class="flex items-center text-green-400">
                                        <i class="fas fa-arrow-up mr-1"></i>
                                        <span class="font-medium">+{{ archivesDetail.attributes.changeValue }}%</span>
                                    </div>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-green-500" style="width: 60%"></div>
                                </div>
                            </div>

                            <div>
                                <div class="flex justify-between items-center mb-2">
                                    <span class="text-slate-400">社区活跃度</span>
                                    <span class="font-medium">{{ archivesDetail.attributes.activityValue }}</span>
                                </div>
                                <div class="progress-bar">
                                    <div class="progress-fill bg-indigo-500"
                                         :style="`width:${archivesDetail.attributes.activityValue}%`"></div>
                                </div>
                            </div>
                        </div>

                        <div class="grid grid-cols-2 gap-4 mt-6">
                            <div class="stat-card">
                                <div class="text-3xl font-bold text-indigo-500">{{ archivesDetail.score }}</div>
                                <div class="text-slate-400">平均评分</div>
                            </div>
                            <div class="stat-card">
                                <div class="text-3xl font-bold text-purple-500">
                                    {{ formatToK(archivesDetail.attributes.visit) }}
                                </div>
                                <div class="text-slate-400">本月访问</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 分类信息 -->
            <div class="glass-card rounded-2xl p-6 mt-8">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div v-for="todo in archivesDetail.categories" class="flex items-center mb-4 md:mb-0">
                        <div
                            :class="['w-12 h-12 rounded-lg  flex items-center justify-center mr-4',todo.bg_color_class]">
                            <i :class="[todo.icon,todo.text_color_class]"></i>
                        </div>
                        <div>
                            <h3 class="font-semibold text-white">{{ todo.name }}</h3>
                            <p class="text-sm text-slate-400">{{ todo.description }}</p>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="text-sm text-slate-400 mr-4">
                            <span>创建于: {{ dayjs(archivesDetail.createdAt).format('YYYY-MM-DD HH:mm:ss') }}</span>
                            <span class="mx-2">•</span>
                            <span>更新于: {{ lunarUpdatedAt }}</span>
                        </div>
                        <span class="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm">
                        精选项目
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const dayjs = useDayjs();
const calendar = useCalendar()
const router = useRouter();
const route = useRoute()


const {data: archivesDetail, pending} = useAsyncData('archivesDetailAll', async () => {
    const baseData = await $fetch(`/api/frameworks/${route.params.id}`, {
        method: "GET",
        query: flattenObject({
            populate: {categories: {populate: "*"}}
        })
    });
    const frameworkRequests = baseData.categories.map(item =>
        $fetch(`/api/frameworks`,
            {
                method: "GET",
                query: flattenObject({
                    populate: "*",
                    filters: {categories: {documentId: item.documentId}},
                    pagination: {pageSize: 10}
                })
            }
        ).then(res => res.data || [])
    );
    const frameworksList = await Promise.all(frameworkRequests);

    const flattenedFrameworks = frameworksList.flat();
    // 6. 去重处理（可选）
    const uniqueFrameworks = Array.from(new Map(
        flattenedFrameworks.map(item => [item.id, item])
    ).values());


    return {
        ...baseData,
        frameworksList: flattenedFrameworks
    };
});

const lunarUpdatedAt = computed(() => {
    const updatedAt = archivesDetail.value.updatedAt;
    const date = dayjs(updatedAt);
    const data = calendar.solar2lunar(
        date.year(),
        date.month() + 1,
        date.date()
    );
    return data.IMonthCn + data.IDayCn + data.ncWeek
});

const goBack = () => {
    window.history.length > 1 ? router.back() : router.push('/');
};
</script>
<style lang="css" scoped>

.stat-card {
    transition: all 0.3s ease;
}

.stat-card:hover {
    transform: translateY(-5px);
    background: linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(139, 92, 246, 0.15) 100%);
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

.tag {
    transition: all 0.2s ease;
}

.tag:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(99, 102, 241, 0.2);
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

.heat-pulse {
    position: absolute;
    top: -3px;
    right: -3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ff6600;
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

.stat-card {
    text-align: center;
    padding: 20px;
    border-radius: 16px;
    background: rgba(30, 41, 59, 0.5);
}

.progress-bar {
    height: 8px;
    border-radius: 4px;
    background: rgba(100, 116, 139, 0.3);
    overflow: hidden;
}

.progress-fill {
    height: 100%;
    border-radius: 4px;
}

.tech-icon {
    width: 50px;
    height: 50px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    transition: all 0.3s ease;
}

.tech-icon:hover {
    transform: scale(1.1) rotate(5deg);
}

.floating-element {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.5;
    z-index: -1;
}
</style>
