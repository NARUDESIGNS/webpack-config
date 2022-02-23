module.exports = {
    "mode": "development",
    "module": {
        "rules": [
            {
                "test": /\.(png|jpe?g|gif|svg)$/i,
                "type": "asset/resource",
            },
            {
                "test" : /\.js$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader",
                },
            },
        ],
    },
    "devtool": false,
    devServer: {
        static: './'
    },
};