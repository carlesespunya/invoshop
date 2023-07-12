<script lang="ts">
  import Products from "../lib/products.svelte";
  import Cart from "../lib/cart.svelte";
  import { discountRules } from "../discountStore";
  import type { PageData } from "./$types";

  export let data: PageData;

  discountRules.set(data.discountRules)
</script>

<div class="container my-32 mx-44 bg-white flex">
  <Products products={data.products}/>
  <Cart/>
</div>
