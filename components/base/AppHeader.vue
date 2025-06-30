<template>
    <nav class="sticky top-0 z-50 bg-dark/80 backdrop-blur-lg border-b border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center">
                        <div class="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                            <i class="fas fa-cube text-white"></i>
                        </div>
                        <span class="ml-3 text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DevHarbor</span>
                    </div>
                    <div class="hidden md:block ml-10">
                        <div class="flex space-x-8">
                            <a href="#" class="nav-link text-slate-200 font-medium">首页</a>
                            <a href="#" class="nav-link text-slate-400 font-medium">发现</a>
                            <a href="#" class="nav-link text-slate-400 font-medium">工作流</a>
                            <a href="#" class="nav-link text-slate-400 font-medium">排行榜</a>
                            <a href="#" class="nav-link text-slate-400 font-medium">社区</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="relative w-64 mr-4 hidden md:block">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="fas fa-search text-slate-500"></i>
                        </div>
                        <input type="text" placeholder="搜索工具、框架、插件..." class="w-full py-2 pl-10 pr-4 rounded-lg bg-slate-800 border border-slate-700 text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    </div>
                    <button class="p-2 rounded-full text-slate-400 hover:text-slate-200">
                        <i class="fas fa-user-circle text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
