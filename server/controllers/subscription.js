import SubscriptionData from "../models/subscriptionModel.js";

export const getSubbedUser = async (req, res) => {
  try {
    const users = await SubscriptionData.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

export const createSubUser = async (req, res) => {
  const user = req.body;

  const newUser = new SubscriptionData(user);

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
