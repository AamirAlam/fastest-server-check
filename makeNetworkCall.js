var request = require("request");

/**
 * Returns lowest priority available server
 * @param {String} url
 * @return {Number}
 */
const call_timout = 5000;
const makeNetworkCall = async (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        reject(-99);
      }, call_timout);
  
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

  module.exports = makeNetworkCall;