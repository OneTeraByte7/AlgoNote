import React from 'react';
import { Link } from 'react-router-dom';
import { MdNoteAdd, MdLibraryBooks, MdInfo } from 'react-icons/md'; 

function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-blue-900 flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-center">Welcome to AlgoNote</h1>
      <p className="text-lg text-center mb-6 max-w-xl">
        A place where you can write your thoughts, share your stories, or just keep notes for yourself.
        Simple. Safe. Trusted.
      </p>

      <div className="space-y-4 w-full max-w-sm">
        <Link to="/add">
          <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <MdNoteAdd size={20} /> Add a New Note
          </button>
        </Link>
        <Link to="/home">
          <button className="w-full bg-white text-blue-800 py-3 rounded hover:bg-blue-100 transition flex items-center justify-center gap-2">
            <MdLibraryBooks size={20} /> View All Notes
          </button>
        </Link>
        <Link to="/about">
          <button className="w-full bg-white text-gray-800 py-3 rounded hover:bg-gray-200 transition flex items-center justify-center gap-2">
            <MdInfo size={20} /> About This App
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
