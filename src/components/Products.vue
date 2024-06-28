<script setup>
import Card from './Card.vue';
</script>
<template>
    <div class="w-full px-20 min-h-[20rem] text-primary  bg-white flex flex-col justify-between items-center gap-5">
        <div  class="w-full  flex justify-between items-center">
            <span class="text-2xl font-black">محصولات پر فروش</span>
            <span class="text-5xl font-black">محصولات پر فروش</span>
        </div>
        <div class="flex justify-between w-full">

            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
</template>