'use strict';

export default {

  browserPort: 3000,
  UIPort: 3001,

  sourceDir: './src/',
  buildDir: './build/',

  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/css',
    prodSourcemap: false,
    sassIncludePaths: []
  },

  scripts: {
    src: 'src/js/**/*.js',
    dest: 'build/js'
  },

  images: {
    src: 'src/images/**/*',
    dest: 'build/images'
  },

  fonts: {
    src: ['src/fonts/**/*'],
    dest: 'build/fonts'
  },

  assetExtensions: [
    'js',
    'css',
    'png',
    'jpe?g',
    'gif',
    'svg',
    'eot',
    'otf',
    'ttc',
    'ttf',
    'woff2?'
  ],
  
  views: {
    src: 'src/*.html',
    dest: 'build'
  },

  gzip: {
    src: 'build/**/*.{html,xml,json,css,js,js.map,css.map}',
    dest: 'build/',
    options: {}
  },

  browserify: {
    bundleName: 'main.js',
    prodSourcemap: false
  },
  
  deploy: {
    
    awsS3: {
      bucket: false,
      key: '',
      secret: ''
    },
    
    sftp: {
      host: false,
      user: '',
      pass: ''
    }
    
  }

  init: function() {
    return this;
  }

}.init();
