/**
 * Sample to test the module usage locally
 */

var fastestServerCheck = require('./index');

const check = async () => {
  let servers = [ {url:"http://google.com", priority:4}, {url:"http://doesNotExist.boldtech.co", priority:1},{url:"http://boldtech.co", priority:7},{url:"http://offline.boldtech.co", priority:2},{url:"https://github.com/AamirAlam/fastest-server-check",priority:5}]
  try {
    var result = await fastestServerCheck(servers);
    console.log(result);  
  } catch (error) {
    console.log(error)
  }
}
check();