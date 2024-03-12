const nextConfig = {
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200], // Define sizes for different devices
        imageSizes: [16, 32, 48, 64], // Define sizes for different image breakpoints
        loader: 'default', // Use the default image loader
        path: '/_next/image', // Define the path for the optimized images
        minimumCacheTTL: 60, // Define minimum cache time-to-live for optimized images (in seconds)
    },
};

export default nextConfig;
