Package.describe({
  name: 'c9s:sharp',
  version: '0.16.2',
  // Brief, one-line summary of the package.
  summary: 'Adds bindings to the libvips image processing library',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/bdunnette/meteor-sharp.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "sharp": "0.16.2"
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');
  api.addFiles('sharp.js', 'server');
  api.export('sharp');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('c9s:sharp');
  api.addFiles('sharp-tests.js');
});
