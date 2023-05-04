import { Configuration } from "webpack";
import { pagesCommonConfig } from "./webpack.config.pages.common";
import { merge } from 'webpack-merge';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const devServerConfig: DevServerConfiguration = {
    port: 3000,
    open: true,
    hot: true,
}

const config: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: devServerConfig,
}

export default merge(pagesCommonConfig, config);
