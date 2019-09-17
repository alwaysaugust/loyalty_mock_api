// tslint:disable: no-console
import * as mongoose from "mongoose";
import { config } from "../config/server";
import { server } from "../index";
jest.setTimeout(20000);
describe("server test", () => {
  beforeAll(async () => {
    await server.ready();
  });
  afterAll(async done => {
    mongoose.connection.dropDatabase(err => {
      console.log({ err });
      console.log("deleted test database");
      server.close();
      done();
    });
  });

  test("expected responce on GET /api/tokens/:owner", async done => {
    const response = await server.inject({
      method: "GET",
      url:
        "/api/tokens/0xa027d25c5c371e8b7feb6bf8d9767e9a34d169c5f310b6a1dc58ec780f389584"
    });
    console.log(response.payload);
    expect(response.statusCode).toBe(500);
    done();
  });

  test("expected responce on POST /api/tokens", async done => {
    const response = await server.inject({
      method: "POST",
      url: "/api/tokens",
      payload: {
        name: "test token",
        symbol: "abc",
        supply: 12345,
        signingKey:
          "0x313535343332323931323036302b313535343332323931323036303a73656564a546d2a3656885a29b43abd3f7bed87fc1081ae79580e9b6f8dffdca59509959"
      }
    });
    console.log(response.payload);
    expect(response.statusCode).toBe(200);
    expect(response.payload).not.toBe(null);
    done();
  });
  test("expected responce on GET /api/tokens/:owner", async done => {
    const response = await server.inject({
      method: "GET",
      url:
        "/api/tokens/0xa027d25c5c371e8b7feb6bf8d9767e9a34d169c5f310b6a1dc58ec780f389584"
    });
    console.log(response.payload);
    expect(response.statusCode).toBe(200);
    expect(response.payload).not.toBe(null);
    done();
  });
});
