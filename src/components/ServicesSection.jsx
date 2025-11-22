import React from "react";

const services = [
  {
    title: "Web Development",
    text: "Research ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "UI/UX Design",
    text: "Create ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "Digital Marketing",
    text: "Develope ipsum dolor sit consec tetur sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "Mobile App",
    text: "Shop ipsum dolor sit consec tetur Malesuada sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "SEO",
    text: "Shop ipsum dolor sit consec tetur Malesuada sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "Branding",
    text: "Shop ipsum dolor sit consec tetur Malesuada sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "Data Analysis",
    text: "Shop ipsum dolor sit consec tetur Malesuada sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
  {
    title: "Cloud Services",
    text: "Shop ipsum dolor sit consec tetur Malesuada sed diam in the aliquam tempor",
    icon: "/mnt/data/1f6a9fe2-3e1b-4480-8f31-47b7be10aff4.png",
  },
];

const ServicesSection = () => {
  return (
    <div className="py-20 px-6 md:px-16 bg-gray-50 text-center mb-20 font-jakarta">
      
      <div className="inline-block bg-gray-200 shadow-md px-5 py-2 rounded-full text-sm font-semibold mb-4">
        WHAT WE OFFER
      </div>

      <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-14">
        It <span className="text-blue-600">Service</span> Refers To The Provision
        <br />
        Of Support
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer text-left"
          >
            <img src={s.icon} alt="" className="w-14 mb-6" />

            <h3 className="text-xl font-bold mb-2">{s.title}</h3>

            <p className="text-gray-500 mb-5 text-sm leading-relaxed">
              {s.text}
            </p>

            <button className="font-semibold text-gray-900 flex items-center gap-1">
              Read More <span className="text-blue-600">→</span>
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default ServicesSection;
