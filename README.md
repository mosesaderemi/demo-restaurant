# Demo Restaurant Website

A responsive, single-page website template for a restaurant, built with Next.js and Tailwind CSS. All business content lives in one configuration file, so the same code base can be rebranded for a new client by editing text, prices and images rather than components.

## Sections

Navigation bar, hero, welcome introduction, scrolling marquee, signature dishes, full menu by category with prices in naira, about, the dining experience, photo gallery with lightbox, testimonials, table reservation form, private events enquiry form, contact details, closing call to action, footer and a back-to-top button.

## Features

- Content-driven design: restaurant name, tagline, hero copy, dishes, menu, testimonials, gallery and contact details are all read from `src/lib/site.ts`
- Reservation and events forms with client-side validation (required fields, phone format, dates that have not passed) and a confirmation state
- Scroll-reveal animations and an image lightbox
- Search engine basics: generated `robots.txt`, `sitemap.xml` and an SVG icon
- Fully responsive layout

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 (App Router), React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Tooling | ESLint |

## Project Structure

```text
src
├── app
│   ├── page.tsx           Page composition
│   ├── layout.tsx         Fonts and metadata
│   ├── globals.css        Theme colours
│   ├── robots.ts, sitemap.ts, icon.svg
├── components             Hero, MenuSection, Gallery, ReservationSection, EventsSection ...
└── lib/site.ts            All site content and settings
```

## Getting Started

```bash
git clone https://github.com/mosesaderemi/demo-restaurant.git
cd demo-restaurant
npm install
npm run dev
```

Open `http://localhost:3000`. Build for production with `npm run build` and `npm start`.

## Customising for a Client

1. Edit `src/lib/site.ts` for the name, copy, menu, prices, testimonials, gallery and contact information.
2. Adjust the colour theme in `src/app/globals.css` and the fonts in `src/app/layout.tsx`.
3. Replace the sample photographs, which are loaded from Unsplash, with the client's own images.

## Notes

The reservation and events forms validate input and show a confirmation message but do not send data anywhere yet. To receive enquiries, connect them to an email service, a form backend or an API route.

## Author

Aderemi Moses Timileyin
GitHub: [@mosesaderemi](https://github.com/mosesaderemi)
LinkedIn: [linkedin.com/in/mosesaderemi-6a70a5405](https://www.linkedin.com/in/mosesaderemi-6a70a5405)

## License

Released under the MIT License. See the `LICENSE` file for details.
