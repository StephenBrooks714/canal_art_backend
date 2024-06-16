const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const mongoosePaginate = require('mongoose-paginate-v2');

const ProgramsSchema = new Schema({
    id: {
        type: String,
        default: ObjectId.toString()
    },
    title: String,
    image: String,
    description: String
});

ProgramsSchema.searchIndex( {
    title: 'text',
    description: 'text'
})
ProgramsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Programs', ProgramsSchema)