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

The five supplied low-resolution PNG files remain stored in `assets/images/`, but they are deliberately not displayed on the website.

When Troy supplies the high-resolution replacements, add them using these filenames:

1. `troy-hero.webp`
2. `troy-session.webp`
3. `troy-how-i-work.webp`
4. `troy-about.webp`
5. `troy-next-step.webp`

Until those replacements are supplied, the website shows styled image placeholders. The future images will appear automatically when added with the filenames above.

## Connect the enquiry form

Set `enquiryEndpoint` in `assets/site.js` to the HTTPS endpoint supplied by the chosen form provider or serverless function. Until then, the form validates normally but does not claim that an enquiry was delivered; it directs visitors to the confirmed email address instead.

Do not connect the form until the Privacy Notice, enquiry-retention period, under-18 process and final service choices have been approved.
