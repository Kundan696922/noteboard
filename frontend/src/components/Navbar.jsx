import React, { useState } from 'react'
import { Link } from 'react-router'
import { PlusIcon } from 'lucide-react'
import { NotebookPen } from 'lucide-react'


const Navbar = ({ setSearch}) => {

  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearch(value);
  };

  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary font-mono tracking-tight">
            NoteBoard
          </h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search"
              value={query}
              onChange={handleSearch}
              className="input input-bordered w-24 md:w-auto"
            />
            <Link to={"/create"} className="btn btn-primary">
              {/* <PlusIcon className="size-5" /> */}
              <NotebookPen className="size-5" />
              {/* <span>New Note</span> */}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
