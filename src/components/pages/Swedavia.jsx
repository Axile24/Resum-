import React from "react";
import { useParams } from "react-router-dom"; // To access URL parameters

export default function Swedavia() {
  const { title } = useParams(); // Get the title from URL parameters

  return (
    <div>
      <h2>Details about {title}</h2>
      {/* You can display detailed information here */}
      <p>This page will contain more information about {title} and its relevance to your experience at Swedavia.</p>
    </div>
  );
}
