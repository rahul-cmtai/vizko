#!/bin/bash

# Build client
npm run build

# Make sure the build directory exists
mkdir -p dist/public
mkdir -p dist/api

# Create the api folder for serverless functions
mkdir -p api

# If favicon.ico doesn't exist in the build output, copy it from the source
if [ ! -f "dist/public/favicon.ico" ]; then
  echo "Copying favicon.ico manually..."
  cp -f client/public/favicon.ico dist/public/
fi

# Copy API files
echo "Copying API files..."
cp -f api/*.js dist/api/

# Copy index.html to the root for fallback
cp -f dist/public/index.html dist/index.html

# Echo completion
echo "✅ Build completed successfully" 