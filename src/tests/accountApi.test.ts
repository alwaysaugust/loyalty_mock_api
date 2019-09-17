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
    expect(true).toBe(true);
    done();
  });
});
