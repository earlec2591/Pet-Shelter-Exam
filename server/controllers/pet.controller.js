const Pet = require('../models/pet.models');

// module.exports.index = (req, res) => {
//   res.json({
//     message: "Hello World"
//   });
// }

module.exports = {
  getAll: (req, res) => {
    Pet.find({})
    .then((allPets) => {
      console.log("in all pets");
      console.log(allPets);
      res.json(allPets)
    })
    .catch((err) => {
      console.log("Error found in getAll");
      res.json(err);
    })
  },
  create: (req, res) => {
    console.log(req.body);
    Pet.create(req.body)
      .then((newPet) => {
        console.log("in create");
        console.log(newPet)
        res.json(newPet);
      })
      .catch((err) => {
        console.log("Error found in create");
        res.json(err);
      })
  }, 
  getOne: (req, res) => {
    console.log(req.params.id);

    Pet.findById(req.params.id)
    .then((onePet) => {
      console.log("in get one pet");
      console.log(onePet);
      res.json(onePet);
    })
    .catch((err) => {
      console.log("Error found in getOne");
      res.json(err);
    })
  },
  update: (req, res) => {
    console.log(req.params.id);

    Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // give new version on update
      runValidators: true, // by default mongoose will not validate on updates
    })
    .then((updatedPet) => {
      console.log("in update pet");
      console.log(updatedPet);
      res.json(updatedPet);
    })
    .catch((err) => {
      console.log("Error found in update");
      res.json(err);
    })
  },

  delete: (req, res) => {
  console.log(req.params.id);

  Pet.findByIdAndDelete(req.params.id)
  .then((deletedMovie) => {
    console.log("in delete pet");
    console.log(deletedMovie);
    res.json(deletedMovie);
  })
  .catch((err) => {
    console.log("Error found in delete");
    res.json(err);
  })
},
}
