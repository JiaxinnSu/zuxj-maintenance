import { resolve } from 'path';

export const rootPath = resolve(__dirname, '..');

export const srcPath = resolve(rootPath, 'src');

export const pagesSrcPath = resolve(srcPath, 'pages');

export const distPath = resolve(rootPath, 'dist');

export const pagesDistPath = resolve(distPath, 'pages');

export default {
    rootPath,
    srcPath,
    pagesSrcPath,
    distPath,
    pagesDistPath
}
