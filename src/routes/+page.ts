import type { PageLoad } from "./$types";

export const load = (() => {
    return {
      products: [
        {
          code: "TSHIRT",
          name: "T-shirt",
          price: 2000
        },
        {
          code: "MUG",
          name: "Coffe Mug",
          price: 750
        },
        {
          code: "CAP",
          name: "Cap",
          price: 500
        }
      ],
      discountRules: [
        {
          id: "0",
          name: "25% Shirt offer",
          productCode: "TSHIRT",
          condition: (quantity: number) : boolean => quantity >= 3,
          apply: (price: number) : number => price * 0.25
        },
        {
          id: "1",
          name: "3x2 Mug offer",
          productCode: "MUG",
          condition: (quantity: number ) : boolean=> quantity >= 3,
          apply: (price: number, quantity: number) : number => {
            const freeItems = Math.floor(quantity / 3);
            return (freeItems / quantity) * price;
          }
        }
      ]
    }
}) satisfies PageLoad;
