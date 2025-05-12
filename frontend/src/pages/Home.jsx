import React, { useEffect, useState } from 'react'; 

import { Link } from 'react-router-dom';

function Home() {
  const [notes, setNotes] = useState([]); 

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  return (
    <div className="px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">All Notes</h2>
        <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Note
        </Link>
      </div>

      {notes.length === 0 ? (
        <p className="text-gray-600">No notes yet. Try adding one!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note, index) => (
            <Link to={`/note/${index}`} key={index}>
              <div className="bg-white rounded shadow p-4 hover:shadow-md transition">
                <h3 className="text-xl font-bold">{note.title}</h3>
                <p className="text-gray-700 mt-2 line-clamp-3">{note.content}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
