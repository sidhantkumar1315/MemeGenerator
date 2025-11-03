const request = require("supertest");
const app = require("../server/server.js")

describe("Meme API", () => {
    it("should return valid meme image url", async() => {
        const res = await request(app).get("/api/meme");
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("url")
    })

    it("should display an random meme image when template is random", async() => {
        const res = await request(app).get("/api/meme?template=random");
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty("url")
        expect(res.body.url).toContain("random")
    })
})