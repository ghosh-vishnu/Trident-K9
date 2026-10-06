# Trident K9 Training Center - One-Page Website Sample

A responsive, one-page website for **Trident K9 Training Center**, built with React, Vite, Tailwind CSS, and Lucide React icons.

Designed with a premium dark charcoal aesthetic, metallic gold accents, crisp typography, and visual dog photography.

---

## 🚀 Key Features & Included Sections

1. **Header & Navigation**: Sticky header with logo placeholder, quick contact utility bar, smooth section scrolling, mobile drawer menu, and "Enquire Now" CTA button.
2. **Hero Section**: Large dog visual backdrop, high-impact headline (*“Expert Dog Training & K9 Security Services”*), supporting copy, dual CTA buttons, and quick operational stats.
3. **About Section**: Core training principles, tactical discipline, and structured 4-step K9 development pathway.
4. **Training Services Cards**:
   - Puppy training & basic obedience
   - Advanced off-leash obedience
   - Dog obedience demonstrations
5. **K9 Security Services Cards**:
   - Dog squads for security
   - Plant guarding & industrial premises security
   - Perimeter patrolling
   - Tactical scent & area tracking
6. **Featured Breeds Showcase**:
   - German Shepherd
   - Doberman
   - Rottweiler
   - Belgian Shepherd (Malinois)
   - Labrador
   - *Includes interactive breed profile lightbox modal.*
7. **Training & Action Gallery**: Filterable photo gallery (All, Obedience, Security, Breeds) with image Lightbox viewer (zoom, prev/next, keyboard controls).
8. **Contact Section**:
   - Direct Phone & WhatsApp trigger buttons (auto-disabled if contact info is unconfigured in `businessConfig.js`).
   - Accessible inquiry form with real-time validation for name, phone, email format, service dropdown, and message.
   - **Backend Notice**: Explicit amber banner informing users that the form is in demo mode and requires backend API/CRM integration.
   - Frequently Asked Questions (FAQ) accordion.
9. **Footer**: Quick navigation, client services breakdown, configuration notice, and copyright details.

---

## 📁 Project Structure

```
sample_web/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── config/
    │   └── businessConfig.js   <-- EDIT BUSINESS DETAILS & PHONE/WHATSAPP HERE
    ├── data/
    │   └── k9Data.js           <-- EDIT SERVICES, BREEDS & GALLERY IMAGES HERE
    └── components/
        ├── Header.jsx
        ├── Hero.jsx
        ├── AboutSection.jsx
        ├── TrainingServicesSection.jsx
        ├── SecurityServicesSection.jsx
        ├── BreedShowcase.jsx
        ├── GallerySection.jsx
        ├── LightboxModal.jsx
        ├── ContactSection.jsx
        └── Footer.jsx
```

---

## ⚙️ Configuration & Customization Guide

### 1. Modifying Business Name & Contact Info
Open `src/config/businessConfig.js` to change:
- `BUSINESS_CONFIG.name` (Default: *"Trident K9 Training Center"*)
- `BUSINESS_CONFIG.phone` (e.g., `"+91 98765 43210"`)
- `BUSINESS_CONFIG.whatsappRaw` (e.g., `"917292992274"`)
- `BUSINESS_CONFIG.address`
- `BUSINESS_CONFIG.email`

> **Note**: Setting `phone` or `whatsappRaw` to `""` will automatically disable the call/WhatsApp buttons and show a clean *"Unconfigured"* status indicator.

### 2. Updating Client Images & Copy
All services, featured breeds, and gallery items are stored in `src/data/k9Data.js`.
To replace demo photos with client photos:
1. Place client image files in `public/images/`
2. Update the image paths in `src/data/k9Data.js` (e.g. `image: "/images/client_gsd.jpg"`).

---

## 🛠️ Installation & Run Commands

### Prerequisites
- Node.js 18+ and npm installed

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server (with hot reload)
```bash
npm run dev
```
The dev server will launch locally at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
This generates optimized static files in the `dist/` directory, ready to deploy to Vercel, Netlify, or traditional web servers.

### 4. Preview Production Build Locally
```bash
npm run preview
```
