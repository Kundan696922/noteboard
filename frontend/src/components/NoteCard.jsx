import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import { Link } from 'react-router'
import { formatDate } from '../lib/utils';
import api from '../lib/axios';
import toast from 'react-hot-toast';
import { Pin, PinOff } from 'lucide-react';

const NoteCard = ({ note, setNotes }) => {


    const togglePin = () => {
        setNotes((prev) =>
        prev.map((n) =>
            n._id === note._id ? { ...n, pinned: !n.pinned } : n
        )
        );
        toast.success(note.pinned ? "Note unpinned" : "Note pinned");
    };
    
    async function handleDelete(e, id) {
        e.preventDefault();

        if (!window.confirm("Are you sure you want to delete this note?")) return;

        try {
            await api.delete(`/notes/${id}`);
            setNotes((prev) => prev.filter(note => note._id !== id));
            toast.success("Note deleted successfully");
        } catch (error) {
            console.log("Error in handleDelete", error);
            toast.error("Failed to delete note");
        }

    }

    return (
      <div
        // to={`/notes/${note._id}`}
        className="card bg-base-100 hover:shadow-lg transition-all duration-200 border-t-4 border-solid border-[#00ffff]"
      >
        <div className="card-body">
          <div className="flex justify-between">
            <h3 className="card-title text-base-content">{note.title}</h3>
            <button
              onClick={togglePin}
              className="absolute top-3 right-3 text-primary"
            >
              {note.pinned ? (
                <PinOff className="size-5" />
              ) : (
                <Pin className="size-5" />
              )}
            </button>
          </div>
          <p className="text-base-content/70 line-clamp-3">{note.content}</p>
          <div className="card-actions justify-between items-center mt-4">
            <span className="text-sm text-base-content/60">
              {formatDate(new Date(note.createdAt))}
            </span>
            <div className="flex items-center gap-1">
              <Link to={`/notes/${note._id}`}>
                <PenSquareIcon className="size-4" />{" "}
              </Link>
              <button
                className="btn btn-ghost btn-xs text-error"
                onClick={(e) => handleDelete(e, note._id)}
              >
                <Trash2Icon className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default NoteCard;
