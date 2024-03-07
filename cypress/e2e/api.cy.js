/// <reference types='cypress'>
describe("Test Suite - RestFul API", () => {
    it("GET - List of single object", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects/ff8081818dfdd992018e0e8f8c9d0e70",
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.status).to.exist;
            expect(response.body.name).to.equal("Zenfone BH1994");
        });
    });
    it("GET - List of all objects", () => {
        cy.request({
            method: "GET",
            url: "https://api.restful-api.dev/objects",
        }).then((response) => {
            response.body.forEach((device) => {
                expect(device).to.have.property("id");
                expect(device).to.have.property("name");
                expect(device).to.have.property("data");
            });
        });
    });
    it("POST - Add object with success", () => {
        cy.request({
            method: "POST",
            url: "https://api.restful-api.dev/objects",
            body: {
                name: "Zenfone BH1995",
                data: {
                    year: 2026,
                    price: 149.99,
                    "CPU model": "Intel Core i9",
                    "Hard disk size": "2 TB",
                },
            },
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.name).to.equal("Zenfone BH1995");
        });
    });
});
