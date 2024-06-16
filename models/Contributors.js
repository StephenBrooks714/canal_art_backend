const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongoosePaginate = require('mongoose-paginate-v2');

const ContributorsSchema = new Schema({
    id: {
        type: String,
        default: ObjectId.toString()
    },
    name: String,
    image: String,
    about: String
});

ContributorsSchema.searchIndex( {
    name: 'text',
    about: 'text'
})
ContributorsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Contributors', ContributorsSchema)