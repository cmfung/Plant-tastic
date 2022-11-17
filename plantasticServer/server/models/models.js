const db = require('../db/mongoSchemas')

module.exports ={
  addNewUser: (userObj) => {
    const filter = {user_name: userObj.user_name};
    const update = userObj;
    const options = {upsert: true};
    return db.findOneAndUpdate(filter, update, options)
  },
  addToWishList: (userObj) => {
    return db.updateOne({user_name: userObj.user_name}, { $push: {user_wanted: userObj.plant_name}} )
  },
  addToOwned: (userObj) => {
    return db.updateOne({user_name: userObj.user_name}, { $push: {user_owned: userObj.plant_name}} )
  },
  getAll: () => {
    return db.find();
  }
}