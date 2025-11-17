#!/bin/bash

# Post-build cleanup script
# Removes internal Next.js files that shouldn't be publicly accessible

echo "🧹 Cleaning build artifacts..."

# Count files before cleanup
BEFORE=$(find out/ -name "*.txt" ! -name "robots.txt" | wc -l)

# Remove ALL Next.js internal metadata files recursively
# Keep only robots.txt which is needed for SEO
find out/ -name "__next.*.txt" -type f -delete
find out/ -name "index.txt" -type f -delete

# Remove _not-found directory (404 page artifacts)
rm -rf out/_not-found

# Count files after cleanup
AFTER=$(find out/ -name "*.txt" ! -name "robots.txt" | wc -l)
REMOVED=$((BEFORE - AFTER))

echo "✅ Build cleaned successfully!"
echo ""
echo "Removed: $REMOVED internal .txt files"
echo "  - __next.*.txt files (RSC metadata)"
echo "  - index.txt files (page metadata)"
echo "  - _not-found/ directory"
echo ""
echo "Kept:"
echo "  - robots.txt (SEO)"
echo ""
echo "✅ Build is ready for deployment!"
