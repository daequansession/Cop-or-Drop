const sneakers = [
  {
    brand: "Nike",
    model: "Air Jordan 12 Retro",
    colorway: "Black/Varsity Red-White",
    release_year: 1997,
    image_url:
      "https://t0.gstatic.com/images?q=tbn:ANd9GcSm9k8dCsLc3eCL8PRo-a_Elalt04OVnHA-TOeyYbjFgFKArkKYm55N91wZP5VeFJdPp907AF5A",
    retail_price: 135,
    purchase_link:
      "https://www.goat.com/sneakers/air-jordan-12-retro-flu-game-2025-ct8013-002",
    description:
      "The name comes from Michael Jordan's playoff performance in the 1997 NBA Finals while he allegedly played while having the flu.",
  },
  {
    brand: "Nike",
    model: "Air Jordan 1 High",
    colorway: "Black/Varsity Red-White",
    release_year: 1985,
    image_url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHhEayTWeY3l7v2t7SzuVqhcJ2iAszS8v0pw&s",
    retail_price: 65,
    purchase_link: "https://www.goat.com/sneakers/air-jordan-1-high-1985-4280",
    description:
      "An iconic black and red colorway known as the 'Banned' colorway because the NBA banned Michael Jordan from wearing them due to uniform violations.",
  },
  {
    brand: "Nike",
    model: "Air Jordan 12 Retro",
    colorway: "Gamma-Blue / Gym-Red / Black",
    release_year: 2013,
    image_url:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/3_c60861f3-2dfb-4fa9-9669-dd42d26e241d.jpg?v=1696328820",
    retail_price: 170,
    purchase_link:
      "https://www.flightclub.com/air-jordan-12-retro-black-gym-red-gamma-blue-011850?srsltid=AfmBOoo-HQa1Cal5Sh4auFjf2h524C5BCOeFdSaPOfG5l7-1J8U2Ztsz",
    description: "A sleek black upper with blue and red accents.",
  },
  {
    brand: "Nike",
    model: "Air Yeezy 2",
    colorway: "Red October",
    release_year: 2014,
    image_url:
      "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/078/080/264/original/12130_01.jpg.jpeg?action=crop&width=750",
    retail_price: 245,
    purchase_link:
      "https://www.goat.com/sneakers/air-yeezy-2-red-october-555088-600",
    description:
      "The Red October is a part of the Air Yeezy line designed by Kanye West in collaboration with Nike. A highly sought-after limited release.",
  },
  {
    brand: "Nike",
    model: "Air Max 97 OG Silver Bullet",
    colorway: "Metallic Silver / Varsity Red / Black",
    release_year: 1997,
    image_url:
      "https://www.nicekicks.com/files/2017/01/Nike-Air-Max-97-Silver-Bullet-.jpg",
    retail_price: 150,
    purchase_link: "https://www.nike.com/t/air-max-97-silver-bullet-dm0028-002",
    description:
      "Inspired by Japanese bullet trains; the AM97 was first to feature a full-length visible Air unit. Its Silver Bullet colorway is one of the most iconic in the Air Max line.",
  },
  {
    brand: "Adidas",
    model: "Superstar",
    colorway: "White / Black",
    release_year: 1970,
    image_url:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/b7e1026dbe8248fbbc31ae02002e1a62_9366/Superstar_ADV_Shoes_White_GW6930_01_00_standard.jpg",
    retail_price: 85,
    purchase_link: "https://www.adidas.com/us/superstar-shoes",
    description:
      "The Adidas Superstar debuted in 1970 as a low-top basketball shoe with a rubber shell toe. It became a streetwear & hip-hop staple especially after Run-DMC popularized it.",
  },
  {
    brand: "Nike",
    model: "Dunk Low Retro White Black (Panda)",
    colorway: "White / Black",
    release_year: 2021,
    image_url:
      "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/NIKE+DUNK+LOW+RETRO.png",
    retail_price: 115,
    purchase_link: "https://stockx.com/nike-dunk-low-retro-white-black-2021",
    description:
      "The classic Black/White Panda colorway of the Nike Dunk Low; part of the lineage since the Dunk's first release in 1985.",
  },
  {
    brand: "New Balance",
    model: "550 Low Top",
    colorway: "White / Navy / Red",
    release_year: 1989,
    image_url:
      "https://www.sneakertownmia.com/cdn/shop/files/DSC06642.jpg?v=1719954100&width=2445",
    retail_price: 45,
    purchase_link:
      "https://www.newbalance.com/pd/bb550/BB550V1-36485-PMG-NA.html",
    description:
      "Originally a modest basketball shoe released in 1989, the NB 550 gained cult status through retros and collaborations. Retailed for about $45 initially.",
  },
  {
    brand: "Nike",
    model: "Dunk Low SE Panda (40th Anniversary)",
    colorway: "White / Black",
    release_year: 2025,
    image_url:
      "https://www.sneakertownmia.com/cdn/shop/files/DSC06642.jpg?v=1719954100&width=2445",
    retail_price: 125,
    purchase_link: "https://www.nike.com/t/nike-dunk-low-se-panda-hq1965-100",
    description:
      "Part of Nike's 40th Anniversary for the Dunk line; this 'Panda' SE uses classic color blocking with some new details like a panda graphic behind the tongue and updated overlays.",
  },
  {
    brand: "Nike",
    model: "Dunk Low Panda Viotech",
    colorway: "Viotech / Pale Ivory / Veneer",
    release_year: 2025,
    image_url:
      "https://www.sneakerfiles.com/wp-content/uploads/2025/07/nike-dunk-low-panda-monium-viotech-IB2990-500-1024x725.jpg",
    retail_price: 125,
    purchase_link:
      "https://www.nike.com/t/nike-dunk-low-panda-viotech-ib2990-500",
    description:
      "A fuzzy suede Dunk Low from the Panda series; colors drawn from the 'Viotech' palette; part of the Panda-monium pack.",
  },
  {
    brand: "Nike",
    model: "Air Max 95 Yu-Gi-Oh Joey",
    colorway: "Psychic Blue / Mystic Navy / Stone Blue / Volt",
    release_year: 2025,
    image_url:
      "https://media.about.nike.com/img/bba5af16-d70e-4582-8c5a-2f6d9232a868/nike-air-max-95-qs-ygo-joey.jpeg?m=eyJlZGl0cyI6eyJqcGVnIjp7InF1YWxpdHkiOjEwMH0sIndlYnAiOnsicXVhbGl0eSI6MTAwfSwiZXh0cmFjdCI6eyJsZWZ0IjowLCJ0b3AiOjMxMSwid2lkdGgiOjEwODAsImhlaWdodCI6NzIzfSwicmVzaXplIjp7IndpZHRoIjozODQwfX19&s=0b2eca449a2a383f60e3790fafc4ae6f980b2b24e899ee4849e8353549c9db0c",
    retail_price: 210,
    purchase_link: "https://www.nike.com/launch/t/nike-air-max-95-qs-ygo-joey",
    description:
      "Part of the Yu-Gi-Oh!  Nike collaboration. The 'Joey' colorway is globally released Sept 12, 2025. Inspired by the anime's 'Air Muscle' sneaker.",
  },
  {
    brand: "Nike",
    model: "Air Max 95 Yu-Gi-Oh Jonouchi",
    colorway: "White / Wolf Grey / Dark Smoke Grey / Cool Grey",
    release_year: 2025,
    image_url:
      "https://statics.whentocop.fr/drops/13486/picture_360/tmp534644_A-Ma-Maniere-x-Nike-Air-Max-95_EVERY-SUMMER-TELLS-A-STORY_FZ8743-201_img33-2000x2000.webp",
    retail_price: 210,
    purchase_link:
      "https://snkrdunk.com/en/sneakers/II7404-400?srsltid=AfmBOoqCuJzlKcE87Pe5qvlYhV5o-RDhH4vC3TA4YLImmsRrG5w4RS8Geto",
    description:
      "The Japan-exclusive colorway of the Yu-Gi-Oh! x Nike pack. Released same time as 'Joey' but in grayscale tone inspired by character Jonouchi.",
  },
  {
    brand: "Nike / Jordan Brand",
    model: "Air Jordan 3 Retro Green Glow",
    colorway: "Black / Green Glow / Wolf Grey / White",
    release_year: 2024,
    image_url: "https://i.ebayimg.com/images/g/4BQAAOSwbh9l4lL9/s-l1200.jpg",
    retail_price: 200,
    purchase_link: "https://www.nike.com/launch/t/air-jordan-3-green-glow",
    description:
      "A revived colorway of AJ3, replacing the classic Fire Red with neon-green 'Glow' accents. Released March 16, 2024.",
  },
  {
    brand: "Nike",
    model: "A Ma Maniére x Air Max 95 Every Summer Tells a Story",
    colorway: "Taupe / Earth Tones / Violet / Clay / Gray",
    release_year: 2025,
    image_url:
      "https://statics.whentocop.fr/drops/13486/picture_360/tmp534644_A-Ma-Maniere-x-Nike-Air-Max-95_EVERY-SUMMER-TELLS-A-STORY_FZ8743-201_img33-2000x2000.webp",
    retail_price: 200,
    purchase_link: "https://www.nike.com/launch/t/ma-maniere-air-max-95",
    description:
      "Part of the A Ma Maniére 'Every Summer Tells a Story' pack celebrating aesthetics + storytelling. This version of the AM95 blends soft earth tones with violet and clay accents.",
  },
  {
    brand: "Nike",
    model: "Air Max 95 OG Big Bubble Golden Beige Camo",
    colorway: "Golden Beige / Neutral Tones / Camo Accent",
    release_year: 2025,
    image_url: "https://pbs.twimg.com/media/G0fgrCBWgAACjpL.png",
    retail_price: 190,
    purchase_link:
      "https://www.soleretriever.com/releases/nike-air-max-95-og-big-bubble",
    description:
      "OG Big Bubble OG re-release with golden beige camo aesthetic; part of the 95 line's anniversary releases.",
  },
  {
    brand: "Nike",
    model: "Air Force 1 Low Sushi Club",
    colorway: "White / Sushi Club Multicolor Accents",
    release_year: 2025,
    image_url:
      "https://images.stockx.com/images/Nike-Air-Force-1-Low-Beverly-Hills-Sushi-Club.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1677082708",
    retail_price: 140,
    purchase_link:
      "https://www.soleretriever.com/releases/air-force-1-low-sushi-club",
    description:
      "A playful AF1 Low drop with pastel / sushi inspired accent colors. Part of lifestyle drops in late 2025.",
  },
  {
    brand: "Nike",
    model: "Dunk Low Susan Fang",
    colorway: "Susan Fang's Signature Palette - Greens / Neutral",
    release_year: 2025,
    image_url:
      "https://images.stockx.com/images/Nike-Dunk-Low-Susan-Fang-Artist-Collection-Womens.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1756500165",
    retail_price: 170,
    purchase_link:
      "https://www.soleretriever.com/releases/nike-dunk-low-susan-fang",
    description:
      "A Dunk Low collaboration / special design by Susan Fang, part of late-2025 Dunk releases.",
  },
  {
    brand: "New Balance",
    model: "2010 Moonbeam (END Exclusive)",
    colorway: "Moonbeam / Pastel / Reflective Accents",
    release_year: 2025,
    image_url:
      "https://2app.kicksonfire.com/kofapp/upload/events_images/ipad_end-x-new-balance-2010-moonbeam-0.png",
    retail_price: 175,
    purchase_link:
      "https://www.soleretriever.com/releases/new-balance-2010-moonbeam-end-exclusive",
    description:
      "END. exclusive colorway of the NB 2010 line, 'Moonbeam' palette with reflective details; part of fashion / streetwear crossover drops.",
  },
  {
    brand: "Saucony",
    model: "ProGrid Paramount Metagirl Studio",
    colorway: "White / Bright / Pastel Accents",
    release_year: 2025,
    image_url:
      "https://sneakerbardetroit.com/wp-content/uploads/2025/08/metagirl-saucony-paramount-s61021-1-release-date-1068x748.webp",
    retail_price: 220,
    purchase_link:
      "https://www.soleretriever.com/releases/saucony-progrid-paramount-metagirl-studio",
    description:
      "Saucony's ProGrid Paramount gets a Studio / Metagirl styling with pastel bright accents; high retail among lifestyle / performance hybrids.",
  },
  {
    brand: "Under Armour",
    model: "Curry Fox 2 Lexington",
    colorway: "Lexington / Navy / Cream",
    release_year: 2025,
    image_url:
      "https://images2.minutemediacdn.com/image/upload/c_crop,w_1266,h_712,x_0,y_138/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/kicks/01k4tcxxsmfaehawcvta.jpg",
    retail_price: 120,
    purchase_link:
      "https://www.soleretriever.com/releases/under-armour-curry-fox-2-lexington",
    description:
      "Under Armour's Curry line with the Fox 2 silhouette; 'Lexington' colorway mixes heritage navy & cream – part of the late-2025 performance / lifestyle releases.",
  },
  {
    brand: "Puma",
    model: "Fast-R Nitro Elite 3 Heat Fire Sun Stream",
    colorway: "Hot Orange / Fire / Sun Stream / Gradient Accents",
    release_year: 2025,
    image_url:
      "https://images.stockx.com/images/Puma-Fast-R-Nitro-Elite-3-Heat-Fire-Sun-Stream.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1757365939",
    retail_price: 300,
    purchase_link:
      "https://www.soleretriever.com/releases/puma-fast-r-nitro-elite-3-heat-fire-sun-stream",
    description:
      "One of Puma's higher-end Nitro performance silhouettes; bold 'Heat Fire Sun' gradient color palette for summer / fall 2025.",
  },
];

module.exports = sneakers;
