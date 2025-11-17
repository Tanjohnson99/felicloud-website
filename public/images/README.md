# Images Directory

## 📸 How to Organize Images

This is the central location for all website images.

### Recommended folder structure:

```
images/
├── logos/              # Brand logos, partner logos, third-party logos
├── screenshots/        # Product screenshots, app demos, feature previews
├── icons/              # UI icons, feature icons (if not using SVG inline)
├── blog/               # Blog post images, article headers
├── team/               # Team member photos, about us images
├── testimonials/       # Customer photos, testimonial images
├── products/           # Product images, service illustrations
├── backgrounds/        # Background images, patterns, textures
└── misc/               # Other images that don't fit elsewhere
```

### File naming conventions:

✅ **Good:**
- `feature-file-sync.png`
- `logo-nextcloud.svg`
- `screenshot-dashboard-2024.webp`
- `team-member-john-doe.jpg`

❌ **Bad:**
- `image1.png`
- `IMG_0001.jpg`
- `photo.png`
- `new-file.webp`

### Best practices:

1. **Use descriptive names** - Future you will thank you
2. **Use lowercase with hyphens** - `my-image.png` not `MyImage.png`
3. **Include dimensions** if needed - `logo-200x100.png`
4. **Use appropriate formats:**
   - `.webp` or `.avif` for photos (best compression)
   - `.svg` for logos and icons (scalable)
   - `.png` for images with transparency
   - `.jpg` for photos without transparency

5. **Optimize before uploading:**
   - Use tools like [TinyPNG](https://tinypng.com/), [Squoosh](https://squoosh.app/), or ImageOptim
   - Aim for < 200KB per image when possible

6. **Responsive images:**
   - Consider multiple sizes: `hero-mobile.webp`, `hero-desktop.webp`
   - Or let Next.js Image component handle it automatically

### How to use in code:

```tsx
import Image from 'next/image';

<Image
  src="/images/screenshots/dashboard.webp"
  alt="Dashboard screenshot"
  width={1200}
  height={800}
/>
```

### Current contents:

*Add your images to the appropriate subdirectories and update this section!*

---

**Remember:** All images must go inside `/public/images/` to be accessible on the website.
