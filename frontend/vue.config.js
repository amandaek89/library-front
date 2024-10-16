module.exports = {
    devServer: {
        port: 8080, // Port för utvecklingsservern
        proxy: {
            '/': {
                target: 'http://localhost:8081', // API-backend
                changeOrigin: true,
            },
        },
    },
};
