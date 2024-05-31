import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const ArticleModel = mongoose.model("article", ArticleSchema);

export default ArticleModel;
