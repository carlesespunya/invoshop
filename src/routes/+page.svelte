<script lang="ts">
  import ProductCard from "../lib/productCard.svelte";
  import Cart from "../lib/cart.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="container my-32 mx-44 pl-14 bg-white ">
  <div class="w-2/3 py-10 grid divide-y">
    <h1 class="mb-4">Products</h1>
    <section class="pt-8">
      <table class="pt-8">
        <tr>
          <th>PRODUCT DETAILS</th>
          <th>QUANTITY</th>
          <th>PRICE</th>
          <th>TOTAL</th>
        </tr>

        {#each data.products as product}
          <tr>
            <ProductCard {product}/>
          </tr>
        {/each}
      </table>
    </section>

  </div>
  <div class="w-1/3 bg-slate-400 h-">
    <Cart />
  </div>
</div>

<style>
  th{
    text-align: left;
    color: #A6A7B3;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 10px;
  }
</style>
