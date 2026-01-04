import React from 'react';

const Downloads = () => {
  const categories = ['Date Sheets', 'Syllabus', 'Forms', 'Circulars'];

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-6">Downloads</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {categories.map(cat => (
          <div key={cat} className="bg-gray-100 p-4 border text-center font-bold hover:bg-secondary hover:text-white cursor-pointer transition">
            {cat}
          </div>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="table-custom">
          <thead>
            <tr>
              <th>Description</th>
              <th>Category</th>
              <th className="w-24">Link</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Application Form for Re-evaluation</td>
              <td>Forms</td>
              <td className="text-center"><a href="#" className="text-blue-600 font-bold">Download</a></td>
            </tr>
            <tr>
              <td>Syllabus for Class 10th 2024-25</td>
              <td>Syllabus</td>
              <td className="text-center"><a href="#" className="text-blue-600 font-bold">Download</a></td>
            </tr>
            <tr>
              <td>Bi-Annual Date Sheet 12th Class</td>
              <td>Date Sheets</td>
              <td className="text-center"><a href="#" className="text-blue-600 font-bold">Download</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Downloads;
