# Troy Shelton website — first build

This is a dependency-free seven-page website. Open `index.html` directly or serve this folder with any static web server.

## Pages

- `index.html` — Home
- `recognise-yourself.html` — Recognise Yourself
- `how-i-work.html` — How I Work
- `working-together.html` — Working Together
- `about.html` — About Troy
- `services.html` — Services
- `contact.html` — Contact and enquiry form

## Add Troy's photographs

Place the six original images in `assets/images/` using these filenames:

1. `troy-hero.webp`
2. `troy-session.webp`
3. `troy-standing.webp`
4. `troy-casual.webp`
5. `troy-seated.webp`
6. `troy-profile.webp`

Until an image is added, the site deliberately shows a styled placeholder. Update each image's alt text once the final crop is known.

## Connect the enquiry form

Set `enquiryEndpoint` in `assets/site.js` to the HTTPS endpoint supplied by the chosen form provider or serverless function. Until then, the form validates normally but does not claim that an enquiry was delivered; it directs visitors to the confirmed email address instead.

Do not connect the form until the Privacy Notice, enquiry-retention period, under-18 process and final service choices have been approved.

