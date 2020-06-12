"use strict";

var expect = require("chai").expect;
var fastestServerCheck = require("../index");
var makeNetworkCall = require("../makeNetworkCall");

describe("#successResponse", () => {
  it("should recieve a valid response on finding an online server", async () => {
    let servers = [{ url: "http://google.com", priority: 4 }];

    var result = await fastestServerCheck(servers);
    expect(result).to.be.a("object");
    expect(result).to.have.property("success");
    expect(result).to.have.property("message");
    expect(result).to.have.property("url");
    expect(result).to.have.property("priority");
    expect(result).to.have.property("response_time");
    expect(typeof result.response_time).to.equal("number");
    expect(typeof result.url).to.eqls("string");
    expect(typeof result.priority).to.eqls("number");
  });
});

describe("#failureResponse", () => {
  it("should recieve a valid response when all the servers are offline", async () => {
    let servers = [
      { url: "http://doesNotExist.boldtech.co", priority: 1 },
      { url: "http://offline.boldtech.co", priority: 2 },
    ];
    try {
      var result = await fastestServerCheck(servers);
    } catch (error) {
      console.log("error in catch block found");
      expect(error).to.be.a("object");
      expect(error).to.have.property("success");
      expect(error).to.have.property("message");
    }
  });
});
/**
 * @description Make network call should always resolve or reject a number
 */

describe("#networkCallModule", () => {
  it("should makeNetworkCall module resolve a valid output", async () => {
    const url = "http://google.com";
    var result = await makeNetworkCall(url);
    console.log(result);
    expect(typeof result).equal(typeof 12);
  });
});

describe("#networkCallModule", () => {
  it("should makeNetworkCall module reject a valid output", async () => {
    const url = "http://doesNotExist.boldtech.co";
    try {
      var result = await makeNetworkCall(url);
    } catch (error) {
      expect(typeof error).equal(typeof -12);
    }
  });
});
