<script setup>
import Card from './Card.vue';
</script>
<template>
    <div class="w-full px-[5%] min-h-[20rem] text-primary  bg-white flex flex-col justify-between items-center">
        <div  class="w-full  flex justify-between items-center my-10">
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