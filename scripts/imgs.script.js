'use strict';

/**
 * @author Tanase Butcaru
 * {@link https://butcaru.com/nodejs-image-compression-tool/}
 */

let imagemin = require('imagemin');
let pngquant = require('imagemin-pngquant');
let mozjpeg = require('imagemin-mozjpeg');

let input = "./src/imgs/";
let output = "./dist/imgs/";

let imageCompressorRun = (input, output, plugins) => {
  return imagemin(input, output, { plugins });
};

let compressorPlugins = [
    mozjpeg(),
    pngquant({ speed: 3, quality: '90' })
];

imageCompressorRun([`${input}/*.{jpg,jpeg,png}`], output, compressorPlugins);
