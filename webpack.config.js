const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'main.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json', '.svg'],
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                                '@babel/react',
                            ]
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(__dirname, 'tsconfig.json'),
                        },
                    },
                ],
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React App',
            favicon: path.join(__dirname, 'public', 'favicon.ico'),
            filename: 'index.html',
            inject: 'body',
            template: path.resolve('public', 'index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve('public', 'robots.txt'),
                    to: path.resolve('dist', 'robots.txt'),
                }
            ],
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    // Note the usage of `[\\/]` as a path separator for cross-platform compatibility.
                    test: /react|react-dom|react-router/,
                },
            },
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
    },
    stats: {
        children: true,
    },
};
