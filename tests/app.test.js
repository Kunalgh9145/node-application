const request = require("supertest");
const app = require("../app");

describe("Express API Test Cases", () => {

  test("GET / → Home API", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Express server is running 🚀");
  });

  test("GET /api/hello", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello from Kunal");
    expect(res.body.method).toBe("GET");
  });

  test("POST /api/data", async () => {
    const payload = { name: "Kunal", role: "DevOps" };
    const res = await request(app)
      .post("/api/data")
      .send(payload);

    expect(res.statusCode).toBe(200);
    expect(res.body.receivedData).toEqual(payload);
  });

  test("PUT /api/update", async () => {
    const payload = { id: 1, status: "updated" };
    const res = await request(app)
      .put("/api/update")
      .send(payload);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("Data updated");
    expect(res.body.data).toEqual(payload);
  });

  test("DELETE /api/delete", async () => {
    const res = await request(app).delete("/api/delete");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("Data deleted");
  });

});
