import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        pinned: { type: Boolean, default: false },
    },
    { timestamps: true } // createdAt, updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;