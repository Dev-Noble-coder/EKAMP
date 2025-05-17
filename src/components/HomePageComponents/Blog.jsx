import React from 'react';

const blogPosts = [
  {
    title: 'Smart Waste Management Rolled Out in Ado-Ekiti',
    excerpt:
      'The municipal council has introduced smart bins and real-time tracking to improve waste collection efficiency across districts.',
    date: 'May 2025',
    image: 'https://img.freepik.com/free-photo/close-up-hand-collecting-bottle_23-2149181971.jpg?ga=GA1.1.982884454.1747171613&semt=ais_hybrid&w=740',
  },
  {
    title: 'EKAMP Launches e-Government Services',
    excerpt:
      'Residents can now apply for permits, pay bills, and register businesses online via the EKAMP digital platform.',
    date: 'April 2025',
    image: 'https://img.freepik.com/free-photo/person-waiting-food-restaurant_23-2149269213.jpg?ga=GA1.1.982884454.1747171613&semt=ais_hybrid&w=740',
  },
  {
    title: 'New Community Health Center Inaugurated',
    excerpt:
      'The new health center in ward 4 state hospital ado ekiti will serve over 5,000 residents with improved maternal and emergency care.',
    date: 'March 2025',
    image: 'https://img.freepik.com/free-photo/africa-humanitarian-aid-doctor-taking-care-patient_23-2149117860.jpg?ga=GA1.1.982884454.1747171613&semt=ais_hybrid&w=740',
  },
];

const Blog = () => {
  return (
    <section className="bg-[#F9FAFB] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1E3A8A] mb-8">
          Insights & Civic Updates
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-[#1E3A8A] mb-2">
                  {post.title}
                </h3>
                <p className="text-[#374151] text-[12px] mb-4">
                  {post.excerpt}
                </p>
                <span className="text-[#fbbf24] text-[12px] font-medium">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
