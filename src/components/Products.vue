<script setup>
import Card from './Card.vue';
</script>
<template>
    <div class="w-full flex flex-col justify-between items-center px-[5%] ">
        <div class="w-full text-primary flex justify-between items-center my-10">
            <button class="md:text-2xl font-black opacity-80">مشاهده همه</button>
            <span class="text-2xl md:text-5xl font-black">محصولات پر فروش</span>
        </div>
        <div class="w-full flex flex-col md:flex-row gap-5  justify-center items-center">
            <div class="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-around items-center gap-5">
                <Card/>
                <Card/>
            </div>
            <div class="w-full md:w-1/2 flex flex-col md:flex-row justify-center md:justify-around items-center gap-5">
                <Card/>
                <Card/>
            </div>
        </div>
        </div>
</template>