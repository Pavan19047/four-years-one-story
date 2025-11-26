# Deployment Guide

This guide provides step-by-step instructions for deploying your farewell website to popular hosting platforms.

## Prerequisites

Before deploying, make sure you have:
- [ ] Customized all friend data and letters
- [ ] Updated secret codes
- [ ] Added your photos (or confirmed placeholders are intentional)
- [ ] Updated college name and batch years
- [ ] Tested the website locally (`npm run dev`)
- [ ] Built the project successfully (`npm run build`)

## Option 1: Netlify (Recommended - Easiest)

Netlify is the easiest way to deploy static websites for free.

### Method A: Drag and Drop (No Git Required)

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://www.netlify.com/)** and sign up (free)

3. **Drag and drop** your `dist` folder to the Netlify deploy zone

4. **Your site is live!** You'll get a URL like `random-name-123.netlify.app`

5. **Optional: Custom domain**
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Follow the instructions

### Method B: Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login:**
   ```bash
   netlify login
   ```

3. **Deploy:**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Method C: Continuous Deployment (Git)

1. **Push your code to GitHub**

2. **Go to Netlify** and click "New site from Git"

3. **Connect your repository**

4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Deploy!** Every push to your repo will auto-deploy

---

## Option 2: GitHub Pages

GitHub Pages is great if your code is already on GitHub.

### Setup

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update `package.json`:**
   Add these lines (replace with your info):
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update `vite.config.ts`:**
   Add the base path:
   ```typescript
   export default defineConfig({
     base: '/repository-name/', // Your repo name
     // ... rest of config
   })
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Scroll to "Pages"
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/root` → Save

6. **Wait a few minutes** and visit your URL!

---

## Option 3: Vercel

Vercel is another excellent free option with great performance.

### Quick Deploy

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Link to existing project? (N for first time)
   - Project name: (your choice)
   - Directory: `./` (default)
   - Build command: `npm run build` (default)
   - Output directory: `dist`

5. **Production deploy:**
   ```bash
   vercel --prod
   ```

### From GitHub

1. **Push code to GitHub**

2. **Go to [Vercel](https://vercel.com/)** and sign up

3. **Click "New Project"**

4. **Import your repository**

5. **Configure:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

6. **Deploy!**

---

## Option 4: Cloudflare Pages

Free, fast, and has great global CDN.

1. **Push your code to GitHub**

2. **Go to [Cloudflare Pages](https://pages.cloudflare.com/)**

3. **Create a new project**

4. **Connect your GitHub repository**

5. **Build settings:**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

6. **Deploy!**

---

## Custom Domain Setup

Once deployed, you can add a custom domain:

### Netlify
1. Domain settings → Add custom domain
2. Follow DNS configuration instructions

### GitHub Pages
1. Add a `CNAME` file in `/public/` with your domain
2. Configure DNS with your domain provider:
   - Type: CNAME
   - Name: www (or @)
   - Value: `yourusername.github.io`

### Vercel
1. Project settings → Domains
2. Add domain and follow DNS instructions

---

## Testing Your Deployed Site

After deployment, test:

- [ ] All sections load correctly
- [ ] Navigation works smoothly
- [ ] Secret codes unlock letters
- [ ] Photo gallery and filters work
- [ ] Animations play smoothly
- [ ] Mobile responsiveness
- [ ] All links work
- [ ] Share the URL with one friend to test before the big reveal!

---

## Troubleshooting

### Images not loading after deployment?

- **GitHub Pages**: Make sure image paths start with `/images/` not `./images/`
- **All platforms**: Verify images are in `/public/images/` folder
- **Check case**: Filenames are case-sensitive on servers

### Routes not working?

- This is a single-page app, so there shouldn't be routing issues
- If problems persist, check your hosting platform's SPA configuration

### CSS not loading?

- Clear browser cache
- Check build output for errors
- Verify `dist` folder has all files after build

### Build fails?

```bash
# Clean install
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

---

## Performance Tips

### Optimize Images

Before deploying, optimize your images:

1. **Use online tools:**
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)

2. **Recommended settings:**
   - Format: JPG for photos
   - Quality: 80-85%
   - Max width: 1200-1600px

### Enable Caching

Most platforms (Netlify, Vercel, Cloudflare) automatically enable caching. No action needed!

---

## Updating Your Deployed Site

### Netlify/Vercel/Cloudflare (Git-based)
Simply push changes to your repository:
```bash
git add .
git commit -m "Update letter content"
git push
```
Auto-deploys in ~1 minute!

### Netlify (Drag & Drop)
```bash
npm run build
```
Then drag the new `dist` folder to Netlify

### GitHub Pages
```bash
npm run deploy
```

---

## Cost

All recommended platforms have generous free tiers:

- **Netlify**: 100GB bandwidth/month, unlimited sites
- **Vercel**: 100GB bandwidth/month, unlimited sites
- **GitHub Pages**: 100GB bandwidth/month
- **Cloudflare Pages**: Unlimited bandwidth (!)

This website will use ~5-50MB per visit (depending on images), so you can handle thousands of visits per month for **free**.

---

## Security Notes

**Important**: The "password protection" in this website is **front-end only**. Anyone with technical skills could view all letters by looking at the source code.

**Why this is okay:**
- This is a trust-based design for friends
- True security would require a backend database
- The secret codes create a nice "unlocking" experience

**If you need true security:**
- Consider password-protecting the entire site at the hosting level
- Or share the link only with your 7 friends

---

## Need Help?

If you run into issues:

1. Check the main README.md troubleshooting section
2. Search for the error message + your platform name
3. Check your platform's documentation:
   - [Netlify Docs](https://docs.netlify.com/)
   - [Vercel Docs](https://vercel.com/docs)
   - [GitHub Pages Docs](https://docs.github.com/en/pages)
   - [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

---

**You're almost there!** Pick a platform and deploy. Your friends are going to love this. 💝
