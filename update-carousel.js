#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function updateCarouselJSON() {
    const carouselDir = path.join(__dirname, 'images', 'carousel');

    console.log('🔍 Scanning carousel folder...');
    console.log(`📁 Directory: ${carouselDir}`);

    try {
        // Check if directory exists
        if (!fs.existsSync(carouselDir)) {
            console.error(`❌ Carousel directory not found: ${carouselDir}`);
            console.log('💡 Make sure the images/carousel/ folder exists');
            process.exit(1);
        }

        // Read all files in the carousel directory
        const files = fs.readdirSync(carouselDir);

        // Filter for image files (png, jpg, jpeg, gif, webp)
        const imageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp'];
        const imageFiles = files.filter(file => {
            const ext = path.extname(file).toLowerCase();
            return imageExtensions.includes(ext);
        });

        // Sort files alphabetically for consistent ordering
        imageFiles.sort();

        console.log(`✅ Found ${imageFiles.length} image files:`);
        imageFiles.forEach(file => console.log(`   - ${file}`));

        if (imageFiles.length === 0) {
            console.log('⚠️  No image files found in carousel folder');
            console.log('💡 Supported formats: .png, .jpg, .jpeg, .gif, .webp');
        }

        // Create JSON structure
        const jsonData = {
            images: imageFiles,
            lastUpdated: new Date().toISOString(),
            totalImages: imageFiles.length
        };

        // Write to carousel-images.json
        const jsonPath = path.join(__dirname, 'carousel-images.json');
        fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

        console.log(`\n🎉 SUCCESS! Updated carousel-images.json`);
        console.log(`📊 Total images: ${imageFiles.length}`);
        console.log(`📅 Last updated: ${jsonData.lastUpdated}`);
        console.log(`📄 JSON file: ${jsonPath}`);

    } catch (error) {
        console.error('❌ ERROR:', error.message);
        console.log('💡 Make sure you have Node.js installed and run this from the project root');
        process.exit(1);
    }
}

// Run the update
updateCarouselJSON();