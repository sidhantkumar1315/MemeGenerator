const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../client/index.html"), "utf8");

describe("Meme generator UI", () => {
    let dom, document;

    beforeEach(() => {
        dom = new JSDOM(html);
        document = dom.window.document;
    })

    it("should have an meme form", () => {
        const memeForm = document.querySelector('#meme-form')
        expect(memeForm).not.toBeNull();
    })

    it("should have a get meme button", () => {
        const btn = document.querySelector("#getMemeBtn")
        expect(btn.textContent).toBe("Get Meme")
    })
})