import React, { useState } from 'react';

const Results = () => {
  const [searchParams, setSearchParams] = useState({ rollNo: '', class: '10th' });
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    // Mock Result Data
    if (searchParams.rollNo === '12345') {
      setResult({
        name: 'JOHN DOE',
        rollNo: '12345',
        class: '10th',
        status: 'PASS',
        totalMarks: 450,
        subjects: [
          { subjectName: 'English', marks: 90 },
          { subjectName: 'Mathematics', marks: 95 },
          { subjectName: 'Science', marks: 88 },
          { subjectName: 'Social Science', marks: 85 },
          { subjectName: 'Urdu', marks: 92 },
        ]
      });
    } else {
      setError('Result not found. Please check Roll Number.');
    }
  };

  return (
    <div className="py-8 px-4">
      <h2 className="text-2xl font-bold text-primary border-b-2 border-gray-300 pb-2 mb-6">Search Results</h2>

      {/* Search Box */}
      <div className="bg-gray-100 p-6 border border-gray-300 rounded max-w-lg mx-auto mb-8 shadow-sm">
        <form onSubmit={handleSearch} className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-1">Select Class:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={searchParams.class}
              onChange={(e) => setSearchParams({ ...searchParams, class: e.target.value })}
            >
              <option value="10th">Class 10th</option>
              <option value="11th">Class 11th</option>
              <option value="12th">Class 12th</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-bold mb-1">Roll Number:</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter Roll No (Try: 12345)"
              value={searchParams.rollNo}
              onChange={(e) => setSearchParams({ ...searchParams, rollNo: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="w-full bg-primary text-white py-2 font-bold hover:bg-secondary">
            SEARCH
          </button>
        </form>
        {error && <p className="text-red-600 text-center mt-4 font-bold">{error}</p>}
      </div>

      {/* Result Display */}
      {result && (
        <div className="border-4 border-primary p-4 max-w-2xl mx-auto bg-white">
          <div className="text-center border-b-2 border-gray-300 pb-4 mb-4">
            <h3 className="text-xl font-bold text-primary">JAMMU & KASHMIR BOARD OF SCHOOL EDUCATION</h3>
            <p className="font-bold">Marks Statement (Provisional)</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <p><strong>Name:</strong> {result.name}</p>
            <p><strong>Roll No:</strong> {result.rollNo}</p>
            <p><strong>Class:</strong> {result.class}</p>
            <p><strong>Status:</strong> <span className="text-green-700 font-bold">{result.status}</span></p>
          </div>

          <table className="table-custom mb-4">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Marks Obtained</th>
                <th>Max Marks</th>
              </tr>
            </thead>
            <tbody>
              {result.subjects.map((sub, idx) => (
                <tr key={idx}>
                  <td>{sub.subjectName}</td>
                  <td>{sub.marks}</td>
                  <td>100</td>
                </tr>
              ))}
              <tr className="bg-gray-100 font-bold">
                <td>Total</td>
                <td>{result.totalMarks}</td>
                <td>500</td>
              </tr>
            </tbody>
          </table>

          <p className="text-xs text-center text-gray-500 mt-4">
            * This is a computer generated marksheet suitable for immediate information only.
          </p>
        </div>
      )}
    </div>
  );
};

export default Results;
