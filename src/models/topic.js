import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;

/*
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

This line ensures that if a Topic model already exists (perhaps because it was imported or defined elsewhere), it won't be redefined. If it doesn't exist, it creates a new model using the specified schema. This pattern prevents errors related to model redefinition and ensures consistency in your codebase.
*/
