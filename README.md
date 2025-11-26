# Four Years, One Story 💝

A beautiful, emotional farewell website dedicated to your engineering friends. This single-page application features personal letters, photo galleries, timelines, and heartfelt memories.

![Website Preview](https://via.placeholder.com/1200x600/FFE5D9/FF8A80?text=Four+Years+One+Story)

## ✨ Features

- 🎯 **Personal Letters** - Password-protected letters for 7 friends
- 📸 **Photo Gallery** - Masonry layout with year-based filtering
- ⏰ **Journey Timeline** - 4-year engineering journey visualization
- 👥 **Friends Profiles** - Individual profiles with traits and memories
- 📊 **Fun Statistics** - Animated counters showing friendship metrics
- 💌 **Closing Message** - Heartfelt farewell note
- 📱 **Fully Responsive** - Beautiful on all devices
- 🎨 **Warm Design** - Nostalgic color palette with smooth animations

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this project**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the URL shown in your terminal)

### Build for Production

To create an optimized production build:

```bash
npm run build
```

The production files will be in the `dist` folder.

## 🎨 Customization Guide

### 1. Update Friend Information

Edit `/src/data/friendsData.ts`:

```typescript
{
  id: "friend1",
  displayName: "John Doe",           // ← Change to real name
  nickname: "The Genius",            // ← Update nickname
  secretCode: "john2024",            // ← Set secret code
  letterTitle: "To my best friend",  // ← Letter heading
  letterText: `Your letter here...`, // ← Full letter content
  traits: [
    "Most likely to...",             // ← Update traits
    "Known for...",
    "Catchphrase: '...'"
  ],
  description: "About this friend...", // ← Profile description
  sharedMemories: [
    "That time we...",               // ← Specific memories
    "Remember when..."
  ]
}
```

**Important:** Share each friend's `secretCode` with them privately!

### 2. Add Photos

**Option A: Use Real Photos (Recommended for final version)**

1. Place your photos in `/public/images/` folder
2. Name them: `moment1.jpg`, `moment2.jpg`, etc.
3. Update `/src/data/photosData.ts` if you want to change descriptions:

```typescript
{
  id: "photo1",
  src: "/images/moment1.jpg",    // ← Must match filename in /public/images/
  year: "1st Year",              // ← Filter category
  title: "First Day Together",  // ← Photo title
  description: "The day we..." // ← Memory description
}
```

**Option B: Keep Placeholders (for testing)**

The website works with placeholder images. Replace them later.

### 3. Update Timeline Events

Edit `/src/data/timelineData.ts`:

```typescript
{
  year: "1st Year",
  semester: "Semester 1",
  title: "How It Started",
  memories: [
    "First day memories...",
    "That funny incident...",
    // Add more bullet points
  ]
}
```

### 4. Customize Statistics

Edit `/src/data/statsData.ts`:

```typescript
{
  label: "Assignments Survived",
  value: 132,           // ← Your actual number
  suffix: ""            // ← Optional: "+", "hrs", etc.
}
```

### 5. Update Personal Information

**In `/src/components/ClosingSection.tsx`:**
- Line ~76: Replace `[Your Name]` with your actual name

**In `/src/components/Footer.tsx`:**
- Line ~14: Replace `[Your College Name]` with your college
- Line ~14: Replace `[Batch Years]` with your batch (e.g., "2020-2024")

**In `/src/components/HeroSection.tsx`:**
- Line ~48: Update college name and batch years

**In `/index.html`:**
- Line 7: You can customize the page title

### 6. Customize Colors (Optional)

Edit `/src/index.css` if you want different colors:

```css
:root {
  --primary: oklch(0.75 0.12 25);    /* Main accent color */
  --secondary: oklch(0.85 0.08 45);  /* Secondary color */
  --accent: oklch(0.82 0.15 85);     /* Highlight color */
  --background: oklch(0.97 0.01 85); /* Page background */
  /* ... more colors ... */
}
```

## 📦 Deployment

### Deploy to Netlify (Easiest)

1. **Build your project**
   ```bash
   npm run build
   ```

2. **Sign up at [Netlify](https://www.netlify.com/)**

3. **Drag and drop your `dist` folder** to Netlify's deploy area

4. **Done!** You'll get a free URL like `your-site.netlify.app`

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to `package.json`:**
   ```json
   {
     "homepage": "https://yourusername.github.io/your-repo-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** in your repository settings

### Deploy to Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts**

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Pre-built shadcn components
│   ├── HeroSection.tsx        # Landing page hero
│   ├── LettersSection.tsx     # Password-protected letters
│   ├── GallerySection.tsx     # Photo gallery with filters
│   ├── TimelineSection.tsx    # Journey timeline
│   ├── FriendsSection.tsx     # Friend profiles
│   ├── StatsSection.tsx       # Animated statistics
│   ├── ClosingSection.tsx     # Farewell message
│   ├── Navbar.tsx             # Navigation bar
│   └── Footer.tsx             # Footer
├── data/
│   ├── friendsData.ts         # Friend information & letters
│   ├── photosData.ts          # Photo gallery data
│   ├── timelineData.ts        # Timeline events
│   └── statsData.ts           # Statistics data
├── App.tsx                    # Main app component
├── index.css                  # Global styles & theme
└── main.tsx                   # App entry point

public/
└── images/                    # Place your photos here
```

## 🎯 Tips for Best Results

### Writing Letters
- **Be personal and specific** - Mention actual memories
- **Balance emotion with humor** - Make them laugh and cry
- **Keep it readable** - Use paragraphs, not huge walls of text
- **Proofread** - This is a keepsake, make it perfect

### Choosing Photos
- **Mix formal and candid** - Both have their place
- **Chronological variety** - Represent all 4 years
- **Quality over quantity** - 20-30 great photos > 100 mediocre ones
- **Optimize images** - Compress large files to improve load times

### Secret Codes
- **Keep them simple** - Friends should remember them
- **Make them personal** - Inside jokes, favorite numbers, etc.
- **Share privately** - Don't spoil the surprise
- **Test them** - Make sure they work before sharing

### Before Sharing
- [ ] Test all secret codes
- [ ] Replace all placeholder text
- [ ] Add real photos or verify placeholders are intentional
- [ ] Update college name and batch years
- [ ] Test on mobile device
- [ ] Proofread all letters
- [ ] Test deployment URL

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components (via shadcn)
- **Phosphor Icons** - Beautiful icons

## 🐛 Troubleshooting

### Photos not showing?
- Check file names match exactly (case-sensitive)
- Ensure photos are in `/public/images/` folder
- Verify file extensions (.jpg, .png, etc.)

### Secret codes not working?
- Check for typos in `friendsData.ts`
- Codes are case-sensitive
- Clear browser cache and try again

### Website not loading?
- Run `npm install` to ensure all dependencies are installed
- Check Node.js version (should be 16+)
- Try `npm run dev` in a new terminal window

### Build fails?
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` again

## 📝 License

This is a personal project template. Feel free to use and modify it for your own farewell website!

## 💖 Final Notes

This website is more than code—it's a digital memory box. Take your time customizing it. Your friends will cherish this forever.

**Pro tip:** Record their reactions when they first see it. Those videos will be priceless.

---

Made with ❤️ for friendships that last a lifetime.
