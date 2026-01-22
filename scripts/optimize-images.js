const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Изображения для оптимизации (больше 1MB)
const imagesToOptimize = [
  'public/images/case-studies/gettr-ui-kit.png',
  'public/images/case-studies/gettr-research.png',
  'public/images/case-studies/empower-corporate-website.png',
  'public/images/case-studies/gettr-mobile-ui.png',
  'public/images/case-studies/gettr-ux-research.png',
  'public/images/projects/1inch.png',
  'public/images/projects/empower.png',
  'public/images/case-studies/gettr-wireframes.png',
  'public/images/case-studies/1inch-delegate-staking.png',
  'public/images/projects/gettr.png',
  'public/images/case-studies/gettr-web-3.png',
  'public/images/case-studies/gettr-wireframes-2.png',
  'public/images/case-studies/empower-corporate-site-ui-kit.png',
  'public/images/case-studies/gettr-web-2.png',
  'public/images/case-studies/1inch-swap.png',
  'public/images/case-studies/empower-ux-patterns.png',
  'public/images/case-studies/1inch-pro-app-design.png',
  'public/images/case-studies/empower-components.png',
  'public/images/case-studies/gettr-promo.png',
  'public/images/case-studies/empower-animation.png',
  'public/images/case-studies/gettr-web-1.png',
  'public/images/case-studies/empower-web-app.png',
  'public/images/case-studies/1inch-design-system.png',
  'public/images/case-studies/gettr-web-4.png',
  'public/images/case-studies/gettr-tasks.png',
  'public/images/case-studies/1inch-dapp-design.png',
  'public/images/case-studies/empower-web-app-short.png',
  'public/images/sergei-kovtun.png',
  'public/images/case-studies/empower-breakpoints.png',
  'public/images/case-studies/1inch-user-case-result.png',
];

async function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}

async function optimizeImage(inputPath) {
  try {
    const originalSize = await getFileSize(inputPath);
    const originalSizeFormatted = formatBytes(originalSize);
    
    console.log(`\nOptimizing: ${inputPath}`);
    console.log(`Original size: ${originalSizeFormatted}`);
    
    // Создаем резервную копию
    const backupPath = inputPath + '.backup';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
    }
    
    // Оптимизируем PNG с сохранением качества
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    // Для PNG: сжимаем с lossless оптимизацией
    // Максимальная ширина 2400px для веб-сайта
    const maxWidth = 2400;
    const width = metadata.width > maxWidth ? maxWidth : metadata.width;
    
    await image
      .resize(width, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .png({
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true
      })
      .toFile(inputPath + '.optimized');
    
    const optimizedSize = await getFileSize(inputPath + '.optimized');
    const optimizedSizeFormatted = formatBytes(optimizedSize);
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`Optimized size: ${optimizedSizeFormatted}`);
    console.log(`Savings: ${savings}%`);
    
    // Заменяем оригинал оптимизированной версией
    fs.renameSync(inputPath + '.optimized', inputPath);
    
    return {
      path: inputPath,
      original: originalSize,
      optimized: optimizedSize,
      savings: parseFloat(savings)
    };
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  
  const results = [];
  let totalOriginal = 0;
  let totalOptimized = 0;
  
  for (const imagePath of imagesToOptimize) {
    const fullPath = path.join(process.cwd(), imagePath);
    if (fs.existsSync(fullPath)) {
      const result = await optimizeImage(fullPath);
      if (result) {
        results.push(result);
        totalOriginal += result.original;
        totalOptimized += result.optimized;
      }
    } else {
      console.log(`File not found: ${imagePath}`);
    }
  }
  
  console.log('\n=== Optimization Summary ===');
  console.log(`Total files optimized: ${results.length}`);
  console.log(`Total original size: ${formatBytes(totalOriginal)}`);
  console.log(`Total optimized size: ${formatBytes(totalOptimized)}`);
  console.log(`Total savings: ${formatBytes(totalOriginal - totalOptimized)} (${((totalOriginal - totalOptimized) / totalOriginal * 100).toFixed(1)}%)`);
  
  // Удаляем резервные копии если оптимизация успешна
  console.log('\nBackup files created (.backup). You can delete them after verification.');
}

main().catch(console.error);

