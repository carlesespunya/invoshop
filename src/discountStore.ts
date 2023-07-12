import { writable, get } from "svelte/store";

export const discountRules = writable<DiscountRule[]>([]);
export const cartDiscounts = writable<Discount[]>([]);

export const applyDiscounts = (cartItems: CartItem[]) => {
  cartItems.forEach((item: CartItem) => {
    const appliedDiscounts = new Set();
    const matchingRule = get(discountRules).find((rule: DiscountRule) => rule.productCode === item.productCode && !appliedDiscounts.has(rule));

    if (matchingRule) {
      applyDiscount(matchingRule, item);
      appliedDiscounts.add(matchingRule);
    }
  });
}

const applyDiscount = (rule: DiscountRule, item: CartItem) => {
  const discounts: Discount[] = get(cartDiscounts)
  const discountPosition: number = discounts.findIndex((discounts) => discounts.discountRuleId === rule.id )
  const value: number = rule.condition(item.quantity) ? rule.apply(item.price, item.quantity) : 0

  if (discountPosition === -1) {
    return cartDiscounts.update(() => {
      return [...discounts, { discountRuleId: rule.id, value }]
    })
  }

  cartDiscounts.update(() => {
    const updatedDiscounts: Discount[] = discounts.map(discount => {
      if (discount.discountRuleId === rule.id) {
        return { ...discount, value }
      }
      return discount
    })

    return updatedDiscounts
  })
}

export const getDicountRule = (discountRuleId: string) : string => {
  const rule = get(discountRules).find(rule => rule.id === discountRuleId);
  return rule ? rule.name : '';
}
