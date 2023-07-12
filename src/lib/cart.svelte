<script lang="ts">
  import { get } from "svelte/store";
  import { cartItems } from "../cartStore";
  import { cartDiscounts } from "../discountStore";
  import CartDiscounts from "./cartDiscounts.svelte";
  import PriceFormatter from "./priceFormatter.svelte";

  let checkoutPrice = 0

  const getTotalItems = (cart: CartItem[]) : number => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const getPrice = (cart: CartItem[]) : number => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  const getCheckoutPrice = () : void => {
    checkoutPrice = getPrice(get(cartItems)) - get(cartDiscounts).reduce((total, discount) => total + discount.value, 0)
  }
</script>

<div class="w-1/3 bg-slate-400 py-10 px-8 divide-y flex flex-col cart">
  <h1 class="mb-4">Cart</h1>

  <div class="flex justify-between py-8">
    <p>{getTotalItems($cartItems)} Items</p>
    <p><PriceFormatter price={getPrice($cartItems)}/></p>
  </div>

  <CartDiscounts />

  <div class="max-h-70 flex-grow"></div>

  <div class="py-4 checkout">
    <div class="flex justify-between">
      <p>Total</p>
      <p class="total-price"><PriceFormatter price={checkoutPrice}/></p>
    </div>
    <button class="py-2 mt-6" on:click={() => getCheckoutPrice()}>Chackout</button>
  </div>
</div>

<style>
  .cart{
    background: #D9D9D9;
    height: 648px;
  }

  button{
    border-radius: 4px;
    background: #7350FF;
    width: 100%;
    color: #FFF;
  }

  .total-price{
    font-size: 20px;
  }
</style>
