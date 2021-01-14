module.exports = (mongoose) => {
  const Sales = mongoose.model(
    "sales",
    mongoose.Schema({
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      saleDate: Date,
      items: [
        { name: String, tags: [String], price: Number, quantity: Number },
      ],
      storeLocation: String,
      customer: {
        gender: String,
        age: Number,
        email: String,
        satisfaction: Number,
      },
      couponUsed: Boolean,
      purchaseMethod: String,
    })
  );
  return Sales;
};
