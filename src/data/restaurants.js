// Realistic Dining & Restaurant Data for Grand Horizon Hotel & Resort
export const restaurants = [
  {
    id: "the-riverbank-signature",
    name: "The Riverbank Signature",
    type: "Fine Dining",
    cuisine: "Modern Coastal & Contemporary European",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=80",
    description: "Our Michelin-recognized crown jewel, curated by Master Chef Antoine Renaud. Showcases sustainably caught Bay of Bengal seafood married with classical French and Mediterranean culinary techniques. Featuring an impressive glass cellar with over 400 world-class vintage wines.",
    shortDescription: "Michelin-inspired coastal seafood & vintage wine cellar overlooking the serene river.",
    openingHours: "Dinner: 6:30 PM – 11:30 PM (Tue - Sun)",
    location: "River Promenade Wing, Ground Floor",
    dressCode: "Elegant Casual / Formal",
    reservationRequired: true,
    menu: [
      { name: "Seared Diver Scallops", desc: "Truffle cauliflower velouté, caviar pearls, pancetta crisp", price: 1850 },
      { name: "Bay Lobster Thermidor", desc: "Cognac mornay sauce, gruyère gratin, butter-poached asparagus", price: 3400 },
      { name: "Black Angus Tenderloin", desc: "Wagyu reduction, pomme mousseline, forest wild mushrooms", price: 3200 },
      { name: "Valrhona Dark Chocolate Sphere", desc: "Warm salted caramel ganache, gold leaf, vanilla bean gelato", price: 950 }
    ]
  },
  {
    id: "celestial-rooftop",
    name: "Celestial Rooftop Lounge & Grill",
    type: "Rooftop Grill & Lounge",
    cuisine: "Charcoal Robata, Tapas & Signature Mixology",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80",
    description: "Suspended on the 18th floor under an open starry sky, Celestial delivers 360-degree city skylines and ambient chill-out jazz. Savor prime fire-grilled skewers, artisan tapas, and smoked botanical cocktails mixed tableside by master flair bartenders.",
    shortDescription: "18th-floor panoramic starlight terrace with live jazz, robata grill, and craft mixology.",
    openingHours: "5:00 PM – 1:00 AM (Daily)",
    location: "Rooftop Skydeck, 18th Level",
    dressCode: "Smart Casual",
    reservationRequired: true,
    menu: [
      { name: "Smoked Wagyu Beef Skewers", desc: "Yuzu kosho glaze, toasted sesame, spring leeks", price: 1650 },
      { name: "Truffle Burrata Flatbread", desc: "San Marzano sauce, fresh arugula, 24-month aged balsamic", price: 1250 },
      { name: "Charred Tiger Prawns", desc: "Smoked paprika butter, garlic confit, toasted sourdough", price: 1950 },
      { name: "Horizon Sunset Elixir", desc: "Smoked bourbon, passion fruit liqueur, aromatic bitters, rosemary fog", price: 850 }
    ]
  },
  {
    id: "the-veranda-indian",
    name: "The Veranda Heritage Indian",
    type: "Fine Dining",
    cuisine: "Royal Awadhi & Coastal Chettinad",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80",
    description: "An authentic tribute to India’s imperial gastronomy. Experience slow-cooked dum pukht biryanis, silken kakori kebabs, rich Chettinad pepper curries, and handcrafted tandoori breads baked in traditional clay ovens.",
    shortDescription: "Royal dum pukht banquets, charcoal kebabs, and aromatic Chettinad specialties.",
    openingHours: "Lunch: 12:30 PM – 3:30 PM | Dinner: 7:00 PM – 11:30 PM",
    location: "Heritage Courtyard, East Pavilion",
    dressCode: "Smart Casual / Traditional",
    reservationRequired: false,
    menu: [
      { name: "Gosht Dum Biryani", desc: "Tender lamb simmered with saffron basmati in sealed dough pot", price: 1650 },
      { name: "Murgh Malai Peshawari", desc: "Cardamom cream marinated chicken morsels charred over coals", price: 1350 },
      { name: "Paneer Lababdar", desc: "Cottage cheese cubes folded in spiced tomato-cashew velvet gravy", price: 1150 },
      { name: "Shahi Tukda Grand Horizon", desc: "Crisp saffron brioche, rabri mousse, 24k silver leaf, pistachios", price: 650 }
    ]
  },
  {
    id: "azure-poolside",
    name: "Azure Poolside Cafe & Bar",
    type: "Casual & Al Fresco",
    cuisine: "Artisan Wood-Fired Pizzas, Poke & Smoothies",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1000&q=80",
    description: "Bask in the tropical breeze under swaying palms beside our azure infinity pool. Azure provides relaxed al-fresco dining with wood-fired pizzas, healthy acai bowls, fresh sushi rolls, and refreshing coconut infusions.",
    shortDescription: "Sun-drenched al fresco deck featuring wood-fired pizzas and chilled botanical sips.",
    openingHours: "10:00 AM – 8:00 PM (Daily)",
    location: "Poolside Terrace, Ground Level",
    dressCode: "Resort Casual / Swimwear with Coverup",
    reservationRequired: false,
    menu: [
      { name: "Napoli Truffle Mushroom Pizza", desc: "Wild porcini, fresh mozzarella, truffle oil, basil", price: 1200 },
      { name: "Ahi Tuna Poke Bowl", desc: "Avocado, edamame, pickled ginger, black rice, ponzu vinaigrette", price: 1350 },
      { name: "Mediterranean Mezze Platter", desc: "Hummus, babaganoush, stuffed vine leaves, warm pita", price: 1050 },
      { name: "Fresh Chilled Tender Coconut Cooler", desc: "Tender coconut water, mint leaves, lime, lemongrass syrup", price: 450 }
    ]
  },
  {
    id: "the-atelier-bakery",
    name: "The Atelier Patisserie & Cafe",
    type: "Bakery & Cafe",
    cuisine: "Artisanal Viennoiserie, Single-Origin Coffees & High Tea",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80",
    description: "Awaken your senses with the aroma of freshly baked French butter croissants, delicate macarons, custom entremets, and single-origin pour-overs sourced from the Nilgiri hills. Hosts our celebrated Afternoon High Tea daily.",
    shortDescription: "Warm French viennoiserie, bespoke afternoon tea towers, and specialty roasts.",
    openingHours: "7:00 AM – 10:00 PM (Daily)",
    location: "Main Lobby Atrium",
    dressCode: "Casual",
    reservationRequired: false,
    menu: [
      { name: "Grand Horizon High Tea Tower", desc: "Selection of finger sandwiches, warm scones with clotted cream, macarons", price: 2100 },
      { name: "Butter Almond Croissant", desc: "Flaky layered laminations filled with almond frangipane", price: 420 },
      { name: "Pistachio Raspberry Tart", desc: "Pistachio sable, raspberry confit, whipped white chocolate ganache", price: 580 },
      { name: "Nilgiri Estate Pour-Over", desc: "Single-origin high altitude arabica, freshly roasted and brewed tableside", price: 380 }
    ]
  },
  {
    id: "amber-lounge-bar",
    name: "Amber Lounge & Cigar Bar",
    type: "Lounge & Bar",
    cuisine: "Single Malts, Tapas, Rare Cognacs & Cigars",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1000&q=80",
    description: "An intimate, amber-lit sanctuary with leather Chesterfield sofas, a collection of over 120 rare single malts, aged rums, Cuban cigars, and quiet acoustic melodies for private conversations and post-dinner nightcaps.",
    shortDescription: "Leather armchairs, curated single malts, and hand-rolled cigars in quiet luxury.",
    openingHours: "4:00 PM – 1:30 AM (Daily)",
    location: "Mezzanine Level, West Wing",
    dressCode: "Smart Casual",
    reservationRequired: false,
    menu: [
      { name: "Tasting Flight of Rare Malts", desc: "Three 30ml pours of 18, 21, and 25-year aged single malts", price: 3800 },
      { name: "Jamon Iberico Bellota Platter", desc: "Hand-carved cured ham with crystal bread and grated tomato", price: 2600 },
      { name: "Smoked Old Fashioned", desc: "Small-batch rye, demerara sugar, spiced bitters, cherry smoke", price: 950 },
      { name: "Artisanal Cheese Board", desc: "Five imported artisanal cheeses, honeycomb, fig compote, water crackers", price: 1750 }
    ]
  },
  {
    id: "in-room-gourmet",
    name: "24-Hour In-Room Gourmet Dining",
    type: "In-Room Service",
    cuisine: "All-Day International, Indian & Comfort Classics",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80",
    description: "Savor gourmet meals within the private sanctuary of your suite or balcony. From hot Belgian waffles at sunrise to midnight club sandwiches and full candlelit multi-course dinners, delivered with silver-service elegance.",
    shortDescription: "White-linen luxury service delivered straight to your suite anytime, day or night.",
    openingHours: "24 Hours (7 Days a Week)",
    location: "Available in All Rooms & Suites",
    dressCode: "Comfort of Your Room",
    reservationRequired: false,
    menu: [
      { name: "Grand Continental Breakfast", desc: "Bakery basket, organic eggs any style, chicken sausages, juice, coffee", price: 1250 },
      { name: "Classic Wagyu Club Sandwich", desc: "Grilled chicken, fried egg, smoked bacon, cheddar, truffle fries", price: 1100 },
      { name: "Madras Fish Curry & Steamed Rice", desc: "Locally caught red snapper in tangy tamarind coconut curry", price: 1450 },
      { name: "Midnight Chocolate Lava Cake", desc: "Warm molten center, salted vanilla ice cream", price: 650 }
    ]
  }
];
