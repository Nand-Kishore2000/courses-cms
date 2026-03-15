import { model, Schema, InferSchemaType } from "mongoose";

const CourseSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  is_active: { type: Boolean, default: true },
  is_deleted: { type: Boolean, default: false },
});

type Course = InferSchemaType<typeof CourseSchema>;

export const CourseModel = model("Course", CourseSchema);