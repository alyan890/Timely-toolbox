# The Timely Toolbox LLC — Website

Website for The Timely Toolbox LLC, an appointment-based automotive repair and
specialty services business in Maricopa, Arizona.

Built with Next.js, TypeScript and Tailwind CSS. Hosted on Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run type-check
```

## Where things live

| What | Where |
| --- | --- |
| Business details (phone, email, hours, pricing, service areas) | `data/business.ts` |
| Services, specialty services, fleet | `data/services.ts` |
| Service page text | `data/serviceDetails.ts` |
| Navigation | `data/navigation.ts` |
| Pages | `app/` |
| Homepage sections | `components/sections/` |
| Shared UI pieces | `components/ui/` |
| Images | `public/images/` |

## Docs

- `docs/LAUNCH.md` — launch checklist (Vercel, GoDaddy DNS, content to confirm)
- `docs/appointment-form-setup.md` — free appointment form setup (Google Apps Script)
