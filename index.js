const axios = require("axios");
const os = require("os");

console.log("");
console.log("EVERSA CLOUD - GITHUB INSTALL TEST");
console.log("Node       :", process.version);
console.log("Axios      :", axios.VERSION);
console.log("Platform   :", process.platform);
console.log("Arch       :", process.arch);
console.log("CPU        :", os.cpus().length);
console.log("Memory     :", Math.round(os.totalmem() / 1024 / 1024), "MB");
console.log("Directory  :", process.cwd());
console.log("Status     : READY");
console.log("");

setInterval(() => {}, 1000);
