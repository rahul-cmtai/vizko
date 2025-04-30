#!/bin/bash

# Build client
npm run build

# Make sure the build directory exists
mkdir -p dist/public
mkdir -p dist/api
mkdir -p dist/assets

# Create the api folder for serverless functions if it doesn't exist
mkdir -p api

# If favicon.ico doesn't exist in the build output, copy it from the source
if [ ! -f "dist/public/favicon.ico" ]; then
  echo "Copying favicon.ico manually..."
  cp -f client/public/favicon.ico dist/public/
fi

# Build TypeScript API files
echo "Building API files..."
# Compile API TypeScript files to dist/api
npx esbuild api/index.ts --bundle --format=cjs --platform=node --outfile=dist/api/index.js

# Copy JS API files (if any)
echo "Copying additional API files..."
cp -f api/*.js dist/api/ 2>/dev/null || :

# Copy assets to root level for proper paths
echo "Copying assets to root level..."
cp -r dist/public/assets/* dist/assets/ 2>/dev/null || mkdir -p dist/assets

# Copy index.html to the root for fallback
cp -f dist/public/index.html dist/index.html

# Update index.html to use correct asset paths
echo "Updating asset paths in index.html..."
sed -i.bak 's|/assets/|/assets/|g' dist/index.html

# Echo completion
echo "✅ Build completed successfully" 