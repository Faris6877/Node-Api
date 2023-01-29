const { category } = require("../models/category.model");

async function createCategory(params, callback) {
  if (!params.categoryName) {
    return callback(
      {
        massage: "category name is required",
      },
      ""
    );
  }
}

const model = new category(params);
model
  .save()
  .then((response) => {
    return callback(null, response);
  })
  .catch((error) => {
    return callback(error);
  });
