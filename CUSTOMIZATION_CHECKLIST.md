# Customization Checklist ✅

Use this checklist to track your progress in customizing the website.

## 📋 Pre-Customization

- [ ] Run `npm install` successfully
- [ ] Run `npm run dev` and verify the site loads
- [ ] Familiarize yourself with the file structure

---

## 👥 Friend Data (MOST IMPORTANT)

**File: `/src/data/friendsData.ts`**

For each of your 7 friends:

### Friend 1
- [ ] Update `displayName` with real name
- [ ] Update `nickname`
- [ ] Set unique `secretCode` (save this to share later!)
- [ ] Write personalized `letterTitle`
- [ ] Write heartfelt `letterText` (take your time with this!)
- [ ] Update 3 `traits`
- [ ] Write personal `description`
- [ ] Add 2 `sharedMemories`

### Friend 2
- [ ] Update all fields (same as above)
- [ ] Save secret code

### Friend 3
- [ ] Update all fields
- [ ] Save secret code

### Friend 4
- [ ] Update all fields
- [ ] Save secret code

### Friend 5
- [ ] Update all fields
- [ ] Save secret code

### Friend 6
- [ ] Update all fields
- [ ] Save secret code

### Friend 7
- [ ] Update all fields
- [ ] Save secret code

**Secret Codes Summary:**
```
Friend 1 (Name): _____________
Friend 2 (Name): _____________
Friend 3 (Name): _____________
Friend 4 (Name): _____________
Friend 5 (Name): _____________
Friend 6 (Name): _____________
Friend 7 (Name): _____________
```

---

## 📸 Photos

**File: `/src/data/photosData.ts`**

- [ ] Review the 24 default photo entries
- [ ] Update `title` for each photo to match your actual memories
- [ ] Update `description` for each photo
- [ ] Adjust `year` categories as needed
- [ ] Add or remove photos as needed

**Adding photos to the website:**

- [ ] Create folder `/public/images/` if it doesn't exist
- [ ] Add photos named: `moment1.jpg`, `moment2.jpg`, etc.
- [ ] Optimize images (recommended: use TinyPNG or similar)
- [ ] Test that photos display correctly

**Photo Checklist:**
- [ ] 1st Year: _____ photos
- [ ] 2nd Year: _____ photos
- [ ] 3rd Year: _____ photos
- [ ] Final Year: _____ photos

---

## ⏰ Timeline

**File: `/src/data/timelineData.ts`**

For each of 8 timeline events:

- [ ] Event 1 (1st Year, Sem 1): Update title and memories
- [ ] Event 2 (1st Year, Sem 2): Update title and memories
- [ ] Event 3 (2nd Year, Sem 3): Update title and memories
- [ ] Event 4 (2nd Year, Sem 4): Update title and memories
- [ ] Event 5 (3rd Year, Sem 5): Update title and memories
- [ ] Event 6 (3rd Year, Sem 6): Update title and memories
- [ ] Event 7 (Final Year, Sem 7): Update title and memories
- [ ] Event 8 (Final Year, Sem 8): Update title and memories

---

## 📊 Statistics

**File: `/src/data/statsData.ts`**

Update these fun stats to match your actual experience:

- [ ] Assignments Survived (currently: 132)
- [ ] Group Bunking Sessions (currently: 27)
- [ ] Canteen Chai Count (currently: 378+)
- [ ] All-Nighters Together (currently: 15)
- [ ] Group Photos Taken (currently: 1247+)
- [ ] Inside Jokes Created (currently: 89)
- [ ] Motivational Speeches Given (currently: 43)
- [ ] Collective Hours of Laughter (currently: 2840+)

Feel free to add, remove, or modify stats!

---

## 💌 Personal Touches

### Closing Message

**File: `/src/components/ClosingSection.tsx`**

- [ ] Read through the default closing message (starts line ~40)
- [ ] Customize it with your voice and feelings
- [ ] Add your name at line ~76 (replace `[Your Name]`)
- [ ] Consider changing the quote at line ~96 if you have a favorite

### Footer

**File: `/src/components/Footer.tsx`**

- [ ] Line ~14: Update `[Your College Name]`
- [ ] Line ~14: Update `[Batch Years]` (e.g., "2020-2024")

### Hero Section

**File: `/src/components/HeroSection.tsx`**

- [ ] Line ~48: Update college name and batch years
- [ ] Optional: Customize the main title (line ~35) if you want something different than "Four Years, One Story"

---

## 🎨 Optional Customization

### Colors

**File: `/src/index.css`**

- [ ] Review the color scheme (warm nostalgic palette)
- [ ] If desired, customize colors (lines 8-24)
- [ ] Keep the theme consistent!

### Fonts

**File: `/index.html`**

- [ ] Current fonts: Quicksand (headings) + Inter (body)
- [ ] If desired, change to different Google Fonts
- [ ] Update CSS font-family references if you change fonts

---

## 🧪 Testing

### Local Testing

- [ ] Run `npm run dev`
- [ ] Test hero section loads
- [ ] Try unlocking each friend's letter with their secret code
- [ ] Verify wrong codes show error message
- [ ] Test photo gallery filtering (All, 1st Year, 2nd Year, etc.)
- [ ] Click photos to open lightbox
- [ ] Navigate through photos in lightbox
- [ ] Scroll through timeline
- [ ] Click on friend profiles to see expanded info
- [ ] Verify stats section animates when scrolling
- [ ] Read through closing message
- [ ] Test navigation (both desktop menu and mobile bottom nav)
- [ ] Test on mobile device or browser dev tools

### Mobile Testing

- [ ] Open on actual mobile device or use Chrome DevTools (F12)
- [ ] Test portrait orientation
- [ ] Test landscape orientation
- [ ] Verify bottom navigation works
- [ ] Check that all sections are readable
- [ ] Test photo gallery on mobile
- [ ] Test letter unlocking on mobile

### Browser Testing

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac/iOS)

---

## 🚀 Pre-Deployment

### Final Checks

- [ ] All friend names updated (no "Friend One", "Friend Two", etc.)
- [ ] All secret codes set and saved
- [ ] All letters written and proofread
- [ ] Photos added or placeholders intentional
- [ ] College name and batch years updated everywhere
- [ ] Your name added to closing section
- [ ] Timeline reflects your actual journey
- [ ] Stats updated to match your experience
- [ ] No placeholder text remains (unless intentional)

### Build Test

- [ ] Run `npm run build`
- [ ] Build completes without errors
- [ ] Check `dist` folder was created

### Final Review

- [ ] Read through entire website one more time
- [ ] Check for typos in letters
- [ ] Verify emotional tone is right
- [ ] Make sure everything feels personal
- [ ] Consider having someone else proofread

---

## 📤 Deployment

- [ ] Choose deployment platform (Netlify recommended)
- [ ] Follow DEPLOYMENT.md guide
- [ ] Deploy website
- [ ] Test deployed URL
- [ ] Verify everything works on live site

---

## 🎁 Sharing

### Prepare Secret Codes

Create a document to share codes with friends:

```
Hey [Friend Name]!

I made something special for our group. Visit: [YOUR-URL]

Your secret code is: [THEIR-CODE]

Go to "Personal Letters", select your name, and enter the code.

❤️
```

- [ ] Prepare message for Friend 1
- [ ] Prepare message for Friend 2
- [ ] Prepare message for Friend 3
- [ ] Prepare message for Friend 4
- [ ] Prepare message for Friend 5
- [ ] Prepare message for Friend 6
- [ ] Prepare message for Friend 7

### Launch Plan

- [ ] Decide when to share (special day? farewell event?)
- [ ] Test site one final time before sharing
- [ ] Send codes to friends (individually or as a group)
- [ ] Maybe record their reactions? 📹
- [ ] Prepare tissues (they'll need them!) 😭

---

## ✨ You're Ready!

Once all the boxes are checked, you've created something truly special. Your friends will treasure this forever.

**Remember:** This isn't just a website—it's a digital time capsule of your friendship. Take your time, make it perfect, and let your heart guide the words.

---

**Estimated Time:**
- Friend data & letters: 4-8 hours (most important, take your time!)
- Photos: 1-2 hours
- Timeline & stats: 30-60 minutes
- Personal touches: 30 minutes
- Testing: 30 minutes
- Deployment: 15-30 minutes

**Total: 6-12 hours** (spread over a few days for best results)

---

💝 **Good luck! Your friends are going to cry happy tears.** 💝
