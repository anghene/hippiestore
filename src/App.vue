<template>
  <div class="bg-red-500 text-white p-10">
    <Header />
    <ProductCard />
    <ProductGrid />
  </div>
</template>


<script>
import Header from './components/Header.vue';  // Import the Header component
import ProductCard from './components/ProductCard.vue';  // Import the ProductCard component
import ProductGrid from './components/ProductGrid.vue';  // Import the ProductGrid component

export default {
  name: "App",
  components: {
    Header,  // Register the Header component
    ProductGrid,  // Register the ProductGrid component
  },
  created() {
    console.log('App.vue component has been created!');  // Check if this logs in the console
  }
};
</script>

<style scoped>
</style>
