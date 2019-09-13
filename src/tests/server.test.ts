import { server } from "../index";

describe("server test", () => {
  beforeAll(async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    await server.ready();
  });
  afterAll(() => {
    server.close();
  });

  test("responds with success on request /", async done => {
    const response = await server.inject({
      method: "GET",
      url: "/api/tokens"
    });

    expect(response.statusCode).toBe(200);
    expect(response.payload).not.toBe(null);
    done();
  });
});
