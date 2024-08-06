const products = [
  {
    _id: '61c355337f19aa31349af415',
    price: 140,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.195Z',
    description:
      'Noodles are a type of food made from unleavened dough which is rolled flat and cut, stretched or extruded, into long strips or strings. ... Noodles are usually cooked in boiling water, sometimes with cooking oil or salt added. They are also often pan-fried or deep-fried.',
    image: 'https://i.postimg.cc/5jcqP7Jv/Doodles-Stick-Noodles-180-Gm.jpgg',
    originalPrice: 155,
    quantity: 100,
    slug: 'doodles-noodles',
    title: 'Doodles Noodles',
    type: 'Grocery',
    unit: '180g',
    updatedAt: '2021-12-22T16:41:23.195Z',
  },
  
  {
    _id: '61c355337f19aa31349af407',
    price: 115,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.194Z',
    description:
      'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. Skin care is a part of the treatment of wound healing, radiation therapy and some medications.',
    image:
      'https://i.ibb.co/WvcHzmk/Best-Choice-Absorbing-Moisturizing-Soap-7-5-oz.jpg',
    originalPrice: 135,
    quantity: 100,
    slug: 'best-choice-soap',
    title: 'Best Choice Soap',
    type: 'Health Care',
    unit: '5fl oz',
    updatedAt: '2021-12-22T16:41:23.194Z',
  },
  {
    _id: '61c355337f19aa31349af406',
    price: 80,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.192Z',
    description:
      'Skin care is the range of practices that support skin integrity, enhance its appearance and relieve skin conditions. Skin care is a part of the treatment of wound healing, radiation therapy and some medications.',
    image:
      'https://i.ibb.co/jzRftZC/Banana-Boat-for-Men-Triple-Defense-SPF-30-Sunscreen-Lotion-2fl-oz.jpg',
    originalPrice: 100,
    quantity: 100,
    slug: 'banana-boat-lotion',
    title: 'Banana Boat Lotion',
    type: 'Health Care',
    unit: '2fl oz',
    updatedAt: '2021-12-22T16:41:23.192Z',
  },
 
  
  
  {
    _id: '61c355337f19aa31349af3f4',
    price: 90,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.190Z',
    description:
      'A cosmetic product shall mean any substance or mixture intended to be placed in contact with the various external parts of the human body (epidermis, hair system, nails, lips and external genital organs) or with the teeth and the mucous membranes of the oral cavity with a view exclusively or mainly to cleaning them',
    image:
      'https://i.ibb.co/KLTKrnX/Essie-Midnight-Cami-Nail-Color-0-46-fl-oz.jpg',
    originalPrice: 100,
    quantity: 100,
    slug: 'essie-bnil-color',
    title: 'Essie Nail Color',
    type: 'Health Care',
    unit: '46fl oz',
    updatedAt: '2021-12-22T16:41:23.190Z',
  },
  
  {
    _id: '61c355337f19aa31349af3ee',
    price: 100,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.190Z',
    description:
      'Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.',
    image:
      'https://i.ibb.co/J7cB7YY/Care-One-Moisturizing-Body-Wash-Cucumber-Melon-12-fl-o.jpg',
    originalPrice: 150,
    quantity: 100,
    slug: 'cucumber-melon',
    title: 'Cucumber Melon',
    type: 'Health Care',
    unit: '12fl oz',
    updatedAt: '2021-12-22T16:41:23.190Z',
  },
  {
    _id: '61c355337f19aa31349af3ed',
    price: 150,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.189Z',
    description:
      'Body care means how you perform with passive range of motion, applications of dressings and ointments or lotions to the body, and pedicure to trim toenails and apply lotion to feet.',
    image:
      'https://i.ibb.co/3NqJ10Q/Avalon-Organics-Bath-Shower-Gel-Gluten-Free-Cucumber-12-oz.jpg',
    originalPrice: 170,
    quantity: 100,
    slug: 'avalon-organics-gel',
    title: 'Avalon Organics Gel',
    type: 'Health Care',
    unit: '12oz',
    updatedAt: '2021-12-22T16:41:23.189Z',
  },

  {
    _id: '61c355337f19aa31349af3ec',
    price: 125,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.189Z',
    description:
      'bathroom accessories are items specifically designed for use in a bathroom, such as soap dishes, towel racks, etc. bathroom accessories accessories typically have durable, decorative finishes.',
    image: 'https://i.ibb.co/XL8Dmw5/Savlon-Fresh-Antiseptic-Soap-100-Gm.jpg',
    originalPrice: 155,
    quantity: 100,
    slug: 'savlon-soap',
    title: 'Savlon Soap',
    type: 'Health Care',
    unit: '100gm',
    updatedAt: '2021-12-22T16:41:23.189Z',
  },
  
  {
    _id: '61c355337f19aa31349af3e6',
    price: 751,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.188Z',
    description:
      "Baby foods are either a soft, liquid paste or an easily chewed food since babies lack developed muscles and teeth to effectively chew. Babies typically move to consuming baby food once nursing or formula is not sufficient for the child's appetite. Babies do not need to have teeth to transition to eating solid foods.",
    image:
      'https://i.ibb.co/yYsskBN/Cerelac-Wheat-Apple-Cornflakes-400-Gm-BIB.jpg',
    originalPrice: 190,
    quantity: 100,
    slug: 'cerelac-cornflakes',
    title: 'Cerelac Cornflakes',
    type: 'Health Care',
    unit: '400gm',
    updatedAt: '2021-12-22T16:41:23.188Z',
  },
 
  {
    _id: '61c355337f19aa31349af3e4',
    price: 149,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.188Z',
    description:
      "Baby foods are either a soft, liquid paste or an easily chewed food since babies lack developed muscles and teeth to effectively chew. Babies typically move to consuming baby food once nursing or formula is not sufficient for the child's appetite. Babies do not need to have teeth to transition to eating solid foods.",
    image: 'https://i.ibb.co/YddcNxc/Biomil-1-MINI-Tin-200-Gm.jpg',
    originalPrice: 160,
    quantity: 100,
    slug: 'biomil-1',
    title: 'Biomil-1',
    type: 'Health Care',
    unit: '200gm',
    updatedAt: '2021-12-22T16:41:23.188Z',
  },
  
 
  {
    _id: '61c355337f19aa31349af3e1',
    price: 99,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.188Z',
    description:
      'Baby Products are products intended to be used on infants and children under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.',
    image:
      'https://i.ibb.co/4Pfnj7x/Huggies-Diaper-Dry-S-Up-To-7-Kg-36-Pcs.jpg',
    originalPrice: 100,
    quantity: 100,
    slug: 'huggies-diaper',
    title: 'Huggies Diaper',
    type: 'Health Care',
    unit: '36pcs',
    updatedAt: '2021-12-22T16:41:23.188Z',
  },
  {
    _id: '61c355337f19aa31349af3e0',
    price: 120,
    discount: 0,
    flashSale: false,
    status: 'Show',
    createdAt: '2021-12-22T16:41:23.187Z',
    description:
      'Baby Products are products intended to be used on infants and children under the age of three. Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.',
    image: 'https://i.ibb.co/9g7vDQJ/Himalaya-Baby-Powder-100g.jpg',
    originalPrice: 150,
    quantity: 100,
    slug: 'himalaya-powder',
    title: 'Himalaya Powder',
    type: 'Health Care',
    unit: '100g',
    updatedAt: '2021-12-22T16:41:23.187Z',
  },
  
];

const productData = products.sort((a, b) => -1);
export default productData;
