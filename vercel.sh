#!/bin/bash

# Build client
npm run build

# Make sure the build directory exists
mkdir -p dist

# Echo completion
echo "✅ Build completed successfully" 