import React from 'react';

const Academics = () => {
  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-6">Academics</h2>

      <div className="grid gap-6">
        <div className="border p-4 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-secondary text-center mb-4">Syllabus & Curriculum</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button className="bg-gray-100 p-3 text-left border hover:bg-gray-200">📄 Class 10th Syllabus</button>
            <button className="bg-gray-100 p-3 text-left border hover:bg-gray-200">📄 Class 11th Syllabus</button>
            <button className="bg-gray-100 p-3 text-left border hover:bg-gray-200">📄 Class 12th Syllabus</button>
            <button className="bg-gray-100 p-3 text-left border hover:bg-gray-200">📄 Primary/Middle Syllabus</button>
          </div>
        </div>

        <div className="border p-4 hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-secondary text-center mb-4">Academic Calendar</h3>
          <p className="text-center text-gray-600 mb-4">Tentative Schedule for Academic Session 2025-26</p>
          <table className="table-custom">
            <thead>
              <tr>
                <th>Activity</th>
                <th>Zone (Summer/Winter)</th>
                <th>Tentative Month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Admission Process</td>
                <td>Both</td>
                <td>Nov - Dec</td>
              </tr>
              <tr>
                <td>Annual Regular Exam</td>
                <td>Soft Zone</td>
                <td>March</td>
              </tr>
              <tr>
                <td>Annual Regular Exam</td>
                <td>Hard Zone</td>
                <td>April</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Academics;
