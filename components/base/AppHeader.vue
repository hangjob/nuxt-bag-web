<template>
    <nav class="sticky top-0 z-50 glass-card backdrop-blur-lg border-b border-slate-700">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <div class="h-8 w-8 rounded-lg bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                            <i class="fas fa-code text-white"></i>
                        </div>
                        <span class="ml-2 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DevHub</span>
                    </div>
                    <div class="hidden md:block ml-10">
                        <div class="flex space-x-8">
                            <a href="#" class="nav-link text-slate-300 hover:text-white font-medium active">首页</a>
                            <a href="#" class="nav-link text-slate-300 hover:text-white font-medium">工具库</a>
                            <a href="#" class="nav-link text-slate-300 hover:text-white font-medium">工作流</a>
                            <a href="#" class="nav-link text-slate-300 hover:text-white font-medium">排行榜</a>
                            <a href="#" class="nav-link text-slate-300 hover:text-white font-medium">社区</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="relative mr-4">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-search text-slate-400"></i>
                        </div>
                        <input type="text" class="search-input bg-slate-800 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-slate-300 focus:outline-none focus:ring-1 focus:ring-primary w-64" placeholder="搜索开发工具...">
                    </div>
                    <div class="flex items-center">
                        <div class="relative mr-4">
                            <button class="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 relative" onclick="toggleNotificationPanel()">
                                <i class="far fa-bell"></i>
                                <span class="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
                            </button>
                        </div>
                        <button class="p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700" onclick="toggleProfilePanel()">
                            <i class="far fa-user"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>
