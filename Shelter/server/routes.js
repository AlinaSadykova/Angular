const api = require("./controllers");
const bp = require("body-parser");

function router(app) {
    app.use(bp.json());
    app.get("/api/pets", api.readAll);
    app.get("/api/pets/:id", api.readOne);
    app.delete("/api/pets/:id", api.deletePets);
    app.patch("/api/pets/:id", api.editPets);
    app.post("/api/pets", api.createPets);
}

module.exports = router;


// app.get("/api/authors/:id")`