// main.js



// chain the functions with promises
preloadAssets()
  .then(() => {
    // displayPreloadedImages();
    loaderCurtain('hide');
    gameLoop();
  })
  .catch(() => {
    console.error('Error in asset preload.');
  });


function gameLoop() {
  const canvas = document.getElementById("main-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1280;
  canvas.height = 720;
}

