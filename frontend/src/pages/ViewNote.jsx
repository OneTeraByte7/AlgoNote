import React, { useEffect, useState } from 'react'; 
import { useParams, Link, useNavigate } from 'react-router-dom';

function ViewNote() {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [note, setNote] = useState(null); 

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    if (id >= 0 && id < notes.length) {
      setNote(notes[id]);
    } else {
      navigate('/');
    }
  }, [id, navigate]);

  return (
    <div className="px-4 py-6 max-w-3xl mx-auto">
      {note ? (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-3xl font-bold mb-4">{note.title}</h2>
          <p className="text-gray-800 whitespace-pre-wrap">{note.content}</p>
          <div className="mt-6">
            <Link to="/" className="text-blue-600 hover:underline">
            Back to Notes
            </Link>
          </div>
        </div>
      ) : (
        <p className="text-gray-600">Note not found.</p>
      )}
    </div>
  );
}

export default ViewNote;
