import { resolve } from 'path';

export const rootPath = resolve(__dirname, '..');

export const srcPath = resolve(rootPath, 'src');

export const serviceSrcPath = resolve(srcPath, 'service');

export const distPath = resolve(rootPath, 'dist');

export const serviceDistPath = resolve(distPath, 'service');

export default {
    rootPath,
    srcPath,
    serviceSrcPath,
    distPath,
    serviceDistPath,
};
