<script setup>
import BlogPost from './BlogPost.vue';
</script>
<template>
    <div class="bg-white ">
        <div>
            text header
        </div>
        blog post warper 
        <div class="flex w-full px-[5%] justify-between">
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
        </div>
    </div>
</template>