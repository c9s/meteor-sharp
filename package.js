Package.describe({
  name: 'c9s:sharp',

  version: '0.16.2_4',

  // Brief, one-line summary of the package.
  summary: 'Adds bindings to the libvips image processing library',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/c9s/meteor-sharp.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "sharp": "0.16.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.2');
  api.use('ecmascript');
  api.mainModule('sharp.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ecmascript');
  api.use('c9s:sharp');
  api.addAssets('test.jpg', 'server');
  api.mainModule('sharp-tests.js', 'server');
});
