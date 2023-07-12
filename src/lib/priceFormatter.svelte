<script lang="ts">
  export let price: number;

  $: formattedPrice = (price / 100).toFixed(2) + "€";
</script>

<span>{formattedPrice}</span>
