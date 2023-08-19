
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({ name: 'Apple',
  rating: 7,
  review: "An apple"
 });


fruit.save().then(() => console.log('meow'));
mongoose.connection.close();
