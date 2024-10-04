<template>
    <div class="bg-burntOrange rounded-lg shadow-lg p-5 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
        <img src="https://via.placeholder.com/150" alt="Product Image" class="rounded-full mx-auto mb-4 transition-transform duration-300 hover:scale-110">
        <h3 class="text-xl font-bold text-brightRed">{{ product.title }}</h3>
        <p class="text-deepGrayBrown font-semibold">{{ product.price }}</p>
    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: ['product']
}
</script>
