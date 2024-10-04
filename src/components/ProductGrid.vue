<template>
    <div class="flex justify-center bg-softYellow py-10">
        <div class="grid grid-cols-3 gap-10">
            <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </div>
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';

export default {
    name: 'ProductGrid',
    components: { ProductCard },
    data() {
        return {
            products: [
                { id: 1, title: 'Retro Glasses', price: '$25.00' },
                { id: 2, title: 'Boho Shirt', price: '$35.00' },
                { id: 3, title: 'Flower Skirt', price: '$40.00' },
                { id: 4, title: 'Peace Necklace', price: '$15.00' },
                { id: 5, title: 'Vintage Jacket', price: '$60.00' },
                { id: 6, title: 'Bell Bottoms', price: '$50.00' },
                { id: 7, title: 'Groovy Hat', price: '$30.00' },
                { id: 8, title: 'Tie-Dye Shirt', price: '$20.00' },
                { id: 9, title: 'Hippie Sandals', price: '$35.00' }
            ]
        };
    }
}
</script>
