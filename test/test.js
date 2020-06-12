"use strict";

var expect = require("chai").expect;
var fastestServerCheck = require("../index");

describe("#moduleResponseCheck()", () => {
  it("should recieve a valid response on success or failure", async () => {
    let servers = [
      { url: "http://google.com", priority: 4 }
    ];
    try {
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
    } catch (error) {
      console.log("error in catch block found");
      expect(error).to.be.a("object");
      expect(error).to.have.property("success");
      expect(error).to.have.property("message");
      expect(error).to.have.property("url");
      expect(error).to.have.property("priority");
      expect(error).to.have.property("response_time");
      expect(typeof error.response_time).to.equal("number");
      expect(typeof error.url).to.eqls("string");
      expect(typeof error.priority).to.eqls("number");
    }
  });
});

describe("#moduleResponseCheck()", () => {
  it("should recieve a valid response on success or failure", async () => {
    let servers = [
      { url: "http://google.com", priority: 4 },
      { url: "http://doesNotExist.boldtech.co", priority: 1 },
      { url: "http://boldtech.co", priority: 7 },
      { url: "http://offline.boldtech.co", priority: 2 },
    ];
    try {
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
    } catch (error) {
      console.log("error in catch block found");
      expect(error).to.be.a("object");
      expect(error).to.have.property("success");
      expect(error).to.have.property("message");
      expect(error).to.have.property("url");
      expect(error).to.have.property("priority");
      expect(error).to.have.property("response_time");
      expect(typeof error.response_time).to.equal("number");
      expect(typeof error.url).to.eqls("string");
      expect(typeof error.priority).to.eqls("number");
    }
  });
});
