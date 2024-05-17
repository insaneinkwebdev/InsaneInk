import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    name: "Anchor Zip Up",
    img_prefix: "anchorZip_",
    img_suffix: "jpg",
    num_imgs: 3,
    old_price: "$20.00",
    price: "$15.00",
    description: "A unique take on school spirit, the splash of blues encompass the oceanic vibes of the Piedmont Hills Pirates! Available in a nice heather gray!",
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
        "quant": 8
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
    name: "Pirate Surf Hoodie",
    img_prefix: "surfHoodie_",
    img_suffix: "jpg",
    num_imgs: 5,
    old_price: "$20.00",
    price: "$15.00",
    description: "Wanna test the waters and “surf” through this school year? Then a hoodie with a surfing pirate is all you need! Come get yours in a bangin’ sand on maroon colorway!",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 2
      },
      {
        "type": "M",
        "quant": 14
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
    name: "Piedmont Hills Quarter Zip",
    img_prefix: "quarterZip_",
    img_suffix: "jpg",
    num_imgs: 4,
    old_price: "$28.00",
    price: "$20.00",
    description: "Wanna stay cozy while repping PHHS? This quarter zip really puts the Hills in Piedmont Hills! Available in maroon and black.",
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
        "quant": 15
      },
      {
        "type": "L",
        "quant": 14
      },
      {
        "type": "XL",
        "quant": 21
      },
      {
        "type": "2XL",
        "quant": 1
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS College Crewneck",
    img_prefix: "collegeCrew_",
    img_suffix: "jpg",
    num_imgs: 5,
    old_price: "$20.00",
    price: "$10.00",
    description: "An iconic design that never goes out of style, these staple crews are perfect for the distinguished Piedmont Hills High School student. These timeless crews are available in sand and gray!",
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
        "quant": 0
      },
      {
        "type": "L",
        "quant": 0
      },
      {
        "type": "XL",
        "quant": 3
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
    old_price: "$10.00",
    description: "For warmer occasions, wear our timeless college logo on a breathable short sleeve available in a maroon on white colorway!",
    featured: true,
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
        "quant": 8
      },
      {
        "type": "L",
        "quant": 3
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
    name: "PHHS College Hoodie",
    img_prefix: "collegeHoodie_",
    img_suffix: "jpg",
    num_imgs: 5,
    old_price: "$25.00",
    price: "$10.00",
    description: "With two available colorways (gray and white), our iconic design is also represented on a cozy hoodie! Great for winter time!",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 0
      },
      {
        "type": "S",
        "quant": 2
      },
      {
        "type": "M",
        "quant": 2
      },
      {
        "type": "L",
        "quant": 0
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
  {
    id: uuidv4(),
    name: "PHHS College Long Sleeve Tee",
    img_prefix: "collegeLongSleeve_",
    img_suffix: "jpg",
    num_imgs: 5,
    old_price: "$15.00",
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
        "quant": 10
      },
      {
        "type": "M",
        "quant": 8
      },
      {
        "type": "L",
        "quant": 3
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
    name: "PHHS Sweats",
    img_prefix: "sweats_",
    img_suffix: "jpg",
    num_imgs: 3,
    old_price: "$25.00",
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
        "quant": 3  
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  }
];

export default dataSlider;