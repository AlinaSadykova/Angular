const Pets = require("./models")
// readAll
function readAll(req, res) {
    Pets.find({})
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
// readOne
function readOne(req, res) {
    Pets.findById(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

// deleteOne
function deletePets(req, res) {
    Pets.findByIdAndRemove(req.params.id)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

// editOne
function editPets(req, res) { // with added runValidators
    Pets.findByIdAndUpdate(req.params.id, req.body, {
            runValidators: true,
            context: "query"
        })
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}

// createOne
function createPets(req, res) {
    Pets.create(req.body)
        .then(data => res.json(data))
        .catch(errs => res.json(errs));
}
module.exports = {
    readAll: readAll,
    readOne: readOne,
    deletePets: deletePets,
    editPets: editPets,
    createPets: createPets
};
