<template>
    <nav class="sticky top-0 z-50 glass-card backdrop-blur-lg border-b border-slate-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <!-- 左侧 Logo 和导航 -->
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <div
                            class="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                            <i class="fas fa-code text-white"></i>
                        </div>
                        <span
                            class="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DevHub</span>
                    </div>
                    <div class="hidden md:block ml-10">
                        <div class="flex space-x-8">
                            <NuxtLink v-for="item in compData.nav_list" :to="item.path"
                                      :class="['nav-link flex-shrink-0 text-slate-300 hover:text-white font-medium',route.path === item.path ? 'active' : null]">
                                {{ item.name }}
                            </NuxtLink>
                        </div>

                    </div>
                </div>
                <!-- 右侧搜索和用户功能 -->
                <div class="flex items-center">
                    <div class="relative mr-4 hidden md:block">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-search text-slate-400"></i>
                        </div>
                        <input type="text"
                               class="search-input bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary w-64"
                               placeholder="搜索开发工具...">
                    </div>
                    <div class="flex items-center">
                        <div class="relative mr-4">
<!--                            <UPopover>-->
<!--                                <button @click="compData.notificationPanelShow = true"-->
<!--                                        class="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 relative">-->
<!--                                    <i class="far fa-bell"></i>-->
<!--                                    <span-->
<!--                                        class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>-->
<!--                                </button>-->
<!--                                <template #content>-->
<!--                                    <div-->
<!--                                        class="notification-panel absolute right-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-lg border border-slate-700 z-50">-->
<!--                                        <div class="p-4 border-b border-slate-700 flex justify-between items-center">-->
<!--                                            <h3 class="font-semibold">通知</h3>-->
<!--                                            <button class="text-xs text-primary hover:text-secondary">全部已读</button>-->
<!--                                        </div>-->
<!--                                        <div class="max-h-80 overflow-y-auto">-->
<!--                                            <div class="notification-item p-4 border-b border-slate-700 cursor-pointer">-->
<!--                                                <div class="flex">-->
<!--                                                    <div class="flex-shrink-0">-->
<!--                                                        <div-->
<!--                                                            class="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">-->
<!--                                                            <i class="fas fa-code-branch text-white text-sm"></i>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                    <div class="ml-3">-->
<!--                                                        <p class="text-sm font-medium">新的工作流模板已发布</p>-->
<!--                                                        <p class="text-sm text-slate-400 mt-1">-->
<!--                                                            查看最新的React开发工作流模板</p>-->
<!--                                                        <p class="text-xs text-slate-500 mt-1">2小时前</p>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="notification-item p-4 border-b border-slate-700 cursor-pointer">-->
<!--                                                <div class="flex">-->
<!--                                                    <div class="flex-shrink-0">-->
<!--                                                        <div-->
<!--                                                            class="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">-->
<!--                                                            <i class="fas fa-tools text-white text-sm"></i>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                    <div class="ml-3">-->
<!--                                                        <p class="text-sm font-medium">工具库更新</p>-->
<!--                                                        <p class="text-sm text-slate-400 mt-1">新增5个AI代码助手工具</p>-->
<!--                                                        <p class="text-xs text-slate-500 mt-1">昨天</p>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                            <div class="notification-item p-4 cursor-pointer">-->
<!--                                                <div class="flex">-->
<!--                                                    <div class="flex-shrink-0">-->
<!--                                                        <div-->
<!--                                                            class="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">-->
<!--                                                            <i class="fas fa-trophy text-white text-sm"></i>-->
<!--                                                        </div>-->
<!--                                                    </div>-->
<!--                                                    <div class="ml-3">-->
<!--                                                        <p class="text-sm font-medium">排行榜更新</p>-->
<!--                                                        <p class="text-sm text-slate-400 mt-1">-->
<!--                                                            你收藏的工具进入月度Top10</p>-->
<!--                                                        <p class="text-xs text-slate-500 mt-1">3天前</p>-->
<!--                                                    </div>-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="p-3 text-center border-t border-slate-700">-->
<!--                                            <a href="#"-->
<!--                                               class="text-sm text-primary hover:text-secondary">查看所有通知</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </template>-->
<!--                            </UPopover>-->
                        </div>
                        <div class="relative">
<!--                            <UPopover>-->
<!--                                <button @click="compData.profilePanelShow = true"-->
<!--                                        class="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700">-->
<!--                                    <i class="far fa-user"></i>-->
<!--                                </button>-->
<!--                                <template #content>-->
<!--                                    <div-->
<!--                                        class="profile-panel absolute right-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-lg border border-slate-700 z-50">-->
<!--                                        <div class="p-4 flex items-center border-b border-slate-700">-->
<!--                                            <div-->
<!--                                                class="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">-->
<!--                                                <i class="fas fa-user text-white"></i>-->
<!--                                            </div>-->
<!--                                            <div class="ml-3">-->
<!--                                                <p class="font-medium">开发者用户</p>-->
<!--                                                <p class="text-sm text-slate-400">pro@devhub.com</p>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                        <div class="py-1">-->
<!--                                            <a href="#" class="block px-4 py-2 text-sm hover:bg-slate-700">个人中心</a>-->
<!--                                            <a href="#"-->
<!--                                               class="block px-4 py-2 text-sm hover:bg-slate-700">我的工具集</a>-->
<!--                                            <a href="#"-->
<!--                                               class="block px-4 py-2 text-sm hover:bg-slate-700">我的工作流</a>-->
<!--                                            <a href="#" class="block px-4 py-2 text-sm hover:bg-slate-700">收藏夹</a>-->
<!--                                        </div>-->
<!--                                        <div class="py-1 border-t border-slate-700">-->
<!--                                            <a href="#" class="block px-4 py-2 text-sm hover:bg-slate-700">设置</a>-->
<!--                                            <a href="#"-->
<!--                                               class="block px-4 py-2 text-sm hover:bg-slate-700 text-red-400 hover:text-red-300">退出登录</a>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </template>-->
<!--                            </UPopover>-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 移动端导航 -->
        <div class="md:hidden px-4 py-3 border-t border-slate-700">
            <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i class="fas fa-search text-slate-400"></i>
                </div>
                <input type="text"
                       class="w-full bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary"
                       placeholder="搜索开发工具...">
            </div>
            <div class="flex justify-between mt-3">
                <NuxtLink v-for="item in compData.nav_list" :to="item.path"
                   class="nav-link text-slate-300 hover:text-white font-medium px-3 py-2 rounded-lg text-sm">{{ item.name }}</NuxtLink>
            </div>
        </div>
    </nav>
</template>
<script setup>
const route = useRoute()
const compData = reactive({
    notificationPanelShow: false,
    profilePanelShow: false,
    nav_list: webEnum().nav_list
})
</script>
<style lang="css" scoped>
.nav-link {
    position: relative;
    padding-bottom: 5px;
    transition: all 0.3s ease;
}

.nav-link:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6366f1, #8b5cf6);
    transition: width 0.3s ease;
}

.nav-link:hover:after,
.nav-link.active:after {
    width: 100%;
}

.nav-link.active {
    color: white;
}

.search-input:focus {
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
}
</style>
