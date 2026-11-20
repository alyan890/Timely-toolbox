# Launch guide — The Timely Toolbox website

Step-by-step checklist to take the site live on **TheTimelyToolbox.com**.

---

## 1. Before launch: confirm content with the owner

These are shown on the site or are needed for it to work fully.

| Item | Where to change it | Status |
| --- | --- | --- |
| Phone number (enables Text / Call buttons everywhere) | `data/business.ts` → `phone` (and `smsPhone` if texts go to another number) | Missing |
| Email for appointment requests | Apps Script (`docs/appointment-form-setup.md`) | Missing |
| Business hours (optional) | `data/business.ts` → `hours` | Missing |
| Social media links (optional) | `data/business.ts` → `social` | Missing |
| Nearby service-area towns (optional) | `data/business.ts` → `serviceAreas` | Only Maricopa |
| ASE certification / dealer training wording | `data/business.ts` → `trustPoints` | Confirm |
| Service page text (signs, what we do) | `data/serviceDetails.ts` | Draft — review |
| Card tags (e.g. "Pads & rotors") | `data/services.ts` → `tags` | Draft — review |
| Fleet page claims (schedules, records) | `app/fleet-services/page.tsx` | Confirm |
| About page story | `app/about/page.tsx` | Draft — review |
| Privacy policy | `app/privacy/page.tsx` | Draft — review |
| www vs. non-www main address | `data/business.ts` → `domain` | Currently `https://www.thetimelytoolbox.com` |

Unconfirmed values are left empty and the related buttons/text stay hidden, so the
site can launch before everything is filled in.

## 2. Hosting on Vercel

> Note: Vercel's free **Hobby** plan is for non-commercial use. A business site should
> use the **Pro** plan (about $20/month per member) under Vercel's terms.

1. Sign in at <https://vercel.com> with the GitHub account that owns the repository.
2. **Add New → Project →** import `alyan890/Timely-toolbox`.
3. Framework preset: **Next.js** (detected automatically). Leave build settings as default.
4. Under **Environment Variables**, add (once the Apps Script is set up):
   - `APPOINTMENT_WEBHOOK_URL`
   - `APPOINTMENT_WEBHOOK_SECRET`
5. Click **Deploy**. You'll get a preview address like `timely-toolbox.vercel.app` — check
   every page there before connecting the domain.

Every later `git push` to the `main` branch redeploys the site automatically.

## 3. Connect the GoDaddy domain

1. In Vercel → the project → **Settings → Domains**, add `thetimelytoolbox.com` and
   `www.thetimelytoolbox.com`. Choose which one is the main address (the other redirects).
2. Vercel shows the exact DNS records to add. In GoDaddy → **My Products → Domain → DNS**:
   - Add the **A record** for `@` that Vercel shows.
   - Add the **CNAME record** for `www` that Vercel shows.
   - Remove any old GoDaddy "parked" / forwarding records for `@` and `www`.
3. Wait for Vercel to show both domains as **Valid** (minutes to a few hours). HTTPS is
   set up automatically.
4. If the main address is not `https://www.thetimelytoolbox.com`, update `domain` in
   `data/business.ts` and push.

## 4. Turn on the appointment form

Follow `docs/appointment-form-setup.md` (free Google Apps Script). Then add the two
environment variables in Vercel and **redeploy**. Send a test request and confirm the
email arrives and a row is added to the Google Sheet.

## 5. Final checks after going live

- [ ] Every page opens on phone and desktop (Home, About, Services + 6 service pages, Fleet, Specialty, Service Areas, Contact, Privacy).
- [ ] Text / Call buttons open the phone's messaging and dialer (after the phone number is added).
- [ ] A test appointment request arrives by email.
- [ ] Browser tab shows the logo icon.
- [ ] Sharing the link in a text/social app shows the hero image preview.

## Later (SEO phase)

Google Search Console (submit `https://www.thetimelytoolbox.com/sitemap.xml`),
Google Business Profile, Google Analytics 4, structured data and performance tuning.
