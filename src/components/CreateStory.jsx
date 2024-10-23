import React, { useState } from "react";
import { useAuth } from "../store/auth";
const CreateStory = () => {
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const { setStories } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.length < 3) {
      setError("Story must be at least 3 characters long");
      return;
    } else {
      setError("");
      setStories((prev) => [...prev, content]);
      setContent("");
    }
  };

  const setStory = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className="bg-light p-4 rounded mb-4">
      <h2 className="text-dark">Create a Story</h2>
      {error && <div className="alert alert-danger">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="storyText">
          <div className="text-dark">Your Story</div>
          <textarea
            className="text-dark"
            rows={5}
            cols={175}
            style={{ padding: "5px" }}
            value={content}
            name="storyContent"
            onChange={setStory}
            placeholder="Write your story here..."
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateStory;
