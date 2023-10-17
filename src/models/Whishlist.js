const mongoose = require('mongoose');

const whishlistSchema = new mongoose.Schema({
    userId: String,
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }
});

const Whishlist = mongoose.model('Whishlist', whishlistSchema);
module.exports = Whishlist;