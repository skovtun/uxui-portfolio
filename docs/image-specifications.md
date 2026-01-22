# Case Study Image Specifications

## Current Implementation

### ✅ Good News: Images are already used in both places
- **Homepage** (`WorkSection.tsx`): Displays case study preview cards
- **Case Study Page** (`CaseStudyContent.tsx`): Displays hero image

Both use the same `project.image` source, which is correct.

## Recommended Image Dimensions

### For Homepage (WorkSection)
- **Aspect Ratio**: 16:10 (1.6:1)
- **Recommended Dimensions**: 
  - **Desktop**: 1200px × 750px (or 1600px × 1000px for retina)
  - **Mobile**: 800px × 500px minimum
- **Current `sizes` attribute**: `(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px`
- **Quality**: 85 (good balance)

### For Case Study Page (CaseStudyContent)
- **Aspect Ratio**: 
  - Mobile: 16:9 (1.78:1)
  - Desktop: 21:9 (2.33:1) - wider, more cinematic
- **Recommended Dimensions**:
  - **Mobile (16:9)**: 1920px × 1080px (Full HD)
  - **Desktop (21:9)**: 2560px × 1080px (Ultrawide) or 3840px × 1620px (4K ultrawide)
- **Current `sizes` attribute**: `(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px`
- **Quality**: 90 (higher quality for hero)

## UX Expert Recommendations

### Option 1: Single Image (Current Approach) ✅ Recommended
**Use one image that works for both contexts**

**Recommended Specs:**
- **Dimensions**: 2560px × 1440px (16:9 ratio)
- **Format**: WebP (with JPG fallback)
- **File Size**: < 500KB (optimized)
- **Why**: 
  - 16:9 works well for both contexts
  - Next.js Image component handles cropping/resizing automatically
  - Single source of truth
  - Easier to maintain

**Pros:**
- ✅ Single image to manage
- ✅ Consistent visual identity
- ✅ Next.js handles responsive sizing
- ✅ Better performance (one image load)

**Cons:**
- ⚠️ May need slight cropping on homepage (16:10 vs 16:9)
- ⚠️ Desktop case study page uses 21:9, so image will be cropped

### Option 2: Separate Images (More Control)
**Use different images for homepage and case study page**

**Homepage Image:**
- **Dimensions**: 1600px × 1000px (16:10)
- **Format**: WebP
- **File Size**: < 300KB

**Case Study Hero Image:**
- **Dimensions**: 3840px × 1620px (21:9) or 2560px × 1080px
- **Format**: WebP
- **File Size**: < 600KB

**Pros:**
- ✅ Perfect aspect ratios for each context
- ✅ More control over composition
- ✅ Can optimize each for its use case

**Cons:**
- ⚠️ Two images to maintain
- ⚠️ More storage
- ⚠️ Need to update both when changing

## Current Code Analysis

### Homepage Image (WorkSection.tsx)
```tsx
// Aspect: 16:10
className="aspect-16/10"
sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
quality={85}
```

### Case Study Hero (CaseStudyContent.tsx)
```tsx
// Aspect: 16:9 mobile, 21:9 desktop
className="aspect-[16/9] md:aspect-[21/9]"
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
quality={90}
```

## Best Practice Recommendation

### 🎯 Recommended: Single Image at 16:9

**Specifications:**
- **Dimensions**: 2560px × 1440px (16:9)
- **Format**: WebP (primary) + JPG (fallback)
- **File Size**: 400-500KB (optimized)
- **Color Space**: sRGB
- **Compression**: 85-90% quality

**Why 16:9?**
1. ✅ Works well for homepage (slight crop to 16:10 is acceptable)
2. ✅ Standard for case study heroes
3. ✅ Universal aspect ratio (works on all devices)
4. ✅ Next.js Image handles responsive cropping gracefully

**Implementation:**
- Keep current single `image` field in `PROJECTS` array
- Next.js Image component will automatically:
  - Crop to 16:10 on homepage
  - Crop to 21:9 on desktop case study page
  - Maintain quality and performance

## Image Optimization Checklist

- [ ] Use WebP format (with JPG fallback)
- [ ] Optimize file size (< 500KB)
- [ ] Use appropriate dimensions (2560×1440px recommended)
- [ ] Ensure images are sharp at display size
- [ ] Test on retina displays (2x resolution)
- [ ] Verify aspect ratios work in both contexts
- [ ] Use Next.js Image component (already implemented ✅)
- [ ] Set appropriate `sizes` attribute (already set ✅)
- [ ] Use `priority` for above-the-fold images (already set ✅)

## Current File Structure

```
public/
  images/
    projects/
      empower-hero.png  ← Current file
      empower.jpg       ← Old file (can be removed)
      1inch.jpg
      defi-platform.jpg
```

## Action Items

1. ✅ Images are already used in both places (homepage + case study page)
2. 📝 Optimize `empower-hero.png` to recommended specs
3. 📝 Consider converting to WebP format for better performance
4. 📝 Update other case study images to match specifications

