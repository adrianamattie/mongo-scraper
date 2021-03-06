var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var ArticleSchema = new Schema({
  headline: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    required: true
  }
});


var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;