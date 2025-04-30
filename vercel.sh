#!/bin/bash

# Build client
npm run build

# Make sure the build directory exists
mkdir -p dist/public

# If favicon.ico doesn't exist in the build output, copy it from the source
if [ ! -f "dist/public/favicon.ico" ]; then
  echo "Copying favicon.ico manually..."
  cp -f client/public/favicon.ico dist/public/
fi

# Echo completion
echo "✅ Build completed successfully" 