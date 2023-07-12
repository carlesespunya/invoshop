<script lang="ts">
  import { cartItems, addToCart, removeFromCart } from "../cartStore";
  import PriceFormatter from "./priceFormatter.svelte";

  export let product: Product

  const getCartProduct = (cart: CartItem[]) : CartItem => {
    const itemsPosition: number = cart.findIndex((item) => { return item.productCode === product.code });
    return cart[itemsPosition];
  }

  const getCartProductValue = (cart: CartItem[], value: 'quantity' | 'price'): number => {
    const cartProduct = getCartProduct(cart);

    if (cartProduct) {
      return value === 'quantity' ? cartProduct.quantity : cartProduct.price;
    }

    return 0;
  };
</script>

<tr>
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
    <p class="py-2 px-4 m-2 border rounded-sm">{getCartProductValue($cartItems, 'quantity')}</p>
    <button on:click={() => addToCart(product)}>+</button>
  </td>

  <td>
    <PriceFormatter price={product.price}/>
  </td>

  <td>
    <PriceFormatter price={getCartProductValue($cartItems, "price")}/>
  </td>
</tr>

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
    padding-right: 62px;
    padding-top: 32px;
  }

  img{
    width: 72px;
    height: 72px;
    border-radius: 4px;
    border: 1px solid #CACAD1;
  }
</style>
