<script lang="ts">
  import PriceFormatter from "./priceFormatter.svelte";
  import { cartDiscounts, getDicountRule } from "../discountStore";
</script>

<div class="pt-6 pb-2">
  <h3 class="mb-4">DISCOUNTS</h3>
  {#each $cartDiscounts as discount (discount.discountRuleId)}
    {#if discount.value > 0}
      <div class="flex justify-between mb-5">
        <p>{getDicountRule(discount.discountRuleId)}</p>
        <p><PriceFormatter price={-discount.value}/></p>
      </div>
    {/if}
  {/each}
</div>

<style>
  h3{
    color: #717285;
    font-size: 12px;
    font-weight: 400;
  }
</style>
