# Image Assets

Place your photos here for the gallery section.

## Naming Convention

Name your files as:
- `moment1.jpg` (or .png, .jpeg)
- `moment2.jpg`
- `moment3.jpg`
- ... and so on

The names should match what's in `/src/data/photosData.ts`

## Image Guidelines

- **Format**: JPG or PNG
- **Recommended size**: 1200px wide (will be auto-scaled)
- **Optimize**: Use tools like TinyPNG to reduce file size
- **Total count**: 24 photos included in the default data (you can add or remove)

## Folder Structure

```
public/
└── images/
    ├── moment1.jpg
    ├── moment2.jpg
    ├── moment3.jpg
    └── ... (up to moment24.jpg or more)
```

## Optional: Friend Profile Images

If you want custom profile pictures for friends, add them as:
- `friend1.jpg`
- `friend2.jpg`
- etc.

Then update `friendsData.ts` to use these images instead of the icon placeholders.

---

**Note**: The website works fine with placeholder images for testing. Replace them when you're ready to deploy!
