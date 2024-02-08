import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LinksSchema = new Schema({
    shortUrl: String,
    originalUrl: {
        type: String,
        required: true,
    },
})

const Links = mongoose.model('Links', LinksSchema);
export default Links;