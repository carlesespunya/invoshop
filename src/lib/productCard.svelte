<script lang="ts">
  import { get } from "svelte/store";
  import { cartItems, addToCart, removeFromCart } from "../cartStore";
  export let product: Product

  let cart: CartItem[] = get(cartItems)
  let itemsPosition: number = cart.findIndex((item) => item.productCode === product.code )
  let cartProduct: CartItem = cart[itemsPosition]

  cartItems.subscribe((newCartValue) => {
    cart = newCartValue;
    itemsPosition = cart.findIndex((item) => { return item.productCode === product.code });
    cartProduct = cart[itemsPosition];
  });
</script>

<td>
  <div class="flex items-center gap-4">
    <img src="/images/{product.code}_thumb.png" alt={product.code} />
    <div>
      <h2>{product.name}</h2>
      <p><small>Product code {product.code}</small></p>
    </div>
  </div>
</td>


<td class="flex">
  <button on:click={() => removeFromCart(product)}>-</button>
  <p class="py-2 px-4 m-2 border rounded-sm">{cartProduct?.quantity || 0}</p>
  <button on:click={() => addToCart(product)}>+</button>
</td>

<td>
  {product.price / 100} €
</td>

<td>
  {cartProduct?.price / 100 || 0} €
</td>

<style>
  h2{
    color: #7350FF;
    font-size: 18px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: -0.18px;
  }

  button{
    color: #7350FF;
    font-weight: 400;
  }

  small{
    color: #A6A7B3;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.12px;
  }

  td{
    padding-right: 70px;
    padding-top: 32px;
  }

  img{
    width: 72px;
    height: 72px;
    border-radius: 4px;
    border: 1px solid #CACAD1;
  }
</style>
