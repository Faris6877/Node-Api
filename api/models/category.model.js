const mongoose = require("mongoose");
const category = mongoose.Model(
  "category",
  mongoose.Schema({
    categoryName: {
      type: String,
      required: true,
      unique: true,
    },
    categoryDes: {
      type: String,
      required: false,
    },
  })
);

module.exports = {
  category,
};
