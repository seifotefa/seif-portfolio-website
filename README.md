# Seif Otefa — Developer Portfolio

This is a personal developer portfolio built with **React**, **Tailwind CSS**, and **Vite**. It showcases my background, skills, experience, selected projects, and includes a contact form.


---

## 🌐 Live Demo

👉 [https://seifotefa.com](https://seifotefa.com)  

---


## 🛠 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Build Tool**: Vite
- **Forms**: Formspree (with error handling and graceful fallback)
- **Icons**: React Icons

---

To Run Locally:

---

## 🚀 Getting Started

1. **Clone the repo**:
   ```bash
   git clone https://github.com/yourusername/portfolio-site.git
   cd portfolio-site
```bash
npm install

npm run dev

npm run build

## Apple Wallet digital business card

The `/links` page includes a protected “Add to Apple Wallet” button. It asks for a private access code before calling the Netlify Function at `/api/apple-wallet`. The pass contains a QR code linking to `https://seifotefa.com/links`.

### Apple Developer setup

Create a Pass Type ID in Apple Developer and create a Pass Type ID certificate for it. Export the certificate and private key as PEM text. You also need Apple’s current Worldwide Developer Relations (WWDR) certificate in PEM format.

Add these Netlify environment variables under **Site configuration → Environment variables**. Use the **Production** scope (and Deploy Previews only if you intentionally want to test there):

- `APPLE_WALLET_ENABLED=true` while downloading the pass; change it to `false` immediately afterward.
- `APPLE_WALLET_ACCESS_TOKEN` — a long, random private code that is not committed to Git.
- `APPLE_PASS_TYPE_IDENTIFIER` — the exact Pass Type ID from Apple Developer.
- `APPLE_TEAM_IDENTIFIER` — your 10-character Apple Developer Team ID.
- `APPLE_WWDR_CERTIFICATE` — the complete WWDR PEM contents.
- `APPLE_SIGNER_CERTIFICATE` — the complete Pass Type ID certificate PEM contents.
- `APPLE_SIGNER_PRIVATE_KEY` — the complete private key PEM contents.
- `APPLE_SIGNER_KEY_PASSPHRASE` — optional; set it only if the private key is encrypted.

Paste PEM values into Netlify exactly, including the `BEGIN`/`END` lines. Do not commit certificates, private keys, or the access code. The repository ignores common certificate and key extensions.

### One-time download and deployment

1. Deploy with `APPLE_WALLET_ENABLED=true` and the signing variables configured.
2. Open `/links`, click “Add to Apple Wallet,” enter the private access code, and install the downloaded pass on your iPhone.
3. Set `APPLE_WALLET_ENABLED=false` in Netlify and redeploy. The endpoint then returns 404, so the website no longer issues passes.

The pass is signed only when the endpoint is called. Apple Developer account setup, certificate creation/export, Netlify environment variables, and the final deployment remain manual because the signing credentials must stay private. Anyone who obtains the downloaded `.pkpass` file could still share that file; disabling the endpoint prevents new downloads.
