// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
      products: Product[]
      discountRules: DiscountRule[]
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

interface DiscountRule {
  id: string;
  name: string;
  productCode: string;
  condition: (quantity: number) => boolean;
  apply: (price: number, quantity: number) => number;
}

interface Discount {
  discountRuleId: string;
  value: number;
}
