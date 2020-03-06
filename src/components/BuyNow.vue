<!-- =========================================================================================
	File Name: BuyNow.vue
	Description: Buy Now Button
	Component Name: BuyNow
	----------------------------------------------------------------------------------------
	Item Name: TripCarte Pwa
  Author: TripCarte.Asia
  Author URL: http://www.tripcarte.asia/
========================================================================================== -->

<template functional>
    <vs-button color="danger" type="filled" class="buy-now" target :href="{url: 'https://tripcarte.asia'}">View Web Version</vs-button>
</template>

<style lang="scss">
    .buy-now{
        position: fixed;
        bottom: 5%;
        right: 79px;
        z-index: 51000;
        box-shadow: 0 1px 20px 1px rgb(251, 67, 79);
    }
</style>

<script>
export default {
    name: "buy-now",
}
</script>
