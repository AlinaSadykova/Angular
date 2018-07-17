const Tasks = require("./models")

function readAll(req, res)
{
    Tasks.find({})
        .then(data=>res.json(data))
        .catch(errs=>res.json(errs));
}

function readOne(req,res)
{
    Tasks.findById(req.params.id)
    .then(data=>res.json(data))
    .catch(errs=>res.json(ers));
}
function deleteOne(req,res)
{
    Tasks.findByIdAndRemove(req.params.id)
    .then(data=>req.json(data))
    .catch(errs=>res.json(errs))
    console.log("I'm here!")
}
function updateOne(req,res)
{
    Tasks.findByIdAndUpdate(req.params.id, req.body)
    .then(data=>req.json(data))
    .catch(errs=>res.json(errs))
}
function createOne(req,res)
{
    Tasks.create(req.body)
    .then(data=>res.json(data))
    .catch(errs=>res.json(errs));
}
module.exports = {
    readAll: readAll,
    readOne: readOne,
    deleteOne: deleteOne,
    updateOne: updateOne,
    createOne: createOne
};

