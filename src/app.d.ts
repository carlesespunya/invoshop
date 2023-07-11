declare global {
	namespace App {
		interface PageData {
      products: Product[]
      discountRules: DiscountRule[]
    }
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
