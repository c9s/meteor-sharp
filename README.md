# meteor-sharp

Lovell Fuller's [sharp](http://github.com/lovell/sharp) bindings to the libvips image processing library, packaged for Meteor.

For full documentation, visit [sharp.dimens.io](http://sharp.dimens.io/).

For sample use, see the  [meteor-sharp-demo](https://github.com/bdunnette/meteor-sharp-demo) repository.

## publishing

    meteor publish

    meteor admin get-machine os.linux.x86_64
    meteor publish-for-arch c9s:sharp@0.16.2

    meteor admin get-machine os.osx.x86_64
    meteor publish-for-arch c9s:sharp@0.16.2
