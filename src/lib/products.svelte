<script lang="ts">
  import ProductCard from "./productCard.svelte";

  export let products: Product[]
</script>

<div class="w-2/3 py-10 pr-8 pl-14 divide-y">
  <h1 class="mb-4">Products</h1>
  <section class="pt-8">
    <table class="pt-8">
      <tr>
        <th>PRODUCT DETAILS</th>
        <th>QUANTITY</th>
        <th>PRICE</th>
        <th>TOTAL</th>
      </tr>

      {#each products as product (product.code)}
        <ProductCard {product}/>
      {/each}
    </table>
  </section>
</div>

<style>
  th{
    text-align: left;
    color: #A6A7B3;
    font-size: 10px;
    font-weight: 400;
  }
</style>
