const { exec, spawn } = require('child_process');
const buildGatsby = () => {
  //Rebuild
  /*exec('sh rebuild.sh', (error, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    if (error !== null) {
      console.log(`exec error: ${error}`);
    }
  });*/
  const process = spawn('bash', ['/home/tauri/rebuild.sh']);
  process.on('exit', (code) => {
    console.log('Child exited');
  });
};
buildGatsby();
