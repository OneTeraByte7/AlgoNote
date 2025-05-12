import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="px-4 py-6 max-w-3xl mx-auto text-blue-900">
      <h2 className="text-3xl font-bold mb-4">About AlgoNote</h2>
      <p className="mb-4">
        AlgoNote is a beginner-friendly note-taking platform built with React. It allows users to create, store, and view their notes easily using browser localStorage.
      </p>
      <p className="mb-4">
        This project was created as part of a full stack assignment. The goal was to demonstrate React hooks, routing, and a friendly UI that builds user trust.
      </p>
      <Link to="/" className="text-blue-600 hover:underline">← Go back to Landing Page</Link>
    </div>
  );
}

export default About;
