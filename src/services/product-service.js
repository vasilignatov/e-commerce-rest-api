const Product = require('../models/Product.js');

exports.create = (data) => Product.create(data);

exports.getAll = () => Product.find({});

exports.getById = (id) => Product.findById(id);

exports.getLastAdded = () => {
    return Product
        .find({})
        .sort({createdAt: -1})
        .limit(3);
}


exports.getProductsCategoriesInfo = () => {
    return Product.aggregate([
        {
          $match: {
            sex: { $in: ['male', 'female'] },
          },
        },
        {
          $group: {
            _id: {
              sex: '$sex',
              category: '$category',
            },
            count: { $sum: 1 },
          },
        },
        {
          $group: {
            _id: '$_id.sex',
            categories: {
              $push: {
                category: '$_id.category',
                count: '$count',
              },
            },
          },
        },
        {
          $project: {
            _id: 0,
            sex: '$_id',
            categories: 1,
          },
        },
      ])
      .exec()
      .then((result) => {
        const data = {};
      
        result.forEach((item) => {
          data[item.sex] = item.categories.reduce((acc, category) => {
            acc[category.category] = category.count;
            return acc;
          }, {});
        });
      
        return data;
      })
      .catch((error) => {
        console.error(error);
      }); 
}