#!/bin/bash

# Post-build cleanup script
# Removes internal Next.js files that shouldn't be publicly accessible

echo "🧹 Cleaning build artifacts..."

# Remove Next.js internal metadata files
rm -f out/__next.*.txt
rm -f out/index.txt

# Remove _not-found directory (404 page artifacts)
rm -rf out/_not-found

# Keep only necessary files
echo "✅ Build cleaned successfully!"
echo ""
echo "Removed:"
echo "  - __next.*.txt files (RSC metadata)"
echo "  - index.txt (RSC metadata)"
echo "  - _not-found/ directory"
echo ""
echo "✅ Build is ready for deployment!"
