<script setup>
import Header from './Header.vue';
import Hero from './Hero.vue';
import Products from './Products.vue';
import Telegram from './Telegram.vue';
import Blog from './Blog.vue';
import Footer from './Footer.vue';
</script>
<template>
    <div class="name bg-background min-h-screen">
        <Header/>
        <Hero/>
        <Products />
        <Telegram/>
        <Blog/>
        <Footer/>
    </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
    name: 'App',
    mounted() {
        AOS.init({
            duration: 800,
            once: true, // Animation happens only once - while scrolling down
        });
    }
};
</script>