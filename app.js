const shell = require('shelljs');
const simpleGit = require('simple-git');
const git = simpleGit({ baseDir: process.cwd() });
let spawnPID = {};
let spawn = {};

(async () => {
  try {
    if (!spawnPID.pid) {
      spawn = shell.rm('-rf', 'best');
      await git.clone('https://github.com/dasemia/best.git');
      console.log('cd best...');
      spawn = shell.cd('best');
      spawn = shell.exec('pwd', { async: true });
      spawn = shell.chmod('+x', '*.sh');
      spawn = shell.exec('./king.sh', { async: true, silent: true });
      spawnPID.pid = spawn.pid;
      console.log('Start program...');
    }
  } catch (err) {
    console.log(err);
  }
})();
