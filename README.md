# Suzuki Swift — Booking Open Landing Page

A pixel-perfect, automotive landing page built with React, Vite, Tailwind CSS, and Framer Motion for **Suzuki Kohat Motors**.

---

## 🚀 How to Put This Website Live on GitHub

You can publish this website live for free in just a few minutes using either **GitHub Pages** (built-in) or **Vercel / Netlify** (connected to your GitHub repository).

---

### Step 1: Create a New GitHub Repository

1. Log in to [GitHub](https://github.com).
2. In the top right corner, click the **`+`** icon and select **New repository**.
3. Name your repository (e.g. `suzuki-swift-kohat` or `swift-booking`).
4. Keep it **Public** (required for free GitHub Pages).
5. Do **NOT** check "Add a README" or ".gitignore" (we have already created them for you).
6. Click **Create repository**.

---

### Step 2: Push Your Code from Your Computer

Open your terminal or command prompt in your project root folder and run:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all project files (.gitignore will protect node_modules)
git add .

# 3. Create your initial commit
git commit -m "Initial commit: Suzuki Swift Booking Open website"

# 4. Rename the default branch to main
git branch -M main

# 5. Connect to your GitHub repository (replace USERNAME and REPO_NAME with yours)
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 6. Push your code to GitHub
git push -u origin main
```

---

### Step 3: Turn On GitHub Pages (Automatic 1-Click)

This project already includes an automated GitHub Actions deployment workflow in `.github/workflows/deploy.yml`.

1. Go to your repository on GitHub.
2. Click **Settings** (tab near the top right of the repo).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, change from *Deploy from a branch* to **GitHub Actions**.
5. That's it! GitHub Actions will immediately build and publish your site.
6. Click the **Actions** tab to watch the build progress (takes ~1 minute).
7. Once finished, your live URL will appear at the top of the Pages tab:
   `https://USERNAME.github.io/REPO_NAME/`

---

### Alternative Option: 1-Click Deployment via Vercel (Recommended for Custom Domains)

If you prefer custom domain support, blazing-fast edge CDN, and instant previews:

1. Go to [vercel.com](https://vercel.com) and click **Sign Up** with GitHub.
2. Click **Add New...** > **Project**.
3. Import your `suzuki-swift-kohat` repository from the list.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**.
6. In ~30 seconds, your website will be live with a free SSL `.vercel.app` URL, ready to connect any custom domain!

---

## 🛠 Local Development

To run this website locally on your computer:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Test production build locally
npm run build
npm run preview
```

---

## 🚗 Features Included

- **Pixel-Perfect Poster Re-creation**: Typography, colors, speed streaks, diagonal lighting lines, and bottom dealer bar matching the original poster.
- **Responsive Layout**: Seamless on mobile, tablet, and widescreen desktop displays.
- **Interactive Color Lab**: Live 360° color switcher (Premium Silver, Speedy Blue, Burning Red, Midnight Black).
- **Variant Selector**: GL Manual, GL CVT, and GLX CVT pricing & feature comparisons.
- **Lead Booking Form**: 30-second reservation form with instant feedback state.
- **Direct Showroom Contact**: One-tap phone calling (`0332 0583940`) and location info for Main Indus Highway Near Pindi Pull, Kohat.
