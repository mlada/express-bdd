process.env.NODE_ENV = "test";

const app = require("../app");
const server = require("../bin/www");

//Подключаем dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();
chai.use(chaiHttp);

describe("Routes", () => {
  describe("/GET index", () => {
    it("it should render index", done => {
      chai
        .request(server)
        .get("/")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.to.include("<h1>Express</h1>");
          done();
        });
    });
  });
  describe("/GET users", () => {
    it("it should render users", done => {
      chai
        .request(server)
        .get("/users")
        .end((err, res) => {
          res.should.have.status(200);
          res.text.should.to.include("respond with a resource");
          done();
        });
    });
  });
});
