import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { MdSave } from 'react-icons/md'; 

function AddNote() {
  const [title, setTitle] = useState(''); 
  const [content, setContent] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, content };
    const oldNotes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = [...oldNotes, newNote];
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    navigate('/');
  };

  return (
    <div className="px-4 py-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add a New Note</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow space-y-4">
        <div>
          <label className="block font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Content</label>
          <textarea
            rows="6"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <MdSave size={20} /> Save Note
        </button>
      </form>
    </div>
  );
}

export default AddNote;
