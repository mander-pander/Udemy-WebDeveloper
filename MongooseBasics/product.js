const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("connection open!")
})
.catch(err => {
    console.log("Uh oh! Error!")
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'We have to charge for products!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }
});

// productSchema.methods.greet = function () {
//     console.log("Hello! Hi! Howdy!")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save;
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, {onSale: true, price: 0})
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Helmet'});
    // foundProduct.onSale = !foundProduct.onSale
    // foundProduct.save()
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}


Product.fireSale().then(res => console.log(res))
// findProduct();



// const bike = new Product({ name: 'Cycling Jersey', price: 29.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
// .then(data => {
//     console.log('It worked!')
//     console.log(data);
// })
// .catch(err => {
//     console.log('Uh oh, error!')
//     console.log(err)
// })

//runValidators: true - produces error if schema requirements not met

// String

//     lowercase: boolean, whether to always call .toLowerCase() on the value
//     uppercase: boolean, whether to always call .toUpperCase() on the value
//     trim: boolean, whether to always call .trim() on the value
//     match: RegExp, creates a validator that checks if the value matches the given regular expression
//     enum: Array, creates a validator that checks if the value is in the given array.
//     minLength: Number, creates a validator that checks if the value length is not less than the given number
//     maxLength: Number, creates a validator that checks if the value length is not greater than the given number
//     populate: Object, sets default populate options

// Number

//     min: Number, creates a validator that checks if the value is greater than or equal to the given minimum.
//     max: Number, creates a validator that checks if the value is less than or equal to the given maximum.
//     enum: Array, creates a validator that checks if the value is strictly equal to one of the values in the given array.
//     populate: Object, sets default populate options

// Date

//     min: Date
//     max: Date

// ObjectId

//     populate: Object, sets default populate options
