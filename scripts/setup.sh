#!/bin/bash

echo "🚀 Setting up Anibal's Portfolio Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create missing image files (placeholders)
echo "🖼️  Setting up image assets..."

# Create public directory if it doesn't exist
mkdir -p public/imgs

# Copy images from imgs directory to public/imgs
if [ -d "imgs" ]; then
    cp -r imgs/* public/imgs/ 2>/dev/null || echo "⚠️  Some images may not have copied correctly"
    echo "✅ Images copied to public directory"
else
    echo "⚠️  imgs directory not found"
fi

# Copy resume to public directory
if [ -f "Tech Resume 2024.pdf" ]; then
    cp "Tech Resume 2024.pdf" public/ 2>/dev/null || echo "⚠️  Resume may not have copied correctly"
    echo "✅ Resume copied to public directory"
else
    echo "⚠️  Resume file not found"
fi

echo ""
echo "🎉 Setup complete! You can now run:"
echo "   npm run dev    # Start development server"
echo "   npm run build  # Build for production"
echo ""
echo "🌐 Open http://localhost:3000 to view your portfolio"
echo ""
echo "📝 Next steps:"
echo "   1. Customize content in component files"
echo "   2. Update images and resume"
echo "   3. Modify colors in tailwind.config.js"
echo "   4. Deploy to your preferred hosting platform"
