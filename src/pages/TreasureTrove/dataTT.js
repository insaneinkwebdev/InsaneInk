import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    //update inventory SOON
    id: uuidv4(),
    name: "Anchor Zip Up",
    price: "$35.00",
    description: "Our new full zip-up is perfect for the winter cold and the new semester, or even as a last minute Christmas gift for your friends and family! Only available in gray.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 0
      },
      {
        "type": "M",
        "quant": 0
      },
      {
        "type": "L",
        "quant": 0
      },
      {
        "type": "XL",
        "quant": 0
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Home Of The Pirates Long Sleeve",
    price: "$10.00",
    description: "Wanna rep Piedmont Hills while staying cozy? We got you covered! Only available in white.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 0
      },
      {
        "type": "M",
        "quant": 0
      },
      {
        "type": "L",
        "quant": 0
      },
      {
        "type": "XL",
        "quant": 0
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Pirate Surf Hoodie",
    price: "$30.00",
    description: "Ready to ride through the cold months with a summer vibe 🌊 Only available in sand.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 6
      },
      {
        "type": "M",
        "quant": 20
      },
      {
        "type": "L",
        "quant": 6
      },
      {
        "type": "XL",
        "quant": 0
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS College Crewneck",
    price: "$20.00",
    description: "Piedmont Hills with a lil retro twist to it. Only available in heather grey (or a hoodie in grey!)",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 4
      },
      {
        "type": "M",
        "quant": 2
      },
      {
        "type": "L",
        "quant": 3
      },
      {
        "type": "XL",
        "quant": 2
      },
      {
        "type": "2XL",
        "quant": 2
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS College Hoodie",
    price: "$25.00",
    description: "Piedmont Hills with a lil retro twist to it. Only available in grey.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 4
      },
      {
        "type": "M",
        "quant": 5
      },
      {
        "type": "L",
        "quant": 0
      },
      {
        "type": "XL",
        "quant": 0
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Green Skull Crewneck",
    price: "$12.00",
    description: "St. Patrick's Day came real early ☘️ Only available in white.",
    featured: true,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 0
      },
      {
        "type": "M",
        "quant": 0
      },
      {
        "type": "L",
        "quant": 0
      },
      {
        "type": "XL",
        "quant": 0  
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  }
];

export default dataSlider;