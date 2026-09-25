# Grand Horizon Hotel & Resort

A complete, modern, professional, and fully responsive luxury hotel & resort web application built from scratch with React 19, Vite, Tailwind CSS v4, React Router DOM, Framer Motion, and Lucide Icons.

---

## 🌟 Overview

**Grand Horizon Hotel & Resort** is an original commercial-grade digital hospitality platform designed to represent a prestigious five-star waterfront retreat in Chennai, Tamil Nadu, India. The application features authentic luxury hospitality content, dynamic room filtering, interactive dining menus, special offers, animated statistics, and an end-to-end frontend reservation system with real-time tax and price calculations.

---

## ✨ Major Features

1. **Brand Identity & Aesthetics**:
   - Deep navy, rich warm neutrals, and metallic gold accents.
   - Refined typography pairing Google Fonts (`Playfair Display` for serif titles and `Plus Jakarta Sans` for clean, readable copy).
   - High-resolution luxury hotel photography and custom SVG monogram insignia.

2. **Sticky Responsive Navigation**:
   - Transparent gradient overlay when resting atop the homepage cinematic hero.
   - Transitions smoothly to a solid backdrop-blurred navy bar upon scrolling or on inner pages.
   - Interactive mobile slide-out navigation drawer with spring animations.

3. **Homepage Highlights**:
   - Cinematic hero section with dark gradient overlay, gold badges, and quick CTA buttons.
   - Floating availability search bar with check-in, check-out, guests, and room category selection.
   - Editorial resort introduction with legacy milestones and awards.
   - Featured luxury accommodations showcase with instant reservation links.
   - Why Discerning Guests Choose Us: 6 feature cards with Lucide icons.
   - Animated statistics powered by Framer Motion.
   - Guest testimonials and immersive resort lifestyle experiences.
   - High-impact call to action banner.

4. **Accommodations & Dynamic Details**:
   - Complete directory of 8 sample rooms and suites with Indian Rupee (₹) pricing.
   - Multi-criteria filtering: Room category, price bracket, guest count, and bed type.
   - Instant search by room title or description keyword.
   - Dynamic route (`/rooms/:id`) featuring an interactive multi-image thumbnail gallery, specifications bar, room amenities, complimentary privileges, house rules, and related accommodations.

5. **Dining & Mixology**:
   - 7 dining options: Signature fine dining, rooftop grill & jazz lounge, royal heritage Indian, poolside cafe, French patisserie, amber lounge bar, and 24-hour in-room dining.
   - Interactive category filtering.
   - Interactive "View Menu" modal with chef-curated dishes and pricing.

6. **Resort Facilities**:
   - 14 facilities: Heated infinity pool, Ayurvedic spa, 24/7 fitness center, conference center, royal banquet ballroom, executive business lounge, kids club, airport chauffeur fleet, and more.
   - Real-time search and category filtering.

7. **Special Offers & Packages**:
   - 7 curated vacation packages (Weekend Escape, Romantic Retreat, Family Discovery, Corporate Pass, Honeymoon Sanctuary, Long Stay, Early Bird).
   - Filterable categories with promotional codes that pass seamlessly into the booking flow.

8. **Frontend Booking System**:
   - Multi-field reservation form: Guest name, email, phone number, room type, check-in date, check-out date, number of guests, number of rooms, and special requests.
   - Synchronizes with URL query parameters (`roomId`, `checkIn`, `checkOut`, `guests`, `rooms`, `offer`).
   - Client-side validation: Required fields, email regex, phone verification, and check-in/check-out date sequencing.
   - Real-time price calculation: Night calculation, base subtotal, hospitality GST (12%), luxury service charge (5%), and estimated grand total.
   - Professional booking confirmation modal with unique reference code (`GH-XXXXXX`), downloadable summary, and printable receipt.

9. **Contact & Concierge**:
   - Hotel address, phone numbers, email, operating hours, and social media channels.
   - Interactive inquiry form with input validation and instant confirmation feedback.
   - Google Maps-style interactive location embed.
   - Expandable FAQ accordion.

10. **Performance & Architecture**:
    - Route-level code splitting using `React.lazy` and `Suspense`.
    - Production bundle size under 420 kB.
    - Zero horizontal overflow, accessible semantic markup, and responsive across mobile, tablet, and widescreen desktops.

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **JavaScript (ES Modules)**
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router DOM v7**
- **Framer Motion**
- **Lucide React**

---

## 📂 Project Folder Structure

```text
hotel-website/
│
├── public/
│   ├── icons/
│   │   └── logo-icon.svg             # Stylized Grand Horizon luxury emblem
│   └── images/                       # Public image assets and fallbacks
│
├── src/
│   ├── assets/                       # Local visual assets
│   │
│   ├── components/                   # Reusable UI components
│   │   ├── Navbar.jsx                # Sticky responsive header with mobile drawer
│   │   ├── Footer.jsx                # Multi-column footer with newsletter & brand info
│   │   ├── Hero.jsx                  # Cinematic hero with CTA and availability search
│   │   ├── BookingBanner.jsx         # Availability search bar component
│   │   ├── RoomCard.jsx              # Luxury room card with pricing & specs
│   │   ├── FacilityCard.jsx          # Facility card with icons and operating hours
│   │   ├── RestaurantCard.jsx        # Dining card with cuisine and "View Menu" trigger
│   │   ├── AmenityCard.jsx           # Individual amenity badge card
│   │   ├── BookingForm.jsx           # Interactive booking form with live pricing & confirmation
│   │   ├── ContactForm.jsx           # Contact & inquiry form with validation
│   │   ├── SectionTitle.jsx          # Uniform luxury section heading with animations
│   │   ├── DynamicIcon.jsx           # Optimized Lucide icon resolver
│   │   └── SocialIcons.jsx           # Clean SVG social media brand icons
│   │
│   ├── pages/                        # Route pages
│   │   ├── Home.jsx                  # Homepage with complete 11-section layout
│   │   ├── About.jsx                 # Heritage story, vision, mission, and values
│   │   ├── Rooms.jsx                 # Filterable accommodations directory
│   │   ├── RoomDetails.jsx           # Dynamic room detail page with gallery & specs
│   │   ├── Dining.jsx                # Restaurants, lounges, and menu previews
│   │   ├── Facilities.jsx            # Resort facilities and leisure directory
│   │   ├── Offers.jsx                # Special promotional retreat packages
│   │   ├── Booking.jsx               # Online reservation page
│   │   ├── Contact.jsx               # Contact details, map embed, and FAQs
│   │   └── NotFound.jsx              # Custom 404 error page
│   │
│   ├── data/                         # Realistic data modules
│   │   ├── rooms.js                  # 8 luxury rooms and suites dataset
│   │   ├── facilities.js             # 14 resort facilities dataset
│   │   ├── restaurants.js            # 7 dining options and menus dataset
│   │   ├── offers.js                 # 7 curated promotional packages dataset
│   │   └── hotelInfo.js              # Hotel brand info, contacts, stats, & testimonials
│   │
│   ├── layouts/
│   │   └── MainLayout.jsx            # Shell with auto-scroll restoration, Nav, and Footer
│   │
│   ├── utils/
│   │   └── formatters.js             # Currency (₹), date calculations, & pricing logic
│   │
│   ├── App.jsx                       # Router setup with lazy loading & transitions
│   ├── main.jsx                      # App root entry with BrowserRouter
│   └── index.css                     # Tailwind CSS v4 setup, typography & scrollbars
│
├── index.html                        # HTML5 template with Google Fonts & metadata
├── package.json                      # Project dependencies and npm scripts
├── vite.config.js                    # Vite configuration with React and Tailwind plugins
└── README.md                         # Comprehensive documentation
```

---

## 🚀 Installation & Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your system:

```bash
node -v
npm -v
```

### 2. Install Dependencies
Navigate into the project directory and install the packages:

```bash
cd hotel-website
npm install
```

### 3. Run Development Server
Start the local Vite development server:

```bash
npm run dev
```

Open your browser and navigate to the displayed local URL (typically `http://localhost:5173/`).

### 4. Build for Production
To generate an optimized production bundle:

```bash
npm run build
```

The compiled assets will be written to the `dist/` directory.

### 5. Preview Production Build
To preview the production build locally:

```bash
npm run preview
```

---

## 📖 How Each Major Folder Works

- **`src/components/`**: Houses independent, reusable UI building blocks. For instance, `RoomCard.jsx` is used both in the homepage featured section and the main room catalog; `SectionTitle.jsx` ensures visual rhythm and typography consistency across all sections.
- **`src/pages/`**: Contains page-level views corresponding directly to URL routes configured in `App.jsx`. Each page is wrapped in `React.lazy()` for on-demand bundle delivery.
- **`src/data/`**: Centralized, realistic data files. Separating content from layout logic makes it simple for non-developers to edit hotel menus, room details, amenities, or contact numbers without touching component JSX.
- **`src/layouts/`**: `MainLayout.jsx` wraps every route with the sticky navigation header and luxury footer, and automatically restores window scroll position to the top upon route changes.
- **`src/utils/`**: Helper utilities including `formatPrice()` for Indian Rupee currency representation, `calculateNights()` for calendar day calculations, and `calculateBookingEstimate()` for taxes and totals.

---

## 🔧 Customization & Maintenance Guide

### How to Add a New Room
1. Open `src/data/rooms.js`.
2. Append a new room object to the `rooms` array:
```javascript
{
  id: "garden-villa",
  name: "Garden Villa with Private Pool",
  subtitle: "Secluded Oasis with Heated Plunge Pool",
  image: "https://images.unsplash.com/photo-...",
  gallery: [ /* 3-4 image URLs */ ],
  description: "Detailed description of the villa...",
  shortDescription: "Plunge pool, outdoor rain shower, and butler service.",
  price: 32000,
  size: "110 m²",
  bedType: "King Bed",
  maxGuests: 3,
  rating: 5.0,
  reviewsCount: 24,
  featured: true,
  category: "Suite",
  amenities: [ "Private Plunge Pool", "Outdoor Rain Shower", "Wi-Fi 6" ],
  includedServices: [ "Complimentary Champagne Breakfast", "Butler On-Call" ],
  checkIn: "From 2:00 PM",
  checkOut: "Until 12:00 PM",
  houseRules: [ "Non-smoking inside the villa" ]
}
```
3. The new room will automatically appear in the `/rooms` list, the search & category filters, and the `/booking` room selection dropdown.

---

### How to Add a New Facility
1. Open `src/data/facilities.js`.
2. Add a new item to the `facilities` array:
```javascript
{
  id: "tennis-court",
  name: "Championship Floodlit Tennis Court",
  iconName: "Sparkles", // Lucide icon identifier
  image: "https://images.unsplash.com/photo-...",
  description: "All-weather synthetic turf court with professional racket rental and coaching.",
  category: "Wellness & Recreation",
  hours: "6:00 AM – 9:00 PM",
  features: ["Floodlight Play", "Racket & Ball Rental", "Private Coaching"]
}
```

---

### How to Add a New Restaurant
1. Open `src/data/restaurants.js`.
2. Add a new restaurant object to the `restaurants` array:
```javascript
{
  id: "tea-lounge",
  name: "Nilgiri Herbal Tea Lounge",
  type: "Casual & Al Fresco",
  cuisine: "Single-Estate Teas & Artisanal Pastries",
  image: "https://images.unsplash.com/photo-...",
  description: "An open garden gazebo serving over 40 rare single-estate loose leaf teas.",
  shortDescription: "Organic estate teas, infusions, and warm scones beside the lotus pond.",
  openingHours: "8:00 AM – 7:00 PM",
  location: "Lotus Pond Pavilion",
  dressCode: "Resort Casual",
  reservationRequired: false,
  menu: [
    { name: "Silver Needle White Tea", desc: "First-flush handpicked bud tea from Ooty", price: 550 },
    { name: "Devonshire Cream Scones", desc: "Served with homemade wild berry preserve and clotted cream", price: 420 }
  ]
}
```

---

### How to Add a New Special Offer
1. Open `src/data/offers.js`.
2. Add a new offer to the `offers` array:
```javascript
{
  id: "monsoon-bliss",
  name: "Monsoon Rejuvenation Retreat",
  category: "Weekend",
  badge: "Seasonal Special",
  discount: "Complimentary Spa & High Tea",
  validity: "June through September",
  promoCode: "MONSOON",
  image: "https://images.unsplash.com/photo-...",
  description: "Embrace the coastal rains with warm herbal baths, ayurvedic massages, and high tea.",
  benefits: [
    "Complimentary 60-minute Ayurvedic massage for two",
    "Afternoon high tea served daily",
    "Late check-out until 2:00 PM"
  ]
}
```

---

### How to Change Hotel Name, Contacts, or Brand Information
All master branding and contact details are stored in `src/data/hotelInfo.js`:
- `name`: Hotel name
- `tagline`: Brand slogan
- `address`: Physical address
- `phone`: Front desk line
- `reservationsPhone`: Direct bookings line
- `email`: Reservations email
- `workingHours`: Operational hours
- `stats`: Key animated counters (years, rooms, restaurants, guests)

Updating this single file automatically updates the Navbar, Hero, About page, Contact page, Footer, and receipt confirmations.

---

### How to Replace Images
- To change room, dining, or facility photos: edit the `image` and `gallery` fields in `src/data/rooms.js`, `src/data/restaurants.js`, `src/data/facilities.js`, or `src/data/offers.js`.
- You can use external URLs (Unsplash CDN, Cloudinary, AWS S3) or place local images into the `public/images/` directory and reference them as `/images/your-photo.jpg`.

---

### How to Change Room Prices
1. Open `src/data/rooms.js`.
2. Change the `price` field of any room (e.g. `price: 14500`).
3. The room listing, room details, and the booking price calculator will automatically reflect the updated rate.

---

### How the Booking Calculation Works
The calculation logic resides in `src/utils/formatters.js` inside `calculateBookingEstimate()`:
1. **Nights**: Computed from the difference between `checkOut` and `checkIn` dates using `calculateNights()`.
2. **Base Subtotal**:
   $$\text{Base Subtotal} = \text{Room Price} \times \text{Nights} \times \text{Number of Rooms}$$
3. **Hospitality GST (12%)**:
   $$\text{GST} = \text{Base Subtotal} \times 0.12$$
4. **Luxury Service Charge (5%)**:
   $$\text{Service Charge} = \text{Base Subtotal} \times 0.05$$
5. **Grand Total**:
   $$\text{Grand Total} = \text{Base Subtotal} + \text{GST} + \text{Service Charge}$$

All amounts are formatted in Indian Rupee format (`₹XX,XXX`) via `Intl.NumberFormat('en-IN')`.

---

### How to Deploy the Project

#### Deploying on Vercel
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. Framework preset: **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Click **Deploy**.

#### Deploying on Netlify
1. Connect your repository on [Netlify](https://netlify.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Ensure single-page routing is supported by adding a `public/_redirects` file with `/*  /index.html  200`.

---

## 📄 License & Demonstration Disclaimer
This project is an original commercial frontend demonstration created for **Grand Horizon Hotel & Resort**. All reservations and payments are simulated on the client side; no actual financial transactions are processed.
#   G r a n d - H o r i z o n  
 