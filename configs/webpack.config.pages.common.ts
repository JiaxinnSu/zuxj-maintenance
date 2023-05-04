import { Configuration } from "webpack";
import { pagesSrcPath } from "./webpack-paths";
import { resolve } from 'path';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
export const pagesCommonConfig: Configuration = {
    entry: {
        index: resolve(pagesSrcPath, 'index.tsx'),
    },
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json'
                        }
                    }
                ]
            },            
        ]
    },
    resolve: {
       extensions: ['.tsx', '.ts', 'jsx', '.js', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(pagesSrcPath, 'template.html'),
            chunks: ['index'],
        })
    ],
}

