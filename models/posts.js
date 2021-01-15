module.exports = (mongoose) => {
  const Posts = mongoose.model(
    "posts",
    mongoose.Schema({
      userId: Number,
      id: String,
      title: String,
      body: String,
    })
  );
  return Posts;
};
