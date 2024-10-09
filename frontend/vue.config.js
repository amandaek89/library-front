module.exports = {
    devServer: {
        port: 8080, // Port för utvecklingsservern
        proxy: {
            '/': {
                target: 'http://webbooks-env.eba-v82kmmpj.eu-north-1.elasticbeanstalk.com:5000', // API-backend
                changeOrigin: true,
            },
        },
    },
};
