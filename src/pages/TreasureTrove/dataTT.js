import { v4 as uuidv4 } from "uuid";

const dataSlider = [
  {
    id: uuidv4(),
    name: "Test Product Not for Sale  #1",
    price: "$45.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
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
        "quant": 1
      },
      {
        "type": "XL",
        "quant": 8
      },
      {
        "type": "2XL",
        "quant": 0
      }
    ]
  },
  {
    id: uuidv4(),
    name: "Test Product Not for Sale #2",
    price: "$20.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
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
    name: "Test Product Not for Sale #3",
    price: "$35.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 6
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
    name: "Test Product Not for Sale #4",
    price: "$237.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
    featured: true,
    sizes: [
      {
        "type": "XS",
        "quant": 2
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
    name: "Test Product Not for Sale #5",
    price: "$19.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 5
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
    name: "Test Product Not for Sale #6",
    price: "$9.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 4
      },
      {
        "type": "S",
        "quant": 3
      },
      {
        "type": "M",
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
    name: "Test Product Not for Sale #7",
    price: "$9.00",
    description: "Test description for a product, this will probably have some information about the garment, maybe color, material, idk.",
    featured: false,
    sizes: [
      {
        "type": "XS",
        "quant": 4
      },
      {
        "type": "S",
        "quant": 3
      },
      {
        "type": "M",
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