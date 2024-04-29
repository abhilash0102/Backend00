const mongoose = require("mongoose");

mongoose
  .connect(
    ""
  )
  .then(() => {
    console.log("order connected");
  })
  .catch((err) => console.log(err));

let mongoschema = mongoose.Schema;

const OrderSchema = new mongoschema({
  itemId: String,
  customerName: String,
  customerAddress: String,
});

var orderModel = mongoose.model("order", OrderSchema);
module.exports = orderModel;
