import supertest from "supertest";
import app from "../src/index.js";

const request = supertest(app);

it("returns the home page with message", async () => {
  const res = await request.get("/");
  expect(res.status).toBe(200);
});

describe("get requests route", () => {
  test("Gets all questions", async () => {
    // Sends GET Request to /questions endpoint
    const res = await request.get("/api/v1/questions");

    expect(res.status).toBe(200);
    expect(res.body[0].id).toEqual(1);
    // ...
  });

  test("Gets all answers", async () => {
    // Sends GET Request to /answers endpoint
    const res = await request.get("/api/v1/answers");

    expect(res.status).toBe(200);
    // ...
  });

  test("Gets answers for 1 qtn", async () => {
    // Sends GET Request to /answers endpoint
    const res = await request.get("/api/v1/answers/1");

    expect(res.status).toBe(200);
    expect(res.body[0].qtnId).toEqual(1);
    // ...
  });

  // // If the answer to the qtn is not there but the qtn is there.
  // test("Gets answers for 1 qtn that has no answers yet", async () => {
  //   // Sends GET Request to /answers endpoint
  //   const res = await request.get("/api/v1/answers/2");

  //   expect(res.status).toBe(200);
  //   expect(res.body.message).toBe("We don't have an answer to this question");
  //   // ...
  // });

  //If the answer to the qtn you are looking for is not there
  test("Get answers for 6 qtn that isnt there", async () => {
    // Sends GET Request to /answers endpoint
    const res = await request.get("/api/v1/answers/6");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Question was not found");
    // ...
  });

  test("Gets 1 question", async () => {
    // Sends GET Request to /questions/1 endpoint
    const res = await request.get("/api/v1/questions/1");

    expect(res.status).toBe(200);
    expect(res.body.id).toEqual(1);
  });

  test("if the question does not exist", async () => {
    // Get request to /api/v1/questions/6 non-existent question
    const res = await request.get("/api/v1/questions/6");
    expect(res.status).toBe(404);
    expect(res.body.message).toEqual("Question was not found");
  });
});
