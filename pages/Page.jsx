import React from "react";
import { useParams } from "react-router-dom";

const Page = () => {
  const { pageId } = useParams(); // Grab the page ID from the URL

  return (
    <div className="page">
      <h1>{pageId === "0" ? "Landing Page" : `Page ${pageId}`}</h1>
    </div>
  );
};

export default Page;
