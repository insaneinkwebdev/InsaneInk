import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    name: "PHHS Compass Tee",
    img_prefix: "MaroonTS_",
    img_suffix: "JPG",
    num_imgs: 2,
    old_price: "$10.00",
    price: "$10.00",
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
    img_suffix: "JPG",
    num_imgs: 4,
    old_price: "$28.00",
    price: "$20.00",
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
    price: "$10.00",
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
    name: "PHHS College Crew",
    img_prefix: "CollegeCrew_",
    img_suffix: "JPG",
    num_imgs: 3,
    old_price: "$20.00",
    description: "Currently availble in Gray",
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
        "quant": 12
      },
      {
        "type": "L",
        "quant": 6
      },
      {
        "type": "XL",
        "quant": 5  
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
    old_price: "$20.00",
    price: "$10.00",
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