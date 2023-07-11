// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
      products: Product[]
    }
		// interface Platform {}
	}
}

interface Product {
  code: string
  name: string
  price: number
}

interface CartItem {
  productCode: string
  quantity: number
  price: number
}
