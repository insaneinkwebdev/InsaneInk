import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    //update inventory SOON
    id: uuidv4(),
    name: "Anchor Zip Up",
    img_prefix: "img_",
    img_suffix: "png",
    num_imgs: 5,
    price: "$25.00",
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
    img_prefix: "img_",
    img_suffix: "png",
    num_imgs: 5,
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
    img_prefix: "img_",
    img_suffix: "png",
    num_imgs: 5,
    price: "$20.00",
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
    img_prefix: "collegeCrew_",
    img_suffix: "jpg",
    num_imgs: 5,
    price: "$20.00",
    description: "Piedmont Hills with a lil retro twist to it. Available in gray and sand!",
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
    name: "PHHS College Short Sleeve Tee",
    img_prefix: "collegeShortSleeve_",
    img_suffix: "jpg",
    num_imgs: 5,
    price: "$10.00",
    description: "Piedmont Hills with a lil retro twist to it. Only available in white.",
    featured: true,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 5
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
    name: "PHHS College Hoodie",
    img_prefix: "collegeHoodie_",
    img_suffix: "jpg",
    num_imgs: 5,
    price: "$25.00",
    description: "Piedmont Hills with a lil retro twist to it. Available in gray, white and sand.",
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
    name: "PHHS College Long Sleeve Tee",
    img_prefix: "collegeLongSleeve_",
    img_suffix: "jpg",
    num_imgs: 5,
    price: "$15.00",
    description: "Piedmont Hills with a lil retro twist to it. Only available in white.",
    featured: true,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 11
      },
      {
        "type": "M",
        "quant": 10
      },
      {
        "type": "L",
        "quant": 5
      },
      {
        "type": "XL",
        "quant": 4  
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS College Men's Tank",
    img_prefix: "collegeMensTank_",
    img_suffix: "jpg",
    num_imgs: 5,
    price: "$15.00",
    description: "Piedmont Hills with a lil retro twist to it. Only available in white.",
    featured: true,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 3
      },
      {
        "type": "M",
        "quant": 2
      },
      {
        "type": "L",
        "quant": 2
      },
      {
        "type": "XL",
        "quant": 2  
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Green Tote",
    img_prefix: "greenTote_",
    img_suffix: "jpg",
    num_imgs: 3,
    price: "$5.00",
    description: "The perfect tote to hold all your things!",
    featured: true,
    sizes: [
      {
        "type": "M",
        "quant": 16
      }
    ]
  }
];

export default dataSlider;