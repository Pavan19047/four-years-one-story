# Planning Guide

A heartfelt, interactive farewell website dedicated to 7 engineering friends, celebrating 4 years of shared memories, struggles, and growth through personalized letters, photo galleries, and nostalgic timeline moments.

**Experience Qualities**:
1. **Emotional** - Every interaction should evoke warmth and nostalgia, making friends feel deeply valued through personal touches and heartfelt content.
2. **Intimate** - The experience should feel like opening a handwritten letter or flipping through a shared photo album, personal and private.
3. **Nostalgic** - Visual elements, animations, and content should transport users back through 4 years of memories with gentle, purposeful design choices.

**Complexity Level**: Light Application (multiple features with basic state)
  - Multiple interconnected sections with navigation, client-side password protection for letters, photo gallery with filtering, and animated statistics counters.

## Essential Features

### Personal Letters System
- **Functionality**: Secure, individualized letter viewing for 7 friends using secret codes
- **Purpose**: Creates intimate, one-on-one moments where each friend reads their personalized farewell message
- **Trigger**: Friend selects their name from a card grid, then enters their secret code
- **Progression**: Landing on letters section → Select friend card → Enter secret code → Code validation → Letter reveal with fade-in animation → Reading experience with optional background music
- **Success criteria**: Each friend can access only their letter, wrong codes show gentle error messages, letter displays beautifully with paper-like aesthetic

### Photo Gallery with Timeline Filtering
- **Functionality**: Masonry-style gallery with year-based filtering and lightbox modal for detailed memory viewing
- **Purpose**: Showcases shared memories visually, organized by timeline to relive the journey chronologically
- **Trigger**: Click on Memories navigation or scroll to gallery section
- **Progression**: View gallery grid → Select year filter (optional) → Click photo → Lightbox opens with larger image and caption → Navigate between photos or close → Return to gallery
- **Success criteria**: Photos load smoothly, filtering works instantly, lightbox shows captions and memories clearly, responsive on all devices

### Journey Timeline
- **Functionality**: Vertical timeline visualizing 4 years of engineering with key moments and shared experiences
- **Purpose**: Provides narrative structure to the friendship journey, highlighting growth and memorable events
- **Trigger**: Navigate to timeline section or scroll down from hero
- **Progression**: Scroll to timeline → View chronological cards → Read year-by-year memories → Appreciate the full journey arc
- **Success criteria**: Timeline is visually clear, cards appear with scroll animations, content is emotionally resonant

### Friends Profile Showcase
- **Functionality**: Interactive cards displaying each friend with personality traits, nicknames, and expanded memory modals
- **Purpose**: Celebrates individual personalities while showing what makes each friendship unique
- **Trigger**: Click on Friends section from navigation
- **Progression**: View friend cards with avatars → Click a card → Modal opens with detailed profile and shared memories → Close modal → Explore other friends
- **Success criteria**: All 7 friends displayed equally, modals load smoothly, content feels personal and fun

### Animated Statistics Counter
- **Functionality**: Playful counters showing quantified memories (chai sessions, all-nighters, bunks)
- **Purpose**: Adds humor and lightness while quantifying the shared experience
- **Trigger**: Scroll to stats section triggers counter animation
- **Progression**: Stats section enters viewport → Numbers animate from 0 to final value → Users smile at memories
- **Success criteria**: Counters animate smoothly once when scrolling into view, numbers are fun and relatable

## Edge Case Handling
- **Wrong Secret Code**: Gentle error message with shake animation, allows unlimited retry attempts without lockout
- **Empty States**: Placeholder images included for all photo slots with clear instructions in README for replacement
- **Mobile Navigation**: Hamburger menu for small screens, smooth section scrolling maintained
- **Slow Image Loading**: Skeleton loaders for gallery images, graceful fallback for missing images
- **Multiple Letter Views**: User can go back and view different letters by resetting selection

## Design Direction
The design should feel like a cherished memory box—warm, personal, and gently nostalgic with soft colors and handcrafted details. It should balance emotional depth with playful energy, using a minimal interface that lets memories and words take center stage while adding purposeful animations that feel like pages turning in a shared journal.

## Color Selection
Analogous warm color scheme with sunset-inspired tones that evoke nostalgia and warmth.

- **Primary Color**: Soft Coral `oklch(0.75 0.12 25)` - Represents warmth and friendship, used for primary CTAs and emotional accents
- **Secondary Colors**: Muted Peach `oklch(0.85 0.08 45)` for backgrounds and cards; Deep Blue `oklch(0.35 0.05 250)` for text and grounding elements
- **Accent Color**: Golden Yellow `oklch(0.82 0.15 85)` - Highlights special moments and letter reveals, creates joy and celebration
- **Foreground/Background Pairings**:
  - Background (Soft Cream `oklch(0.97 0.01 85)`): Dark Blue text `oklch(0.25 0.04 250)` - Ratio 13.2:1 ✓
  - Card (White `oklch(1 0 0)`): Dark Blue text `oklch(0.25 0.04 250)` - Ratio 14.8:1 ✓
  - Primary (Soft Coral `oklch(0.75 0.12 25)`): White text `oklch(1 0 0)` - Ratio 4.9:1 ✓
  - Secondary (Muted Peach `oklch(0.85 0.08 45)`): Dark Blue text `oklch(0.25 0.04 250)` - Ratio 9.1:1 ✓
  - Accent (Golden Yellow `oklch(0.82 0.15 85)`): Dark Blue text `oklch(0.25 0.04 250)` - Ratio 7.8:1 ✓
  - Muted (Light Peach `oklch(0.92 0.04 50)`): Medium Blue text `oklch(0.45 0.05 250)` - Ratio 6.2:1 ✓

## Font Selection
Typefaces should feel personal yet readable—a friendly display font for headings that adds warmth, paired with a clean sans-serif for body text that ensures letter content is easily digestible and feels like a heartfelt note.

**Display Font**: Quicksand (Google Fonts) - Soft, rounded, friendly for hero titles and section headings
**Body Font**: Inter (Google Fonts) - Clean, highly readable for letters and body content

- **Typographic Hierarchy**:
  - H1 (Page Title): Quicksand Bold/48px/tight (1.1) letter spacing -0.02em
  - H2 (Section Headings): Quicksand SemiBold/36px/tight (1.2) letter spacing -0.01em
  - H3 (Card Titles): Quicksand Medium/24px/normal (1.3)
  - Body (Letter Content): Inter Regular/16px/relaxed (1.6) letter spacing 0.01em
  - Small (Captions): Inter Regular/14px/normal (1.4)

## Animations
Animations should feel like gentle page turns and memory reveals—subtle but meaningful, enhancing emotional moments without distraction, creating anticipation when unlocking letters and wonder when photos appear.

- **Purposeful Meaning**: Letter reveal animations mimic unfolding paper; photo gallery uses staggered fade-ins like memories surfacing; scroll animations create a sense of journey progression
- **Hierarchy of Movement**: Hero section has subtle ambient motion; letter unlocking gets dramatic fade + scale; photo clicks have quick, confident transitions; timeline cards slide in sequentially

## Component Selection

- **Components**:
  - **Card** (shadcn): For friend profiles, photo thumbnails, timeline events, and stat displays with soft shadows and rounded corners
  - **Dialog** (shadcn): For photo lightbox modals and expanded friend profiles with backdrop blur
  - **Button** (shadcn): Primary actions in coral, secondary in muted peach, all with smooth hover states
  - **Input** (shadcn): Secret code entry fields with custom focus states and error handling
  - **Tabs** (shadcn): Year filtering in gallery section, styled with soft transitions
  - **Separator** (shadcn): Gentle dividers between sections using muted colors
  
- **Customizations**:
  - Custom paper-texture background component for letter display using CSS patterns
  - Masonry grid layout component for photo gallery using CSS columns or custom flexbox
  - Timeline connector component with animated line drawing effect
  - Counter animation component using Framer Motion for statistics
  - Music toggle component with audio controls for optional letter background music

- **States**:
  - **Buttons**: Soft glow on hover, slight scale on press, disabled state with reduced opacity
  - **Inputs**: Border color shifts from muted to accent on focus, gentle shake on error
  - **Cards**: Subtle lift (translateY) on hover with shadow increase, active state with slight scale down
  - **Photos**: Zoom cursor on hover, smooth scale transition into lightbox

- **Icon Selection**:
  - Heart (filled/outlined) for emotional actions and favorites
  - User for friend profiles
  - Camera/Images for gallery section
  - Clock/Timeline for journey timeline
  - Lock/LockOpen for letter security
  - X for closing modals
  - ChevronLeft/Right for photo navigation
  - MusicNote for audio toggle

- **Spacing**:
  - Container padding: p-6 on mobile, p-8 on tablet, p-12 on desktop
  - Section vertical spacing: my-16 on mobile, my-24 on desktop
  - Card internal padding: p-6
  - Grid gaps: gap-4 for tight layouts, gap-6 for gallery, gap-8 for section spacing
  - Button padding: px-6 py-3

- **Mobile**:
  - Navigation collapses to fixed bottom nav bar with icon-only navigation on mobile
  - Hero title reduces from 48px to 32px, subtitle from 20px to 16px
  - Gallery switches from 4 columns to 2 columns on tablet, 1 column on mobile
  - Timeline switches from alternating layout to single-column left-aligned on mobile
  - Friend cards stack vertically with full width on mobile
  - Letter text size remains at 16px for readability but line height increases to 1.7 on mobile
  - Modals occupy 95% of screen on mobile with reduced padding
  - Stats display in 2x2 grid on mobile instead of horizontal row
