import React, { useState } from "react";

import img1 from "../assets/project1.jpg";
import img2 from "../assets/project2.jpg";
import img3 from "../assets/project3.jpg";
import img4 from "../assets/project4.jpg";
import img5 from "../assets/project5.jpg";
import img6 from "../assets/project6.jpg";

const categories = ["View All", "Software", "New Project", "Digitals", "Hardware"];

const projectImages = [img1, img2, img3, img4, img5, img6];

const ProjectsSection = () => {
  const [active, setActive] = useState("View All");

  return (
    <section className="py-20 px-6 md:px-16 font-jakarta">

      <div className="text-center mb-4">
        <span className="px-5 py-2 bg-gray-100 text-gray-700 rounded-full text-sm shadow-sm">
          Gallery Here
        </span>
      </div>

      <h2 className="text-3xl md:text-5xl text-center font-bold text-gray-900 mb-10">
        Latest <span className="text-blue-600">Project</span> Are Here
      </h2>

      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
              active === cat
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 border hover:bg-blue-50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {projectImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="project"
            className="w-full rounded-xl shadow-md hover:scale-[1.02] transition duration-300"
          />
        ))}
      </div>

    </section>
  );
};

export default ProjectsSection;
