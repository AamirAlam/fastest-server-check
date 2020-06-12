"use strict";

var request = require("request");
/**
 * Returns lowest priority available server
 * @param {Array} servers
 * @return {Object}
 */

const makeNetworkCall = async (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      reject(-99);
    }, 5000);

    request.get(
      {
        url: url,
        time: true
      },
      function (err, response) {
        if (err) {
          //   console.log(err);
          return reject(-99);
        }
        if(response.statusCode >= 200 && response.statusCode <= 299){
            return resolve(response.elapsedTime);
        }else{
            return reject(-99);
        }
      }
    );
  });
};

module.exports = function (servers) {
  return new Promise(async (resolve, reject) => {
    let serverResults = {};

    await Promise.all(
      servers.map(async (server, index) => {
        try {
          serverResults[`${server.url}`] = await makeNetworkCall(server.url);
        } catch (error) {
          serverResults[`${server.url}`] = error;
        }
      })
    );

    console.log(serverResults)
    let fastest_server = {};
    let response_time;
    let priority = 9999;
    servers.map((server) => {
      if (
        serverResults[`${server.url}`] > 0 &&
        server.priority < priority
      ) {
        response_time = serverResults[`${server.url}`];
        fastest_server = server;
        priority = server.priority;
      }
    });
    // if no server get resolved by non negative time
    if (priority === 9999) {
      return reject({ message: "All servers are offline",success:false,url:"",priority:-1,response_time:-1 });
    }
    fastest_server.success = true;
    fastest_server.message = "Server found"
    fastest_server.response_time = response_time;
    return resolve(fastest_server);
  });
};
