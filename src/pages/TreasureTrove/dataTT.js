import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    //update inventory SOON
    id: uuidv4(),
    name: "Anchor Zip Up",
    price: "$25.00",
    description: "A unique take on school spirit, the splash of blues encompass the oceanic vibes of the Piedmont Hills Pirates! Available in a nice heather gray!",
    images: [
      "/TT/product_1/anchorZip_1.jpg",
      "/TT/product_1/anchorZip_2.jpg",
      "/TT/product_1/anchorZip_3.jpg",
    ],
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
    price: "$20.00",
    description: "Wanna test the waters and “surf” through this school year? Then a hoodie with a surfing pirate is all you need! Come get yours in a bangin’ sand on maroon colorway!",
    images: [
      "/TT/product_2/surfHoodie_1.jpg",
      "/TT/product_2/surfHoodie_2.jpg",
      "/TT/product_2/surfHoodie_3.jpg",
      "/TT/product_2/surfHoodie_4.jpg",
      "/TT/product_2/surfHoodie_5.jpg",
    ],
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
    name: "Piedmont Hills Quarter Zip",
    price: "$28.00",
    description: "Wanna stay cozy while repping PHHS? This quarter zip really puts the Hills in Piedmont Hills! Available in maroon and black.",
    images: [
      "/TT/product_3/quarterZip_1.jpg",
      "/TT/product_3/quarterZip_2.jpg",
      "/TT/product_3/quarterZip_3.jpg",
      "/TT/product_3/quarterZip_4.jpg",
    ],
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
    description: "An iconic design that never goes out of style, these staple crews are perfect for the distinguished Piedmont Hills High School student. These timeless crews are available in sand and gray!",
    images: [
      "/TT/product_4/collegeCrew_1.jpg",
      "/TT/product_4/collegeCrew_2.jpg",
      "/TT/product_4/collegeCrew_3.jpg",
      "/TT/product_4/collegeCrew_4.jpg",
      "/TT/product_4/collegeCrew_5.jpg",
    ],
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
        "quant": 2
      },
      {
        "type": "L",
        "quant": 6
      },
      {
        "type": "XL",
        "quant": 4
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
    price: "$10.00",
    description: "For warmer occasions, wear our timeless college logo on a breathable short sleeve available in a maroon on white colorway!",
    images: [
      "/TT/product_5/collegeShortSleeve_1.jpg",
      "/TT/product_5/collegeShortSleeve_2.jpg",
      "/TT/product_5/collegeShortSleeve_3.jpg",
      "/TT/product_5/collegeShortSleeve_4.jpg",
      "/TT/product_5/collegeShortSleeve_5.jpg",
    ],
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
    price: "$25.00",
    description: "With two available colorways (gray and white), our iconic design is also represented on a cozy hoodie! Great for winter time!",
    images: [
      "/TT/product_6/collegeHoodie_1.jpg",
      "/TT/product_6/collegeHoodie_2.jpg",
      "/TT/product_6/collegeHoodie_3.jpg",
      "/TT/product_6/collegeHoodie_4.jpg",
      "/TT/product_6/collegeHoodie_5.jpg",
    ],
    featured: false,
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
        "quant": 4
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
    price: "$15.00",
    description: "Similar to our short sleeve tee, but now our timeless design is on a long sleeve!",
    images: [
      "/TT/product_7/collegeLongSleeve_1.jpg",
      "/TT/product_7/collegeLongSleeve_2.jpg",
      "/TT/product_7/collegeLongSleeve_3.jpg",
      "/TT/product_7/collegeLongSleeve_4.jpg",
      "/TT/product_7/collegeLongSleeve_5.jpg",
    ],
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
    price: "$15.00",
    description: "Perfect for showing off  ‘em muscles, or just to cool down on a hot day! Our iconic design is also available on a white tank top!",
    images: [
      "/TT/product_8/collegeMensTank_1.jpg",
      "/TT/product_8/collegeMensTank_2.jpg",
      "/TT/product_8/collegeMensTank_3.jpg",
      "/TT/product_8/collegeMensTank_4.jpg",
      "/TT/product_8/collegeMensTank_5.jpg",
    ],
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
    price: "$5.00",
    description: "Just a simple bag for carrying your everyday essentials!",
    images: [
      "/TT/product_9/greenTote_1.jpg",
      "/TT/product_9/greenTote_2.jpg",
      "/TT/product_9/greenTote_3.jpg",
    ],
    featured: true,
    sizes: [
      {
        "type": "M",
        "quant": 16
      }
    ]
  },
  {
    id: uuidv4(),
    name: "PHHS Sweats",
    price: "$25.00",
    description: "The perfect sweats to keep warm this winter, topped with our maroon PH anchor design. Available in gray.",
    images: [
      "/TT/product_10/sweats_1.jpg",
      "/TT/product_10/sweats_2.jpg",
      "/TT/product_10/sweats_3.jpg",
    ],
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
        "quant": 3
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
  }
];

export default dataSlider;