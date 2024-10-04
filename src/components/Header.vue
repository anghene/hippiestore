<template>
    <header class="bg-brightRed text-lightYellow text-center py-5 relative">
        <img src="@/assets/logo.png" alt="Hippie Ville Logo" class="absolute left-5 top-5 w-60">
        <nav>
            <ul class="flex justify-center space-x-10">
                <li class="text-tealGreen cursor-pointer hover:text-darkRed">Sunglasses</li>
                <li class="text-tealGreen cursor-pointer hover:text-darkRed">Clothes</li>
                <li class="text-tealGreen cursor-pointer hover:text-darkRed">Help Bags</li>
                <li class="text-tealGreen cursor-pointer hover:text-darkRed">All Fashion</li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    created() {
    // console.log('Header.vue component has been created!');  // Check if this logs in the console
  }
}
</script>
