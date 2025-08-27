import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import RateLimitedUI from "../components/RateLimitedUI";
import api from "../lib/axios";


import NoteCard from "../components/NoteCard";
import NoteNotFound from "../components/NoteNotFound";
import toast from "react-hot-toast";

const HomePage = () => {
    const [israteLimited, setIsRateLimited] = useState(false);
    
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const res = await api.get("/notes");
                setNotes(res.data);
                setIsRateLimited(false);
                console.log(res.data);
            } catch (error) {
                console.log("Error fetching notes");
                if (error.response.status === 429) {
                    setIsRateLimited(true);
                } else {
                    toast.error("Failed to load notes");
                }
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    }, []
        
    );

    const filteredNotes = notes
      .filter((note) => note.title.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => (b.pinned === true) - (a.pinned === true));


  return (
    <div className="min-h-screen">
          <Navbar setSearch={ setSearch} />
          {israteLimited && <RateLimitedUI />}
          <div className="max-w-7xl mx-auto p-4 mt-6">
          {loading && <div className="text-center text-primary py-18">Loading notes...</div>}

            {!loading && filteredNotes.length === 0 && !israteLimited && <NoteNotFound/> }
              

          {!loading && filteredNotes.length > 0 && !israteLimited && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  { filteredNotes.map( (note) => ( 
                      <NoteCard key={note._id} note={ note} setNotes={setNotes}/>
                      ))}
              </div>
              )}
        </div>
    </div>
  );
};

export default HomePage;
