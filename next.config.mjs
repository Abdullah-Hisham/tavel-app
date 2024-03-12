const nextConfig = {
    images: {
        deviceSizes: [320, 420, 768, 1024, 1200],  
        imageSizes: [16, 32, 48, 64], 
        loader: 'default', 
        path: '/_next/image',
        minimumCacheTTL: 60, 
    },
};

export default nextConfig;
