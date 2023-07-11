<script lang="ts">
  import { get } from "svelte/store";
  import { cartItems } from "../cartStore";
  import { applyDiscounts, cartDiscounts } from "../discountStore";

  export let discountRules: DiscountRule[]

  let cart: CartItem[] = get(cartItems)
  let totalItems: number = cart.reduce((total, item) => total + item.quantity, 0)
  let totalPrice: number = cart.reduce((total, item) => total + item.price, 0)

  let checkoutPrice = 0

  cartItems.subscribe((newCartValue) => {
    applyDiscounts(discountRules, newCartValue)

    cart = newCartValue;
    totalItems = newCartValue.reduce((total, item) => total + item.quantity, 0)
    totalPrice = newCartValue.reduce((total, item) => total + item.price, 0)
  })

  const getDicountRule = (discountRuleId: string) : string => {
    const rule = discountRules.find(rule => rule.id === discountRuleId);
    return rule ? rule.name : '';
  }

  const getCheckoutPrice = () : void => {
    checkoutPrice = totalPrice - get(cartDiscounts).reduce((total, discount) => total + discount.value, 0)
  }
</script>

<div class="w-1/3 bg-slate-400 py-10 px-8 divide-y cart">
  <h1 class="mb-4">Cart</h1>

  <div class="flex justify-between py-4">
    <p>{totalItems} Items</p>
    <p>{totalPrice / 100} €</p>
  </div>

  <div class="py-4">
    <h3>DISCOUNTS</h3>
    {#each $cartDiscounts as discount}
      {#if discount.value > 0}
        <div class="flex justify-between">
          <p>{getDicountRule(discount.discountRuleId)}</p>
          <p>- {discount.value / 100} €</p>
        </div>
      {/if}
    {/each}
  </div>

  <div class="h-52"> </div>

  <div>
    <div class="flex justify-between">
      <p>Total</p>
      <p>{checkoutPrice / 100} €</p>
    </div>
    <button on:click={() => getCheckoutPrice()}>Chackout</button>
  </div>
</div>

<style>
  .cart{
    background: #D9D9D9;
  }

  button{
    border-radius: 4px;
    background: #7350FF;
    width: 100%;
    color: #FFF;
  }
</style>
