import {Configuration} from 'webpack';
import { pagesCommonConfig } from "./webpack.config.pages.common";
import { merge } from 'webpack-merge';

const config: Configuration = {
    mode: 'production',
}

export default merge(pagesCommonConfig, config);
