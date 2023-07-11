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
      ]
    }
}) satisfies PageLoad;
