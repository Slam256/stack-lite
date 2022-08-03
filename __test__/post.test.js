import supertest from "supertest";
import app from "../src/index.js";

const request = supertest(app);

describe("Post requests", () => {
  test("post a question", async () => {
    const res = await request
      .post("/api/v1/questions")
      .send({ title: "Question", description: "This is a question" });
    expect(res.status).toBe(201);
  });

  test("post an answer", async () => {
    const res = await request
      .post("/api/v1/answers/1")
      .send({ ans: "This is answer to qtn1" });
    expect(res.status).toBe(201);
    expect(res.body.message).toBe("Answer added");
  });
  // is question you want to post an answer to doesnt exist.
  test("post an answer for qtn that doesnt exist", async () => {
    const res = await request
      .post("/api/v1/answers/6")
      .send({ ans: "This is answer to qtn6" });
    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Question not found");
  });
});
