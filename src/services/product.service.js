const Product = require('../models/Product.js');

exports.create = (data) => Product.create(data);

exports.getProducts = (gender, category) => {
  if (gender && category) {
    return Product.find({ gender, subCategory: category });
  }
  return Product.find({});
}

exports.getById = (id) => Product.findById(id);

exports.getLastAdded = () => {
  return Product
    .find({})
    .sort({ createdAt: -1 })
    .limit(3);
}

exports.getProductsCategoriesInfo = () => {
  return Product.aggregate([
    {
      $group: {
        _id: { gender: "$gender", subCategory: "$subCategory" },
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: "$_id.gender",
        subcategories: {
          $push: {
            subCategory: "$_id.subCategory",
            count: "$count"
          }
        }
      }
    },
    {
      $project: {
        _id: 0,
        gender: "$_id",
        subcategories: 1
      }
    }
  ])
    .exec()
    .then((results) => {
      const data = results.reduce((acc, result) => {
        acc[result.gender] = {};
        result.subcategories.forEach((subcategory) => {
          acc[result.gender][subcategory.subCategory] = subcategory.count;
        });
        return acc;
      }, {});
      return data;
    });
}