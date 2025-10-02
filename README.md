# KIOSK-Invoice-lookup

This is a static kiosk app for the City Payment Center.  
It runs on HTML/JS with Tailwind CSS. Hosted on Netlify @ https://cpcviolationlookup.netlify.app/ 

---

## What it does
- **Home screen (`index.html`)**: 4 tiles
  - **Taxes** → goes to the tax lookup form
  - **School Bus Violations** 
  - **Parking Tickets** → links to city ticket search
  - **Health & Sanitation** → links to sanitation search
- **Tax form (`form.html`)**
  - Enter **account number** + select **year**
  - Suggestion dropdown from `/CSV/Data.csv` (via PapaParse)
  - Opens the official tax statement page inside a modal
  - Toggleable on-screen keyboard for kiosk input

---
