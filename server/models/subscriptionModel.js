import mongoose from "mongoose";

const SubscriptionSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
});

const SubscriptionData = mongoose.model("subscriptionData", SubscriptionSchema);

export default SubscriptionData;
