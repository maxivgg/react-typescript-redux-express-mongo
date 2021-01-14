module.exports = (mongoose) => {
  const Posts = mongoose.model(
    "posts",
    mongoose.Schema({
      _id: {
        type: mongoose.Schema.Types.ObjectId,
      },
      userId: Number,
      id: String,
      title: String,
      body: String,
    })
  );
  return Posts;
};
