const api = require("./controllers")
const bp = require("body-parser")
//import read all

function router(app)
{
    app.use(bp.json())
    app.get("/api/tasks", api.readAll);
    app.get("/api/tasks/:id", api.readOne);
    app.delete("/api/tasks/id", api.deleteOne);
    app.patch("/api/tasks/:id", api.updateOne);
    app.post("/api/tasks", api.createOne);
}

module.exports = router;