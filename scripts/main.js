// main.js



// chain the functions with promises
preloadAssets()
  .then(() => {
    displayPreloadedImages();
    loaderCurtain('hide');
  })
  .catch(() => {
    console.error('Error in asset preload.');
  });



