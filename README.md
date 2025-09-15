# ART-site
Rhino Training Website

# ART Site - Dynamic Carousel

## 🚀 Quick Start

### Prerequisites
- Node.js installed (download from [nodejs.org](https://nodejs.org))

### Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎠 Carousel Management

### Automatic Update Script

After adding/removing images from the `images/carousel/` folder, run:

#### Option 1: npm script (recommended)
```bash
npm run update-carousel
```

#### Option 2: Direct node command
```bash
node update-carousel.js
```

#### Option 3: Windows batch file
```bash
# Double-click this file in Windows Explorer
update-carousel.bat
```

### What the script does:
- 🔍 Scans `images/carousel/` folder
- 📸 Finds all image files (.png, .jpg, .jpeg, .gif, .webp)
- 📝 Updates `carousel-images.json` with the complete list
- ✅ Sorts images alphabetically for consistent ordering
- 📊 Shows total count and last update time

### Example Output:
```
🔍 Scanning carousel folder...
📁 Directory: C:\path\to\ART-site\images\carousel
✅ Found 58 image files:
   - 2025-07-07_14-00-19.png
   - 2025-07-07_14-00-30.png
   - 2025-07-07_14-14-09.png
   ... (and so on)

🎉 SUCCESS! Updated carousel-images.json
📊 Total images: 58
📅 Last updated: 2025-01-15T10:30:00.000Z
```

## 📁 File Structure

```
ART-site/
├── images/
│   └── carousel/          # Put your images here
│       ├── image1.png
│       ├── image2.jpg
│       └── ...
├── carousel-images.json   # Auto-generated image list
├── update-carousel.js     # Update script
├── update-carousel.bat    # Windows batch file
├── package.json          # npm scripts
└── script.js             # Main JavaScript (loads JSON)
```

## 🎯 How It Works

1. **Add images** to `images/carousel/` folder
2. **Run update script** to refresh the JSON
3. **Refresh browser** - carousel loads all images automatically
4. **Images cycle** every 5 seconds, showing one at a time

## 🔧 Manual JSON Editing

If you prefer to edit manually, update `carousel-images.json`:

```json
{
  "images": [
    "your-image-1.png",
    "your-image-2.jpg",
    "another-image.png"
  ],
  "lastUpdated": "2025-01-15T10:30:00.000Z",
  "totalImages": 3
}
```

## 🚀 Deployment

This system works perfectly with:
- ✅ Live Server (development)
- ✅ GitHub Pages (production)
- ✅ Any static hosting

No server-side code needed!
