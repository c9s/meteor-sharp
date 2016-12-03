import sharp from "meteor/c9s:sharp";

Tinytest.add('sharp', (test) => {
  let imagePath = Assets.absoluteFilePath('test.jpg');
  sharp(imagePath)
    .rotate()
    .resize(200)
    .toBuffer();
  test.equal(true, true);
});
