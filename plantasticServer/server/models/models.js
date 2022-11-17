const { UserOwned, Plants } = require('../db/mongoSchemas')

module.exports ={
  addNewUser: (userObj) => {
    const filter = {user_name: userObj.user_name};
    const update = userObj;
    const options = {upsert: true};
    return UserOwned.findOneAndUpdate(filter, update, options)
  },
  addToWishList: (userObj) => {
    return UserOwned.updateOne({user_name: userObj.user_name}, { $push: {user_wanted: userObj.plant_name}} )
  },
  addToOwned: (userObj) => {
    return UserOwned.updateOne({user_name: userObj.user_name}, { $push: {user_owned: userObj.plant_name}} )
  },
  getAll: () => {
    return UserOwned.find();
  },
  insertMany: (plantArray) => {
    return Plants.insertMany(plantArray);
  },
  getMongoPlants: () => {
    return Plants.find();
  }
}