const Product = require('../models/Product.js');

exports.create = (data) => Product.create(data);

exports.getAll = () => Product.find({});

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
        _id: { sex: "$sex", subCategory: "$subCategory" },
        count: { $sum: 1 }
      }
    },
    {
      $group: {
        _id: "$_id.sex",
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
        sex: "$_id",
        subcategories: 1
      }
    }
  ])
    .exec()
    .then((results) => {
      const data = results.reduce((acc, result) => {
        acc[result.sex] = {};
        result.subcategories.forEach((subcategory) => {
          acc[result.sex][subcategory.subCategory] = subcategory.count;
        });
        return acc;
      }, {});
      return data;
    });
}