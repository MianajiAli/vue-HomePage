<script setup>
import BlogPost from './BlogPost.vue';
</script>
<template>
    <div class="w-full px-[5%] pb-10 bg-secondary">

        <div>
            <div class="w-full  text-primary flex justify-between items-center py-10">
                <button class="md:text-2xl font-black opacity-80">مشاهده همه</button>
                <span class="text-2xl md:text-5xl font-black">محصولات پر فروش</span>
            </div>
            <div
                class="w-full flex flex-col md:flex-row flex-wrap justify-center lg:justify-between items-center gap-5">
                <BlogPost />
                <BlogPost />
                <BlogPost />
                <BlogPost />
            </div>
        </div>
    </div>
</template>