import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    name: "PHHS Blankets",
    img_prefix: "blankets_",
    img_suffix: "JPG",
    num_imgs: 1,
    old_price: "$10.00",
    price: "$10.00",
    description: "offered in black, great way to show pride for our school!",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 5
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
        "quant": 5
      },
      {
        "type": "XL",
        "quant": 5
      },
      {
        "type": "2XL",
        "quant": 5
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS SweatPants",
    img_prefix: "SweatPant_",
    img_suffix: "jpg",
    num_imgs: 1,
    old_price: "$25.00",
    price: "$25.00",
    description: "offered in grey, great way to show pride for our school!",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 5
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
        "quant": 5
      },
      {
        "type": "XL",
        "quant": 5
      },
      {
        "type": "2XL",
        "quant": 5
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Heart Hoodie",
    img_prefix: "HeartHoodie_",
    img_suffix: "jpg",
    num_imgs: 1,
    old_price: "$25.00",
    price: "$25.00",
    description: "offered in navy blue, great way to show pride for our school!",
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
        "quant": 7
      },
      {
        "type": "L",
        "quant": 7
      },
      {
        "type": "XL",
        "quant": 6
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Caps",
    img_prefix: "Cap_",
    img_suffix: "jpg",
    num_imgs: 1,
    old_price: "$18.00",
    price: "$18.00",
    description: "offered in black, great way to show pride for our school!",
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
        "quant": 23
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
  name: "PHHS Pompom Beanie",
  img_prefix: "Beanie_",
  img_suffix: "jpg",
  num_imgs: 3,
  old_price: "$18.00",
  price: "$18.00",
  description: "offered in navy blue, great way to show pride for our school!",
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
      "quant": 23
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
    name: "PHHS Anchor crew and crop",
    img_prefix: "Anchor_",
    img_suffix: "png",
    num_imgs: 3,
    old_price: "$12.00",
    price: "$12.00",
    description: "offered in white, great way to show pride for our school!",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 21
      },
      {
        "type": "M",
        "quant": 23
      },
      {
        "type": "L",
        "quant": 16
      },
      {
        "type": "XL",
        "quant": 10
      },
      {
        "type": "2XL",
        "quant": 3
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Compass Tee",
    img_prefix: "MaroonTS_",
    img_suffix: "png",
    num_imgs: 2,
    old_price: "$7.00",
    price: "$7.00",
    description: "TBD",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 10
      },
      {
        "type": "M",
        "quant": 3
      },
      {
        "type": "L",
        "quant": 10
      },
      {
        "type": "XL",
        "quant": 3
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Compass Pullover Hoodie",
    img_prefix: "MaroonPullHoodie_",
    img_suffix: "JPG",
    num_imgs: 4,
    old_price: "$25.00",
    price: "$25.00",
    description: "Currently offered in Gray and Maroon, sizes available are the total of both colors",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 21
      },
      {
        "type": "M",
        "quant": 23
      },
      {
        "type": "L",
        "quant": 16
      },
      {
        "type": "XL",
        "quant": 10
      },
      {
        "type": "2XL",
        "quant": 3
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Quarter Zip",
    img_prefix: "quarterZip_",
    img_suffix: "jpg",
    num_imgs: 4,
    old_price: "$28.00",
    price: "$28.00",
    description: "Offered in Maroon and Black, sizes availble are the total of both colors",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 19
      },
      {
        "type": "M",
        "quant": 8
      },
      {
        "type": "L",
        "quant": 12
      },
      {
        "type": "XL",
        "quant": 13
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Compass Crewneck",
    img_prefix: "CompassCrew_",
    img_suffix: "JPG",
    num_imgs: 3,
    old_price: "$20.00",
    price: "$20.00",
    description: "Availble in Gray",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 12
      },
      {
        "type": "M",
        "quant": 15
      },
      {
        "type": "L",
        "quant": 15
      },
      {
        "type": "XL",
        "quant": 4
      },
      {
        "type": "2XL",
        "quant": 1
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS BBY Tee",
    img_prefix: "BBYTee_",
    img_suffix: "JPG",
    num_imgs: 2,
    old_price: "$15.00",
    price: "$15.00",
    description: "Availble in Gray",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 7
      },
      {
        "type": "M",
        "quant": 8
      },
      {
        "type": "L",
        "quant": 2
      },
      {
        "type": "XL",
        "quant": 1
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },

  /*
  {
    id: uuidv4(),
    name: "PHHS College Long Sleeve Tee",
    img_prefix: "collegeLongSleeve_",
    img_suffix: "jpg",
    num_imgs: 5,
    old_price: "Out of Stock",
    price: "$10.00",
    description: "Similar to our short sleeve tee, but now our timeless design is on a long sleeve!",
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
  },
  {
    id: uuidv4(),
    name: "PHHS Sweats",
    img_prefix: "sweats_",
    img_suffix: "jpg",
    num_imgs: 3,
    old_price: "Out of Stock",
    price: "$10.00",
    description: "The perfect sweats to keep warm this winter, topped with our maroon PH anchor design. Available in gray.",
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
  */
];

export default dataSlider;